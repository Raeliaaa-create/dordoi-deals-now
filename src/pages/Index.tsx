import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Camera, Heart, ShoppingCart, Shirt, Footprints, Smartphone, Baby, Home, Watch, Sparkles, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const categoryIcons = {
    Shirt, Footprints, Smartphone, Baby, Home, Watch, Sparkles, ShoppingBag
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card shadow-sm border-b">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl font-bold text-primary">{t('app.name')}</h1>
            <div className="flex gap-2">
              <LanguageSwitcher />
              <Link to="/favorites">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/shopping-list">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('home.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Link to="/ai-search">
              <Button size="icon" variant="default">
                <Camera className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="px-4 pt-4">
        <div className="relative w-full h-32 rounded-xl overflow-hidden">
          <img 
            src="/banner.jpg" 
            alt="Promotion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center px-6">
            <div>
              <p className="text-white font-bold text-lg">Big Sale!</p>
              <p className="text-white text-sm">Up to 50% off</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-bold mb-4">{t('home.categories')}</h2>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.icon as keyof typeof categoryIcons];
            return (
              <Link key={category.name} to={`/products?category=${category.name}`}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md hover:scale-105 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-xs text-center font-medium">{t(`categories.${category.name.toLowerCase().replace(' ', '_')}`)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 pb-6">
        <h2 className="text-lg font-bold mb-4">{t('home.popular_products')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} size="medium" />
          ))}
        </div>
        
        <Link to="/products">
          <Button className="w-full mt-4" variant="outline">
            {t('home.view_all')}
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;
