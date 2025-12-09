import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  size?: "small" | "medium" | "large";
}

const ProductCard = ({ product, size = "medium" }: ProductCardProps) => {
  const { t } = useTranslation();

  // Image dimensions based on size prop for performance
  const imageSizeClasses = {
    small: "h-24 w-24",
    medium: "h-32 w-32 sm:h-40 sm:w-full",
    large: "h-48 w-full"
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform hover:scale-105"
            style={{ 
              maxHeight: size === "small" ? "120px" : size === "medium" ? "160px" : "200px"
            }}
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
        <div className="p-2 sm:p-3">
          <h3 className="text-xs sm:text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
          <p className="text-sm sm:text-lg font-bold text-primary">{product.price.toLocaleString()} KGS</p>
          {product.reviews && product.reviews.length > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-yellow-500 text-xs">★</span>
              <span className="text-xs text-muted-foreground">
                {(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length).toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">
                ({product.reviews.length})
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
