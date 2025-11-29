import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Loader2, Search, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AISearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [textQuery, setTextQuery] = useState("");
  const [searchType, setSearchType] = useState<"none" | "text" | "image">("none");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file",
        description: "Please upload an image file",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    setSearchType("image");

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        
        // Call AI search function
        const { data, error } = await supabase.functions.invoke('ai-search', {
          body: {
            imageData: base64Image,
            products: products.map(p => ({
              id: p.id,
              name: p.name,
              description: p.description,
              category: p.category,
              price: p.price
            }))
          }
        });

        if (error) {
          console.error('AI search error:', error);
          toast({
            title: "Search failed",
            description: error.message || "Failed to search products",
            variant: "destructive"
          });
          setIsSearching(false);
          return;
        }

        const matchedProducts = products.filter(p => 
          data.productIds.includes(p.id)
        );

        // Sort by AI ranking
        const sortedResults = data.productIds
          .map((id: string) => matchedProducts.find(p => p.id === id))
          .filter((p: any) => p !== undefined);

        setSearchResults(sortedResults);
        setIsSearching(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to process image",
        variant: "destructive"
      });
      setIsSearching(false);
    }
  };

  const handleTextSearch = async () => {
    if (!textQuery.trim()) {
      toast({
        title: "Empty search",
        description: "Please enter a search query",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    setSearchType("text");

    try {
      const { data, error } = await supabase.functions.invoke('ai-search', {
        body: {
          query: textQuery,
          products: products.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            category: p.category,
            price: p.price
          }))
        }
      });

      if (error) {
        console.error('AI search error:', error);
        toast({
          title: "Search failed",
          description: error.message || "Failed to search products",
          variant: "destructive"
        });
        setIsSearching(false);
        return;
      }

      const matchedProducts = products.filter(p => 
        data.productIds.includes(p.id)
      );

      // Sort by AI ranking
      const sortedResults = data.productIds
        .map((id: string) => matchedProducts.find(p => p.id === id))
        .filter((p: any) => p !== undefined);

      setSearchResults(sortedResults);
      setIsSearching(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to search products",
        variant: "destructive"
      });
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card shadow-sm border-b">
        <div className="px-4 py-4 flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">AI Visual Search</h1>
        </div>
      </header>

      <div className="p-4">
        {!isSearching && searchResults.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            {/* Text Search Section */}
            <div className="w-full max-w-md space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold">Search by Text</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Describe what you're looking for (e.g., "black hoodie", "women's boots")
              </p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  value={textQuery}
                  onChange={(e) => setTextQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTextSearch()}
                  className="flex-1"
                />
                <Button onClick={handleTextSearch} size="lg">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full max-w-md">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Image Upload Section */}
            <div className="w-full max-w-md space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold">Search by Photo</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Upload a photo and we'll find similar items in Dordoi market
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button 
                size="lg" 
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
                variant="outline"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Photo
              </Button>
            </div>
          </div>
        )}

        {isSearching && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-lg font-medium">
              {searchType === "image" 
                ? "Analyzing image and finding similar products..." 
                : "AI is searching through Dordoi products..."}
            </p>
            <p className="text-sm text-muted-foreground">This may take a moment</p>
          </div>
        )}

        {!isSearching && searchResults.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                {searchType === "image" ? "Similar Products Found" : "Search Results"}
              </h2>
              <span className="text-sm text-muted-foreground">
                {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {searchResults.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold text-white ${
                          product.badge === "Popular" ? "bg-badge-popular" :
                          product.badge === "New" ? "bg-badge-new" :
                          "bg-badge-top"
                        }`}>
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
                      <p className="text-lg font-bold text-primary">{product.price} KGS</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button 
                className="flex-1" 
                variant="outline"
                onClick={() => {
                  setSearchResults([]);
                  setTextQuery("");
                  setSearchType("none");
                }}
              >
                New Search
              </Button>
              {searchType === "text" && (
                <Button 
                  className="flex-1" 
                  onClick={handleTextSearch}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Refine Search
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearch;
