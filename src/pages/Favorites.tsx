import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useTranslation } from "react-i18next";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  const removeFavorite = (id: string) => {
    const updated = favorites.filter(fav => fav !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
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
          <h1 className="text-xl font-bold">{t('favorites.title')}</h1>
        </div>
      </header>

      <div className="p-4">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">{t('favorites.empty')}</p>
            <p className="text-sm text-muted-foreground text-center mb-6">
              {t('favorites.empty_description')}
            </p>
            <Link to="/">
              <Button>{t('favorites.browse_products')}</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {favoriteProducts.map((product) => (
              <div key={product.id} className="relative">
                <Link to={`/product/${product.id}`}>
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
                          {t(`badges.${product.badge.toLowerCase().replace(' ', '_')}`)}
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
                      <p className="text-lg font-bold text-primary">{product.price} KGS</p>
                    </div>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-card hover:bg-card/90"
                  onClick={() => removeFavorite(product.id)}
                >
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
