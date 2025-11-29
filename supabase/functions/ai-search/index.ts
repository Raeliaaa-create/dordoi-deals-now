import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SearchRequest {
  query?: string;
  imageData?: string; // base64 encoded image
  products: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
  }>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, imageData, products }: SearchRequest = await req.json();
    
    if (!query && !imageData) {
      return new Response(
        JSON.stringify({ error: 'Either query or imageData must be provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build product catalog for AI
    const productCatalog = products.map((p, idx) => 
      `${idx + 1}. ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Description: ${p.description}, Price: ${p.price} KGS`
    ).join('\n');

    let messages;
    
    if (imageData) {
      // Image search
      const systemPrompt = `You are a product search assistant for Dordoi Bazaar marketplace. Analyze the uploaded image and find matching products from the catalog below.

Product Catalog:
${productCatalog}

Return ONLY a JSON array of product IDs that match the image, ordered by relevance (most relevant first). Consider visual similarity, product type, color, and style. Return maximum 5 products.

Response format: ["id1", "id2", "id3"]`;

      messages = [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: [
            { type: "text", text: "Find products similar to this image:" },
            { type: "image_url", image_url: { url: imageData } }
          ]
        }
      ];
    } else {
      // Text search
      const systemPrompt = `You are a product search assistant for Dordoi Bazaar marketplace. Find products matching the user's search query from the catalog below.

Product Catalog:
${productCatalog}

Return ONLY a JSON array of product IDs that match the query, ordered by relevance (most relevant first). Consider product name, description, and category. Return maximum 6 products.

Response format: ["id1", "id2", "id3"]`;

      messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Search query: ${query}` }
      ];
    }

    console.log('Calling Lovable AI Gateway...');
    
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'AI service error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('AI response received');
    
    const aiResponse = data.choices[0].message.content;
    console.log('AI content:', aiResponse);
    
    // Parse the JSON array from AI response
    let productIds: string[];
    try {
      // Extract JSON array from the response (handle markdown code blocks)
      const jsonMatch = aiResponse.match(/\[[\s\S]*?\]/);
      if (jsonMatch) {
        productIds = JSON.parse(jsonMatch[0]);
      } else {
        console.error('No JSON array found in AI response');
        productIds = [];
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      // Fallback: extract product IDs manually
      productIds = products
        .filter(p => aiResponse.toLowerCase().includes(p.id))
        .map(p => p.id)
        .slice(0, 5);
    }

    console.log('Matched product IDs:', productIds);

    return new Response(
      JSON.stringify({ productIds }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ai-search function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
