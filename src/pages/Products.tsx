import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { t } = useTranslation();

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter(p => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

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
          <h1 className="text-xl font-bold flex-1">
            {category ? t(`categories.${category.toLowerCase().replace(' ', '_')}`) : t('products.all')}
          </h1>
          <Button variant="ghost" size="icon">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Product Grid */}
      <div className="px-4 py-6">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredProducts.length} {t('products.all_products').toLowerCase()}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
