import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useTranslation } from "react-i18next";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shoppingList") || "[]");
    setShoppingList(stored);
  }, []);

  const listProducts = products.filter(p => shoppingList.includes(p.id));

  const removeFromList = (id: string) => {
    const updated = shoppingList.filter(item => item !== id);
    setShoppingList(updated);
    localStorage.setItem("shoppingList", JSON.stringify(updated));
  };

  const totalPrice = listProducts.reduce((sum, p) => sum + p.price, 0);

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
          <h1 className="text-xl font-bold">{t('shopping_list.title')}</h1>
        </div>
      </header>

      <div className="p-4">
        {listProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">{t('shopping_list.empty')}</p>
            <p className="text-sm text-muted-foreground text-center mb-6">
              {t('shopping_list.empty_description')}
            </p>
            <Link to="/">
              <Button>{t('favorites.browse_products')}</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {listProducts.map((product) => (
                <div key={product.id} className="bg-card rounded-xl p-4 flex gap-4">
                  <Link to={`/product/${product.id}`} className="flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.seller.location}
                      </p>
                      <p className="text-lg font-bold text-primary">{product.price} KGS</p>
                    </Link>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromList(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-4 border-2 border-primary">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">{t('shopping_list.total')}:</span>
                <span className="text-2xl font-bold text-primary">{totalPrice} KGS</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This is an estimate based on listed prices. Actual prices may vary at the market.
              </p>
              <Link to="/map">
                <Button className="w-full">{t('map.title')}</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
