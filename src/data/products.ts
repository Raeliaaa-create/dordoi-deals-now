export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: "Popular" | "New" | "Top Choice";
  description: string;
  seller: {
    name: string;
    location: string;
    contact: string;
  };
  reviews: {
    author: string;
    rating: number;
    text: string;
  }[];
  sizes?: string[];
  variants?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Women's Oversized T-Shirt",
    price: 650,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Comfortable cotton oversized t-shirt, perfect for casual wear. Available in multiple colors.",
    seller: {
      name: "Fashion Hub",
      location: "Row A5 → Container 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Aida K.", rating: 5, text: "Great quality and comfortable!" },
      { author: "Nursultan B.", rating: 4, text: "Nice fit, good price" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["White", "Black", "Gray", "Pink"]
  },
  {
    id: "2",
    name: "Men's Sneakers",
    price: 1800,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Stylish and comfortable sneakers for everyday wear. Durable rubber sole.",
    seller: {
      name: "Shoe Palace",
      location: "Row B10 → Container 47",
      contact: "+996 555 234 567"
    },
    reviews: [
      { author: "Bektur M.", rating: 5, text: "Very comfortable, worth the price!" },
      { author: "Azamat S.", rating: 5, text: "Perfect for daily use" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Black/White", "Navy", "Gray"]
  },
  {
    id: "3",
    name: "Kids Summer Dress",
    price: 750,
    image: "/products/dress.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Bright and colorful summer dress for girls. Lightweight and breathable fabric.",
    seller: {
      name: "Kids Corner",
      location: "Row C3 → Container 88",
      contact: "+996 555 345 678"
    },
    reviews: [
      { author: "Dinara T.", rating: 5, text: "My daughter loves it!" }
    ],
    sizes: ["2-3y", "4-5y", "6-7y", "8-9y"],
    variants: ["Pink Floral", "Blue Dots", "Yellow Stars"]
  },
  {
    id: "4",
    name: "Power Bank 20,000 mAh",
    price: 1200,
    image: "/products/powerbank.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "High-capacity power bank with fast charging. Compatible with all devices.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Bakyt A.", rating: 4, text: "Good battery life" },
      { author: "Emil K.", rating: 5, text: "Charges fast, highly recommend" }
    ],
    variants: ["Black", "White", "Blue"]
  },
  {
    id: "5",
    name: "Women's Jeans",
    price: 1300,
    image: "/products/jeans.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Classic fit jeans with stretch fabric. Comfortable and stylish.",
    seller: {
      name: "Fashion Hub",
      location: "Row A5 → Container 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Gulnara Z.", rating: 5, text: "Perfect fit!" },
      { author: "Aidai M.", rating: 4, text: "Good quality denim" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    variants: ["Blue", "Black", "Light Wash"]
  },
  {
    id: "6",
    name: "Hoodie Unisex",
    price: 1100,
    image: "/products/hoodie.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Warm and cozy hoodie for cold days. Soft fleece interior.",
    seller: {
      name: "Street Style",
      location: "Row B10 → Container 47",
      contact: "+996 555 567 890"
    },
    reviews: [
      { author: "Timur I.", rating: 5, text: "Very warm and comfortable" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: ["Gray", "Black", "Navy", "Burgundy"]
  },
  {
    id: "7",
    name: "Wireless Earbuds",
    price: 950,
    image: "/products/earbuds.jpg",
    category: "Electronics",
    badge: "New",
    description: "Bluetooth 5.0 wireless earbuds with charging case. Great sound quality.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Aidar K.", rating: 4, text: "Good sound for the price" }
    ],
    variants: ["White", "Black"]
  },
  {
    id: "8",
    name: "Women's Handbag",
    price: 1450,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Elegant PU leather handbag with multiple compartments. Perfect for daily use.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Jyldyz A.", rating: 5, text: "Beautiful bag, lots of space!" },
      { author: "Cholpon B.", rating: 5, text: "Looks expensive, great quality" }
    ],
    variants: ["Black", "Brown", "Beige", "Red"]
  },
  {
    id: "9",
    name: "Kids School Backpack",
    price: 850,
    image: "/products/backpack.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Durable school backpack with multiple pockets. Water-resistant material.",
    seller: {
      name: "Kids Corner",
      location: "Row C3 → Container 88",
      contact: "+996 555 345 678"
    },
    reviews: [
      { author: "Murat S.", rating: 5, text: "Perfect size for school books" }
    ],
    variants: ["Blue", "Pink", "Green", "Purple"]
  },
  {
    id: "10",
    name: "Men's Leather Belt",
    price: 680,
    image: "/products/belt.jpg",
    category: "Accessories",
    badge: "New",
    description: "Genuine leather belt with metal buckle. Classic design.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Ruslan T.", rating: 4, text: "Good quality leather" }
    ],
    sizes: ["90cm", "95cm", "100cm", "105cm"],
    variants: ["Black", "Brown"]
  },
  {
    id: "11",
    name: "Makeup Palette",
    price: 1650,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Professional makeup palette with 24 colors. Long-lasting and pigmented.",
    seller: {
      name: "Beauty Haven",
      location: "Row B10 → Container 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Asel K.", rating: 5, text: "Amazing colors and quality!" },
      { author: "Nazira D.", rating: 5, text: "Best palette I've bought" }
    ]
  },
  {
    id: "12",
    name: "Kitchen Utensil Set",
    price: 890,
    image: "/products/kitchen.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Complete kitchen utensil set with wooden handles. Heat-resistant.",
    seller: {
      name: "Home Essentials",
      location: "Row A5 → Container 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Kanykei M.", rating: 5, text: "Great set for the price!" }
    ]
  }
];

export const categories = [
  { name: "Clothing", icon: "Shirt", color: "bg-primary" },
  { name: "Shoes", icon: "Footprints", color: "bg-accent" },
  { name: "Electronics", icon: "Smartphone", color: "bg-secondary" },
  { name: "Kidswear", icon: "Baby", color: "bg-success" },
  { name: "Home items", icon: "Home", color: "bg-primary" },
  { name: "Accessories", icon: "Watch", color: "bg-accent" },
  { name: "Cosmetics", icon: "Sparkles", color: "bg-secondary" },
  { name: "Bags", icon: "ShoppingBag", color: "bg-success" }
];
