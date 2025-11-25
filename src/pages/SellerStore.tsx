import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const SellerStore = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  
  const sellerProducts = products.filter(p => p.seller.name === decodedName);
  const seller = sellerProducts[0]?.seller;

  if (!seller) {
    return <div className="p-4">Seller not found</div>;
  }

  const allReviews = sellerProducts.flatMap(p => p.reviews);
  const avgRating = allReviews.length > 0
    ? (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1)
    : "N/A";

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
          <h1 className="text-xl font-bold flex-1 line-clamp-1">{seller.name}</h1>
        </div>
      </header>

      {/* Seller Info */}
      <div className="p-4 bg-card border-b">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
            {seller.name[0]}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{seller.name}</h2>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium">{avgRating}</span>
              <span>({allReviews.length} reviews)</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{seller.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{seller.contact}</span>
          </div>
        </div>

        <Link to={`/map?location=${encodeURIComponent(seller.location)}`}>
          <Button className="w-full" variant="outline">
            <MapPin className="mr-2 h-4 w-4" />
            View on Map
          </Button>
        </Link>
      </div>

      {/* Products */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Products ({sellerProducts.length})</h3>
        <div className="grid grid-cols-2 gap-3">
          {sellerProducts.map((product) => (
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
      </div>

      {/* Reviews */}
      {allReviews.length > 0 && (
        <div className="p-4 border-t">
          <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>
          <div className="space-y-2">
            {allReviews.map((review, index) => (
              <div key={index} className="bg-muted rounded-lg p-3">
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
        </div>
      )}
    </div>
  );
};

export default SellerStore;
