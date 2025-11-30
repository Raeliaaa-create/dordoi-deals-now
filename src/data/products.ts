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
  },
  {
    id: "13",
    name: "Xiaomi Redmi Buds 4",
    price: 2490,
    image: "/products/earbuds-wireless.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Wireless noise-cancelling earbuds with long battery life. Premium sound quality.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Erlan B.", rating: 5, text: "Excellent sound quality!" },
      { author: "Kamila S.", rating: 4, text: "Great noise cancellation" }
    ],
    variants: ["Black", "White"]
  },
  {
    id: "14",
    name: "Women's Oversized Hoodie",
    price: 1350,
    image: "/products/hoodie-women.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Soft cotton hoodie, perfect for casual wear. Comfortable oversized fit.",
    seller: {
      name: "Fashion Hub",
      location: "Row A5 → Container 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Aigul M.", rating: 5, text: "So comfortable and stylish!" },
      { author: "Nurgul K.", rating: 5, text: "Love the oversized fit" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Pink", "Gray", "Beige", "Black"]
  },
  {
    id: "15",
    name: "Plush Teddy Bear 40cm",
    price: 890,
    image: "/products/teddy-bear.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Soft stuffed toy suitable for children. High-quality plush material.",
    seller: {
      name: "Kids Corner",
      location: "Row C3 → Container 88",
      contact: "+996 555 345 678"
    },
    reviews: [
      { author: "Madina A.", rating: 5, text: "My kids love it!" },
      { author: "Askar T.", rating: 5, text: "Very soft and cute" }
    ],
    variants: ["Brown", "White", "Pink"]
  },
  {
    id: "16",
    name: "Portable Mini Blender",
    price: 1900,
    image: "/products/blender-portable.jpg",
    category: "Home items",
    badge: "Popular",
    description: "USB rechargeable blender for smoothies. Perfect for travel and office.",
    seller: {
      name: "Home Essentials",
      location: "Row A5 → Container 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Zarina K.", rating: 4, text: "Convenient for smoothies" },
      { author: "Daniyar S.", rating: 5, text: "Great for gym trips" }
    ],
    variants: ["Pink", "Blue", "White"]
  },
  {
    id: "17",
    name: "Korean Skincare Set",
    price: 2750,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Moisturizer + toner bundle for daily care. Korean beauty essentials.",
    seller: {
      name: "Beauty Haven",
      location: "Row B10 → Container 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Aida N.", rating: 5, text: "My skin feels amazing!" },
      { author: "Bermet A.", rating: 5, text: "Best skincare routine" }
    ]
  },
  {
    id: "18",
    name: "Men's Casual Jacket",
    price: 2200,
    image: "/products/jacket-men.jpg",
    category: "Clothing",
    badge: "New",
    description: "Stylish casual jacket perfect for spring and autumn. Water-resistant material.",
    seller: {
      name: "Fashion Hub",
      location: "Row A5 → Container 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Ulan M.", rating: 5, text: "Perfect fit and style!" },
      { author: "Azamat K.", rating: 4, text: "Good quality jacket" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Navy", "Black", "Khaki"]
  },
  {
    id: "19",
    name: "Wireless Keyboard & Mouse Combo",
    price: 1650,
    image: "/products/keyboard-mouse.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Ergonomic wireless keyboard and mouse set. Long battery life.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Maksat B.", rating: 5, text: "Great for office work" },
      { author: "Nurlan T.", rating: 4, text: "Comfortable typing experience" }
    ],
    variants: ["Black", "White"]
  },
  {
    id: "20",
    name: "Women's Running Shoes",
    price: 2100,
    image: "/products/running-shoes.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Lightweight running shoes with excellent cushioning. Perfect for sports.",
    seller: {
      name: "Shoe Palace",
      location: "Row B10 → Container 47",
      contact: "+996 555 234 567"
    },
    reviews: [
      { author: "Gulnara A.", rating: 5, text: "Very comfortable for running!" },
      { author: "Ainura S.", rating: 5, text: "Great support and cushioning" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Pink/White", "Blue/Gray", "Black/Red"]
  },
  {
    id: "21",
    name: "Smart Watch Fitness Tracker",
    price: 3200,
    image: "/products/smartwatch.jpg",
    category: "Electronics",
    badge: "New",
    description: "Smart watch with heart rate monitor, sleep tracking, and notifications.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Timur K.", rating: 5, text: "Excellent features for the price!" },
      { author: "Aibek M.", rating: 4, text: "Good fitness tracking" }
    ],
    variants: ["Black", "Silver", "Rose Gold"]
  },
  {
    id: "22",
    name: "Premium Headphones",
    price: 2800,
    image: "/products/headphones.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Over-ear headphones with active noise cancellation. Studio-quality sound.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Eldiyar S.", rating: 5, text: "Amazing sound quality!" },
      { author: "Alibek T.", rating: 5, text: "Best headphones I've owned" }
    ],
    variants: ["Black", "Silver"]
  },
  {
    id: "23",
    name: "Classic Wrist Watch",
    price: 1950,
    image: "/products/watch-classic.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Elegant classic watch with leather strap. Perfect for formal occasions.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Bektur A.", rating: 5, text: "Looks very elegant!" },
      { author: "Dastan K.", rating: 4, text: "Good quality watch" }
    ],
    variants: ["Brown Leather", "Black Leather"]
  },
  {
    id: "24",
    name: "Designer Perfume 100ml",
    price: 3500,
    image: "/products/perfume.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Luxury perfume with long-lasting fragrance. Premium quality.",
    seller: {
      name: "Beauty Haven",
      location: "Row B10 → Container 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Asel M.", rating: 5, text: "Smells amazing all day!" },
      { author: "Cholpon S.", rating: 5, text: "My favorite perfume now" }
    ]
  },
  {
    id: "25",
    name: "Aviator Sunglasses",
    price: 890,
    image: "/products/sunglasses.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Classic aviator sunglasses with UV protection. Stylish and functional.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Emil B.", rating: 5, text: "Great style and quality!" },
      { author: "Ruslan M.", rating: 4, text: "Perfect for summer" }
    ],
    variants: ["Gold/Brown", "Silver/Gray", "Black"]
  },
  {
    id: "26",
    name: "Leather Wallet",
    price: 750,
    image: "/products/wallet.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Genuine leather wallet with multiple card slots. Slim design.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Azamat T.", rating: 5, text: "Perfect size and quality!" },
      { author: "Nurlan K.", rating: 5, text: "Fits perfectly in pocket" }
    ],
    variants: ["Black", "Brown", "Navy"]
  },
  {
    id: "27",
    name: "Digital Camera 4K",
    price: 8900,
    image: "/products/camera.jpg",
    category: "Electronics",
    badge: "New",
    description: "Professional 4K digital camera with multiple lenses. Perfect for photography.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Kubat S.", rating: 5, text: "Amazing photo quality!" },
      { author: "Anvar M.", rating: 5, text: "Great for professional work" }
    ]
  },
  {
    id: "28",
    name: "Sport Sunglasses",
    price: 1100,
    image: "/products/sunglasses-aviator.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Polarized sport sunglasses for outdoor activities. UV400 protection.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Daniyar A.", rating: 5, text: "Perfect for cycling!" },
      { author: "Bakyt S.", rating: 4, text: "Good quality lenses" }
    ],
    variants: ["Red", "Blue", "Black"]
  },
  {
    id: "29",
    name: "Matte Lipstick Set",
    price: 1450,
    image: "/products/lipstick.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Long-lasting matte lipstick set with 6 popular shades. Moisturizing formula.",
    seller: {
      name: "Beauty Haven",
      location: "Row B10 → Container 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Nazgul K.", rating: 5, text: "Beautiful colors!" },
      { author: "Jyldyz M.", rating: 5, text: "Stays on all day" }
    ]
  },
  {
    id: "30",
    name: "Women's Ankle Boots",
    price: 2900,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "New",
    description: "Stylish ankle boots with comfortable heel. Perfect for autumn and winter.",
    seller: {
      name: "Shoe Palace",
      location: "Row B10 → Container 47",
      contact: "+996 555 234 567"
    },
    reviews: [
      { author: "Dinara A.", rating: 5, text: "Very comfortable and stylish!" },
      { author: "Aigul S.", rating: 5, text: "Perfect for cold weather" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Black", "Brown", "Burgundy"]
  },
  {
    id: "31",
    name: "LED Desk Lamp",
    price: 1250,
    image: "/products/lamp-desk.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Adjustable LED desk lamp with multiple brightness levels. Eye-friendly.",
    seller: {
      name: "Home Essentials",
      location: "Row A5 → Container 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Erkin M.", rating: 5, text: "Perfect for studying!" },
      { author: "Aidar K.", rating: 4, text: "Good light quality" }
    ],
    variants: ["White", "Black"]
  },
  {
    id: "32",
    name: "Silicone Phone Case",
    price: 350,
    image: "/products/phone-case.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Soft silicone phone case with shock protection. Fits most models.",
    seller: {
      name: "Tech World",
      location: "Row A5 → Container 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Kamila B.", rating: 5, text: "Perfect fit and protection!" },
      { author: "Bermet T.", rating: 4, text: "Good quality case" }
    ],
    variants: ["Clear", "Black", "Pink", "Blue"]
  },
  {
    id: "33",
    name: "Leather Backpack",
    price: 3800,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "New",
    description: "Premium leather backpack with laptop compartment. Professional and stylish.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Ulan S.", rating: 5, text: "Excellent quality leather!" },
      { author: "Bektur M.", rating: 5, text: "Perfect for work" }
    ],
    variants: ["Brown", "Black"]
  },
  {
    id: "34",
    name: "Silver Ring Set",
    price: 1650,
    image: "/products/ring.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Set of 3 silver rings with elegant design. Perfect gift.",
    seller: {
      name: "Accessory Shop",
      location: "Row C3 → Container 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Asel A.", rating: 5, text: "Beautiful and elegant!" },
      { author: "Kanykei K.", rating: 5, text: "Great quality silver" }
    ],
    sizes: ["16", "17", "18", "19"]
  },
  {
    id: "35",
    name: "Automatic Coffee Maker",
    price: 4500,
    image: "/products/coffee-maker.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Programmable coffee maker with timer. Makes perfect coffee every time.",
    seller: {
      name: "Home Essentials",
      location: "Row A5 → Container 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Manas B.", rating: 5, text: "Best coffee maker!" },
      { author: "Nursultan A.", rating: 5, text: "Easy to use and clean" }
    ],
    variants: ["Black", "Silver"]
  },
  {
    id: "36",
    name: "Decorative Plant Set",
    price: 980,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "New",
    description: "Set of 3 decorative plants with ceramic pots. Perfect for home decor.",
    seller: {
      name: "Home Essentials",
      location: "Row A5 → Container 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Cholpon M.", rating: 5, text: "Beautiful plants!" },
      { author: "Aida T.", rating: 4, text: "Great for decoration" }
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
