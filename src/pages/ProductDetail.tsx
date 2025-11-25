import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Store, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(product.id)) {
      favorites.push(product.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      toast({ title: "Added to favorites!" });
    }
  };

  const handleAddToShoppingList = () => {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList") || "[]");
    if (!shoppingList.includes(product.id)) {
      shoppingList.push(product.id);
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
      toast({ title: "Added to shopping list!" });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card shadow-sm border-b">
        <div className="px-4 py-4 flex items-center gap-3">
          <Link to="/products">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold flex-1 line-clamp-1">{product.name}</h1>
          <Button variant="ghost" size="icon" onClick={handleAddToFavorites}>
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Product Image */}
      <div className="relative w-full aspect-square bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold text-white ${
            product.badge === "Popular" ? "bg-badge-popular" :
            product.badge === "New" ? "bg-badge-new" :
            "bg-badge-top"
          }`}>
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-3xl font-bold text-primary mb-4">{product.price} KGS</p>
        
        <p className="text-sm text-muted-foreground mb-6">{product.description}</p>

        {/* Sizes or Variants */}
        {product.sizes && (
          <div className="mb-6">
            <p className="font-medium mb-2">Available Sizes:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <Badge key={size} variant="outline" className="px-4 py-2">
                  {size}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {product.variants && (
          <div className="mb-6">
            <p className="font-medium mb-2">Available Colors:</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map(variant => (
                <Badge key={variant} variant="outline" className="px-4 py-2">
                  {variant}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Seller Info */}
        <div className="bg-muted rounded-xl p-4 mb-6">
          <h3 className="font-bold mb-2">Seller Information</h3>
          <p className="text-sm mb-1"><strong>{product.seller.name}</strong></p>
          <p className="text-sm text-muted-foreground mb-1">{product.seller.location}</p>
          <p className="text-sm text-muted-foreground">{product.seller.contact}</p>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Customer Reviews</h3>
          {product.reviews.map((review, index) => (
            <div key={index} className="bg-muted rounded-lg p-3 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm">{review.author}</p>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link to={`/map?location=${encodeURIComponent(product.seller.location)}`}>
            <Button className="w-full" variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              Show on Dordoi Map
            </Button>
          </Link>
          
          <Link to={`/seller/${product.seller.name}`}>
            <Button className="w-full" variant="outline">
              <Store className="mr-2 h-4 w-4" />
              Visit Seller Store
            </Button>
          </Link>

          <Button className="w-full" onClick={handleAddToShoppingList}>
            <Truck className="mr-2 h-4 w-4" />
            Add to Shopping List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
