import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
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
            <ProductCard key={product.id} product={product} size="medium" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
