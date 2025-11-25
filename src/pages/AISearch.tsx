import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const AISearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);

  const handlePhotoUpload = () => {
    setIsSearching(true);
    
    // Simulate AI search
    setTimeout(() => {
      // Return random products as results
      const randomResults = products
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      setSearchResults(randomResults);
      setIsSearching(false);
    }, 2000);
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
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
              <Upload className="h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">Upload a Photo</h2>
            <p className="text-center text-muted-foreground mb-6 max-w-sm">
              Take or upload a photo of the product you're looking for, and we'll find similar items in Dordoi market
            </p>
            <Button size="lg" onClick={handlePhotoUpload}>
              <Upload className="mr-2 h-5 w-5" />
              Upload Photo
            </Button>
          </div>
        )}

        {isSearching && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-lg font-medium">Searching for similar products...</p>
            <p className="text-sm text-muted-foreground">This may take a moment</p>
          </div>
        )}

        {!isSearching && searchResults.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Similar Products Found</h2>
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
            
            <Button 
              className="w-full mt-6" 
              variant="outline"
              onClick={() => {
                setSearchResults([]);
                handlePhotoUpload();
              }}
            >
              Search Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearch;
