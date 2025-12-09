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
  similarGroup?: string; // For grouping similar items
}

// Seller data for reuse
const sellers = {
  fashionHub: { name: "Fashion Hub", location: "Ряд A5 → Контейнер 12", contact: "+996 555 123 456" },
  shoePalace: { name: "Shoe Palace", location: "Ряд B10 → Контейнер 47", contact: "+996 555 234 567" },
  kidsCorner: { name: "Kids Corner", location: "Ряд C3 → Контейнер 88", contact: "+996 555 345 678" },
  techWorld: { name: "Tech World", location: "Ряд A5 → Контейнер 12", contact: "+996 555 456 789" },
  streetStyle: { name: "Street Style", location: "Ряд B10 → Контейнер 47", contact: "+996 555 567 890" },
  accessoryShop: { name: "Accessory Shop", location: "Ряд C3 → Контейнер 88", contact: "+996 555 678 901" },
  beautyHaven: { name: "Beauty Haven", location: "Ряд B10 → Контейнер 47", contact: "+996 555 789 012" },
  homeEssentials: { name: "Home Essentials", location: "Ряд A5 → Контейнер 12", contact: "+996 555 890 123" },
  bagWorld: { name: "Bag World", location: "Ряд D2 → Контейнер 15", contact: "+996 555 901 234" }
};

export const products: Product[] = [
  // ========== CLOTHING (20 items, includes 3 similar t-shirts) ==========
  // Similar T-shirts group (3 items with different prices)
  {
    id: "c1",
    name: "Женская футболка базовая белая",
    price: 550,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Базовая белая футболка из 100% хлопка. Классический крой.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Аида К.", rating: 5, text: "Отличное качество!" },
      { author: "Нурсултан Б.", rating: 4, text: "Хорошая посадка" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Белый"],
    similarGroup: "tshirt-basic"
  },
  {
    id: "c2",
    name: "Женская футболка базовая серая",
    price: 590,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    description: "Базовая серая футболка из 100% хлопка. Классический крой.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Гульмира А.", rating: 5, text: "Идеальный базовый цвет" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Серый"],
    similarGroup: "tshirt-basic"
  },
  {
    id: "c3",
    name: "Женская футболка премиум белая",
    price: 750,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Премиум футболка из органического хлопка. Усиленные швы.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Назгуль М.", rating: 5, text: "Качество на высоте!" },
      { author: "Бермет С.", rating: 5, text: "Лучшая футболка" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Белый", "Черный"],
    similarGroup: "tshirt-basic"
  },
  {
    id: "c4",
    name: "Женские джинсы классические",
    price: 1300,
    image: "/products/jeans.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Классические джинсы с эластичной тканью. Удобные и стильные.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Гульнара З.", rating: 5, text: "Идеальная посадка!" },
      { author: "Айдай М.", rating: 4, text: "Хороший деним" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    variants: ["Синий", "Черный", "Светлый"]
  },
  {
    id: "c5",
    name: "Толстовка унисекс",
    price: 1100,
    image: "/products/hoodie.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Теплая толстовка для холодных дней. Мягкая флисовая подкладка.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Тимур И.", rating: 5, text: "Очень теплая!" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: ["Серый", "Черный", "Темно-синий", "Бордовый"]
  },
  {
    id: "c6",
    name: "Женская толстовка оверсайз",
    price: 1350,
    image: "/products/hoodie-women.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Мягкая хлопковая толстовка, идеальна для повседневной носки.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Айгуль М.", rating: 5, text: "Очень удобная и стильная!" },
      { author: "Нургуль К.", rating: 5, text: "Люблю свободный крой" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Розовый", "Серый", "Бежевый", "Черный"]
  },
  {
    id: "c7",
    name: "Мужская куртка casual",
    price: 2200,
    image: "/products/jacket-men.jpg",
    category: "Clothing",
    badge: "New",
    description: "Стильная куртка для весны и осени. Водонепроницаемый материал.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Улан М.", rating: 5, text: "Отличная посадка и стиль!" },
      { author: "Азамат К.", rating: 4, text: "Хорошее качество" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Темно-синий", "Черный", "Хаки"]
  },
  {
    id: "c8",
    name: "Мужская рубашка классическая",
    price: 980,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    description: "Классическая рубашка для офиса и торжеств. 100% хлопок.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Бакыт А.", rating: 4, text: "Хорошо сидит" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Белый", "Голубой", "Серый"]
  },
  {
    id: "c9",
    name: "Женское платье летнее",
    price: 1450,
    image: "/products/dress.jpg",
    category: "Clothing",
    badge: "New",
    description: "Легкое летнее платье с цветочным принтом. Дышащая ткань.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Динара Т.", rating: 5, text: "Очень красивое!" }
    ],
    sizes: ["S", "M", "L"],
    variants: ["Розовый цветочный", "Синий", "Белый"]
  },
  {
    id: "c10",
    name: "Мужские брюки чиносы",
    price: 1200,
    image: "/products/jeans.jpg",
    category: "Clothing",
    description: "Удобные чиносы для повседневной носки. Легкий хлопок.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Эмиль К.", rating: 4, text: "Удобные на каждый день" }
    ],
    sizes: ["30", "32", "34", "36"],
    variants: ["Бежевый", "Синий", "Серый"]
  },
  {
    id: "c11",
    name: "Женский кардиган",
    price: 1680,
    image: "/products/hoodie-women.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Мягкий вязаный кардиган на пуговицах. Идеален для весны.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Чолпон А.", rating: 5, text: "Очень мягкий и уютный!" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Бежевый", "Серый", "Черный"]
  },
  {
    id: "c12",
    name: "Мужской свитер",
    price: 1550,
    image: "/products/hoodie.jpg",
    category: "Clothing",
    description: "Теплый свитер из шерсти мериноса. Классический крой.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Нурлан Т.", rating: 5, text: "Очень теплый!" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Темно-синий", "Бордовый", "Серый"]
  },
  {
    id: "c13",
    name: "Женские шорты джинсовые",
    price: 890,
    image: "/products/jeans.jpg",
    category: "Clothing",
    badge: "New",
    description: "Стильные джинсовые шорты с высокой талией.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Айнура М.", rating: 4, text: "Хорошая посадка" }
    ],
    sizes: ["26", "28", "30", "32"],
    variants: ["Синий", "Светлый"]
  },
  {
    id: "c14",
    name: "Мужская футболка спортивная",
    price: 680,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    description: "Дышащая футболка для спорта. Быстросохнущий материал.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Максат Б.", rating: 5, text: "Отлично для тренировок" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Черный", "Синий", "Серый"]
  },
  {
    id: "c15",
    name: "Женская юбка миди",
    price: 1120,
    image: "/products/dress.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Элегантная юбка миди с эластичным поясом.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Жылдыз К.", rating: 5, text: "Очень элегантная!" }
    ],
    sizes: ["S", "M", "L"],
    variants: ["Черный", "Бежевый", "Темно-синий"]
  },
  {
    id: "c16",
    name: "Мужские джоггеры",
    price: 1050,
    image: "/products/jeans.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Удобные джоггеры для спорта и отдыха.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Бектур М.", rating: 4, text: "Удобные на каждый день" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Черный", "Серый", "Темно-синий"]
  },
  {
    id: "c17",
    name: "Женский топ на бретелях",
    price: 480,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    description: "Легкий топ на тонких бретелях. Идеален для лета.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Асель Т.", rating: 5, text: "Красивый и удобный" }
    ],
    sizes: ["S", "M", "L"],
    variants: ["Белый", "Черный", "Розовый"]
  },
  {
    id: "c18",
    name: "Мужская ветровка",
    price: 1890,
    image: "/products/jacket-men.jpg",
    category: "Clothing",
    badge: "New",
    description: "Легкая ветровка с капюшоном. Защита от ветра и дождя.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Данияр С.", rating: 5, text: "Отличная для межсезонья" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Черный", "Синий", "Зеленый"]
  },
  {
    id: "c19",
    name: "Женский костюм спортивный",
    price: 2100,
    image: "/products/hoodie-women.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Комплект: толстовка + штаны. Мягкий флис.",
    seller: sellers.fashionHub,
    reviews: [
      { author: "Нургуль А.", rating: 5, text: "Очень удобный комплект!" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Серый", "Черный", "Розовый"]
  },
  {
    id: "c20",
    name: "Мужская жилетка",
    price: 1350,
    image: "/products/jacket-men.jpg",
    category: "Clothing",
    description: "Утепленная жилетка для осени. Водоотталкивающая ткань.",
    seller: sellers.streetStyle,
    reviews: [
      { author: "Руслан К.", rating: 4, text: "Хороша для осени" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Черный", "Синий", "Хаки"]
  },

  // ========== SHOES (20 items, includes 3 similar sneakers) ==========
  // Similar sneakers group (3 items with different prices)
  {
    id: "s1",
    name: "Мужские кроссовки белые классика",
    price: 1650,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Popular",
    description: "Классические белые кроссовки. Базовая модель на каждый день.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Бектур М.", rating: 5, text: "Очень удобные!" },
      { author: "Азамат С.", rating: 5, text: "Классика" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Белый"],
    similarGroup: "sneakers-white"
  },
  {
    id: "s2",
    name: "Мужские кроссовки белые спорт",
    price: 1950,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "New",
    description: "Белые спортивные кроссовки с улучшенной амортизацией.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Эрлан А.", rating: 5, text: "Отлично для бега" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Белый/Серый"],
    similarGroup: "sneakers-white"
  },
  {
    id: "s3",
    name: "Мужские кроссовки белые премиум",
    price: 2450,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Премиум белые кроссовки из натуральной кожи.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Улан К.", rating: 5, text: "Качество супер!" },
      { author: "Нурлан Б.", rating: 5, text: "Стоят своих денег" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Белый"],
    similarGroup: "sneakers-white"
  },
  {
    id: "s4",
    name: "Женские кроссовки для бега",
    price: 2100,
    image: "/products/running-shoes.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Легкие беговые кроссовки с отличной амортизацией.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Гульнара А.", rating: 5, text: "Очень удобны для бега!" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Розовый/Белый", "Синий/Серый", "Черный/Красный"]
  },
  {
    id: "s5",
    name: "Женские ботильоны",
    price: 2900,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "New",
    description: "Стильные ботильоны на удобном каблуке.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Динара А.", rating: 5, text: "Очень удобные!" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Черный", "Коричневый", "Бордовый"]
  },
  {
    id: "s6",
    name: "Мужские туфли классические",
    price: 3200,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Классические кожаные туфли для офиса и торжеств.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Бакыт М.", rating: 5, text: "Элегантные и удобные" }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "s7",
    name: "Женские балетки",
    price: 890,
    image: "/products/running-shoes.jpg",
    category: "Shoes",
    badge: "Popular",
    description: "Удобные балетки на каждый день. Мягкая стелька.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Айгуль С.", rating: 4, text: "Очень легкие" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Черный", "Бежевый", "Красный"]
  },
  {
    id: "s8",
    name: "Мужские сандалии спортивные",
    price: 1200,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    description: "Спортивные сандалии для активного отдыха.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Данияр Т.", rating: 4, text: "Хороши для походов" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Черный", "Синий", "Коричневый"]
  },
  {
    id: "s9",
    name: "Женские кеды",
    price: 1350,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "New",
    description: "Классические кеды с текстильным верхом.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Чолпон М.", rating: 5, text: "Любимые кеды!" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Белый", "Черный", "Красный"]
  },
  {
    id: "s10",
    name: "Мужские лоферы",
    price: 2500,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Стильные лоферы из натуральной кожи.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Эмиль Б.", rating: 5, text: "Отличное качество" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Черный", "Коричневый", "Синий"]
  },
  {
    id: "s11",
    name: "Женские босоножки",
    price: 1680,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "Popular",
    description: "Элегантные босоножки на небольшом каблуке.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Жылдыз А.", rating: 5, text: "Красивые и удобные" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Черный", "Бежевый", "Серебристый"]
  },
  {
    id: "s12",
    name: "Мужские кроссовки баскетбольные",
    price: 3500,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "New",
    description: "Профессиональные баскетбольные кроссовки.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Максат К.", rating: 5, text: "Отличная поддержка" }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    variants: ["Черный/Красный", "Белый/Синий"]
  },
  {
    id: "s13",
    name: "Женские мокасины",
    price: 1150,
    image: "/products/running-shoes.jpg",
    category: "Shoes",
    description: "Мягкие мокасины для комфортной ходьбы.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Асель К.", rating: 4, text: "Удобные на каждый день" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Коричневый", "Бежевый", "Синий"]
  },
  {
    id: "s14",
    name: "Мужские ботинки зимние",
    price: 4200,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Теплые зимние ботинки с мехом. Водонепроницаемые.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Нурлан С.", rating: 5, text: "Очень теплые!" }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "s15",
    name: "Женские кроссовки фитнес",
    price: 1890,
    image: "/products/running-shoes.jpg",
    category: "Shoes",
    badge: "Popular",
    description: "Кроссовки для фитнеса и зала. Дышащий материал.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Бермет А.", rating: 5, text: "Идеальны для зала" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Черный/Розовый", "Белый/Серый"]
  },
  {
    id: "s16",
    name: "Мужские слипоны",
    price: 980,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    description: "Легкие слипоны без шнурков. Удобно надевать.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Руслан Т.", rating: 4, text: "Простые и удобные" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Черный", "Синий", "Серый"]
  },
  {
    id: "s17",
    name: "Женские туфли на каблуке",
    price: 2200,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "New",
    description: "Элегантные туфли на шпильке для особых случаев.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Назгуль М.", rating: 5, text: "Очень красивые!" }
    ],
    sizes: ["36", "37", "38", "39"],
    variants: ["Черный", "Красный", "Бежевый"]
  },
  {
    id: "s18",
    name: "Мужские кроссовки теннисные",
    price: 2800,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Профессиональные теннисные кроссовки.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Айбек К.", rating: 5, text: "Отлично для корта" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Белый", "Белый/Синий"]
  },
  {
    id: "s19",
    name: "Женские угги",
    price: 2400,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "Popular",
    description: "Теплые угги из натуральной овчины.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Аида С.", rating: 5, text: "Очень теплые и мягкие" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Коричневый", "Серый", "Черный"]
  },
  {
    id: "s20",
    name: "Мужские сланцы",
    price: 450,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    description: "Легкие сланцы для пляжа и дома.",
    seller: sellers.shoePalace,
    reviews: [
      { author: "Тимур С.", rating: 4, text: "Удобные для лета" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Черный", "Синий", "Красный"]
  },

  // ========== ELECTRONICS (20 items, includes 3 similar earbuds) ==========
  // Similar earbuds group (3 items with different prices)
  {
    id: "e1",
    name: "Беспроводные наушники базовые",
    price: 850,
    image: "/products/earbuds.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Базовые беспроводные наушники с хорошим звуком.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Айдар К.", rating: 4, text: "Хороший звук за свою цену" }
    ],
    variants: ["Белый", "Черный"],
    similarGroup: "earbuds-wireless"
  },
  {
    id: "e2",
    name: "Беспроводные наушники спорт",
    price: 1450,
    image: "/products/earbuds.jpg",
    category: "Electronics",
    badge: "New",
    description: "Спортивные наушники с защитой от пота.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Эрлан Б.", rating: 5, text: "Не выпадают при беге" }
    ],
    variants: ["Черный", "Синий"],
    similarGroup: "earbuds-wireless"
  },
  {
    id: "e3",
    name: "Беспроводные наушники TWS премиум",
    price: 2490,
    image: "/products/earbuds-wireless.jpg",
    category: "Electronics",
    badge: "Top Choice",
    description: "Премиум наушники с активным шумоподавлением.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Камила С.", rating: 5, text: "Отличное качество!" },
      { author: "Нурлан Т.", rating: 5, text: "Лучшие наушники" }
    ],
    variants: ["Черный", "Белый"],
    similarGroup: "earbuds-wireless"
  },
  {
    id: "e4",
    name: "Power Bank 20,000 мАч",
    price: 1200,
    image: "/products/powerbank.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Мощный power bank с быстрой зарядкой.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Бакыт А.", rating: 4, text: "Хорошая батарея" },
      { author: "Эмиль К.", rating: 5, text: "Быстро заряжает" }
    ],
    variants: ["Черный", "Белый", "Синий"]
  },
  {
    id: "e5",
    name: "Беспроводная клавиатура и мышь",
    price: 1650,
    image: "/products/keyboard-mouse.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Эргономичный комплект для работы.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Максат Б.", rating: 5, text: "Отлично для офиса" }
    ],
    variants: ["Черный", "Белый"]
  },
  {
    id: "e6",
    name: "Смарт-часы фитнес-трекер",
    price: 3200,
    image: "/products/smartwatch.jpg",
    category: "Electronics",
    badge: "New",
    description: "Умные часы с пульсометром и трекером сна.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Тимур К.", rating: 5, text: "Отличные функции!" }
    ],
    variants: ["Черный", "Серебристый", "Розовое золото"]
  },
  {
    id: "e7",
    name: "Премиум наушники полноразмерные",
    price: 2800,
    image: "/products/headphones.jpg",
    category: "Electronics",
    badge: "Top Choice",
    description: "Полноразмерные наушники с шумоподавлением.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Эльдияр С.", rating: 5, text: "Потрясающий звук!" }
    ],
    variants: ["Черный", "Серебристый"]
  },
  {
    id: "e8",
    name: "Цифровая камера 4K",
    price: 8900,
    image: "/products/camera.jpg",
    category: "Electronics",
    badge: "New",
    description: "Профессиональная 4K камера для фотографии.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Кубат С.", rating: 5, text: "Отличное качество фото!" }
    ]
  },
  {
    id: "e9",
    name: "Портативная колонка Bluetooth",
    price: 1350,
    image: "/products/earbuds.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Мощная портативная колонка с 360° звуком.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Данияр А.", rating: 5, text: "Громкий и чистый звук" }
    ],
    variants: ["Черный", "Синий", "Красный"]
  },
  {
    id: "e10",
    name: "USB-хаб 7-в-1",
    price: 890,
    image: "/products/keyboard-mouse.jpg",
    category: "Electronics",
    description: "Универсальный хаб с USB, HDMI, SD-картридером.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Улан Б.", rating: 4, text: "Удобно для ноутбука" }
    ],
    variants: ["Серый", "Черный"]
  },
  {
    id: "e11",
    name: "Электронная книга",
    price: 4500,
    image: "/products/smartwatch.jpg",
    category: "Electronics",
    badge: "New",
    description: "E-ink дисплей, 8GB памяти, подсветка.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Айбек М.", rating: 5, text: "Удобно читать" }
    ],
    variants: ["Черный", "Белый"]
  },
  {
    id: "e12",
    name: "Веб-камера Full HD",
    price: 1550,
    image: "/products/camera.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Веб-камера 1080p со встроенным микрофоном.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Бектур С.", rating: 4, text: "Хорошо для видеозвонков" }
    ]
  },
  {
    id: "e13",
    name: "Игровая мышь",
    price: 1200,
    image: "/products/keyboard-mouse.jpg",
    category: "Electronics",
    badge: "Top Choice",
    description: "Игровая мышь с RGB подсветкой.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Руслан М.", rating: 5, text: "Отличная для игр" }
    ],
    variants: ["Черный"]
  },
  {
    id: "e14",
    name: "Беспроводная зарядка",
    price: 780,
    image: "/products/powerbank.jpg",
    category: "Electronics",
    description: "Быстрая беспроводная зарядка 15W.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Эмиль Т.", rating: 4, text: "Удобно заряжать" }
    ],
    variants: ["Черный", "Белый"]
  },
  {
    id: "e15",
    name: "Портативный проектор",
    price: 12500,
    image: "/products/camera.jpg",
    category: "Electronics",
    badge: "New",
    description: "Мини-проектор Full HD с Wi-Fi.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Нурсултан К.", rating: 5, text: "Отличный для кино" }
    ]
  },
  {
    id: "e16",
    name: "Фитнес-браслет",
    price: 1350,
    image: "/products/smartwatch.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Фитнес-браслет с трекером активности.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Асель А.", rating: 4, text: "Хорошо считает шаги" }
    ],
    variants: ["Черный", "Синий", "Розовый"]
  },
  {
    id: "e17",
    name: "Механическая клавиатура",
    price: 3500,
    image: "/products/keyboard-mouse.jpg",
    category: "Electronics",
    badge: "Top Choice",
    description: "Механическая клавиатура с RGB подсветкой.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Максат А.", rating: 5, text: "Приятно печатать" }
    ],
    variants: ["Черный"]
  },
  {
    id: "e18",
    name: "Экшн-камера",
    price: 5500,
    image: "/products/camera.jpg",
    category: "Electronics",
    badge: "New",
    description: "Водонепроницаемая экшн-камера 4K.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Данияр С.", rating: 5, text: "Отлично для активного отдыха" }
    ]
  },
  {
    id: "e19",
    name: "USB-микрофон для подкастов",
    price: 2200,
    image: "/products/headphones.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Конденсаторный микрофон для записи.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Улан Т.", rating: 5, text: "Чистый звук записи" }
    ],
    variants: ["Черный", "Серебристый"]
  },
  {
    id: "e20",
    name: "Smart-розетка Wi-Fi",
    price: 650,
    image: "/products/powerbank.jpg",
    category: "Electronics",
    description: "Умная розетка с управлением через приложение.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Бакыт С.", rating: 4, text: "Удобно управлять" }
    ]
  },

  // ========== KIDSWEAR (20 items) ==========
  {
    id: "k1",
    name: "Летнее платье для девочек",
    price: 750,
    image: "/products/dress.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Яркое летнее платье для девочек.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Динара Т.", rating: 5, text: "Дочке очень нравится!" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Розовый цветочный", "Синий в горошек", "Желтый"]
  },
  {
    id: "k2",
    name: "Детский школьный рюкзак",
    price: 850,
    image: "/products/backpack.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Прочный школьный рюкзак с несколькими карманами.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Мурат С.", rating: 5, text: "Идеальный размер!" }
    ],
    variants: ["Синий", "Розовый", "Зеленый", "Фиолетовый"]
  },
  {
    id: "k3",
    name: "Плюшевый медведь 40см",
    price: 890,
    image: "/products/teddy-bear.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Мягкая игрушка для детей.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Мадина А.", rating: 5, text: "Дети в восторге!" }
    ],
    variants: ["Коричневый", "Белый", "Розовый"]
  },
  {
    id: "k4",
    name: "Детская толстовка с капюшоном",
    price: 680,
    image: "/products/hoodie.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Теплая детская толстовка с ушками.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Гульмира С.", rating: 5, text: "Очень милая!" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Серый", "Розовый", "Голубой"]
  },
  {
    id: "k5",
    name: "Детские джинсы",
    price: 590,
    image: "/products/jeans.jpg",
    category: "Kidswear",
    description: "Прочные детские джинсы с эластичным поясом.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Айнура Т.", rating: 4, text: "Хорошее качество" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Синий", "Темно-синий"]
  },
  {
    id: "k6",
    name: "Детские кроссовки светящиеся",
    price: 1250,
    image: "/products/sneakers.jpg",
    category: "Kidswear",
    badge: "Top Choice",
    description: "Кроссовки с LED подсветкой в подошве.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Бермет К.", rating: 5, text: "Ребенок в восторге!" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    variants: ["Розовый", "Синий", "Черный"]
  },
  {
    id: "k7",
    name: "Набор конструктора",
    price: 1450,
    image: "/products/teddy-bear.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Развивающий конструктор 200 деталей.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Эрлан А.", rating: 5, text: "Ребенок играет часами" }
    ]
  },
  {
    id: "k8",
    name: "Детская футболка с принтом",
    price: 350,
    image: "/products/tshirt.jpg",
    category: "Kidswear",
    description: "Яркая футболка с мультяшным принтом.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Асель М.", rating: 4, text: "Хороший хлопок" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Белый", "Желтый", "Голубой"]
  },
  {
    id: "k9",
    name: "Детская куртка зимняя",
    price: 2200,
    image: "/products/jacket-men.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Теплая зимняя куртка с капюшоном.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Нурлан С.", rating: 5, text: "Очень теплая!" }
    ],
    sizes: ["3-4 года", "5-6 лет", "7-8 лет", "9-10 лет"],
    variants: ["Синий", "Красный", "Черный"]
  },
  {
    id: "k10",
    name: "Детские сандалии",
    price: 680,
    image: "/products/running-shoes.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Легкие сандалии с закрытым носком.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Динара К.", rating: 4, text: "Удобные" }
    ],
    sizes: ["24", "26", "28", "30"],
    variants: ["Синий", "Розовый", "Зеленый"]
  },
  {
    id: "k11",
    name: "Детский спортивный костюм",
    price: 1100,
    image: "/products/hoodie.jpg",
    category: "Kidswear",
    description: "Комплект: кофта + штаны. Удобный для активных игр.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Мурат А.", rating: 5, text: "Отлично для садика" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Серый", "Синий", "Розовый"]
  },
  {
    id: "k12",
    name: "Детская пижама",
    price: 550,
    image: "/products/tshirt.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Мягкая пижама из 100% хлопка.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Гульнара Т.", rating: 5, text: "Очень мягкая ткань" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Розовый", "Голубой", "Желтый"]
  },
  {
    id: "k13",
    name: "Мягкая кукла",
    price: 750,
    image: "/products/teddy-bear.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Мягкая тряпичная кукла 35см.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Чолпон С.", rating: 5, text: "Дочка не расстается!" }
    ],
    variants: ["Розовое платье", "Синее платье"]
  },
  {
    id: "k14",
    name: "Детские резиновые сапоги",
    price: 580,
    image: "/products/boots-women.jpg",
    category: "Kidswear",
    description: "Яркие сапоги для луж и дождя.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Айгуль М.", rating: 4, text: "Удобно для осени" }
    ],
    sizes: ["24", "26", "28", "30", "32"],
    variants: ["Желтый", "Синий", "Красный"]
  },
  {
    id: "k15",
    name: "Детский рюкзак с игрушкой",
    price: 980,
    image: "/products/backpack.jpg",
    category: "Kidswear",
    badge: "Top Choice",
    description: "Рюкзак с отстегивающейся мягкой игрушкой.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Бермет А.", rating: 5, text: "Оригинальная идея!" }
    ],
    variants: ["Медведь", "Зайчик", "Единорог"]
  },
  {
    id: "k16",
    name: "Детская шапка с ушками",
    price: 320,
    image: "/products/hoodie.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Теплая вязаная шапка с милыми ушками.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Жылдыз К.", rating: 5, text: "Очень милая!" }
    ],
    sizes: ["1-2 года", "3-4 года", "5-6 лет"],
    variants: ["Розовый", "Серый", "Белый"]
  },
  {
    id: "k17",
    name: "Набор машинок",
    price: 650,
    image: "/products/teddy-bear.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Набор из 6 металлических машинок.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Данияр Т.", rating: 5, text: "Сын в восторге" }
    ]
  },
  {
    id: "k18",
    name: "Детские варежки",
    price: 280,
    image: "/products/hoodie.jpg",
    category: "Kidswear",
    description: "Теплые варежки на резинке.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Асель К.", rating: 4, text: "Не теряются" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-8 лет"],
    variants: ["Красный", "Синий", "Розовый"]
  },
  {
    id: "k19",
    name: "Детский комбинезон",
    price: 1650,
    image: "/products/jacket-men.jpg",
    category: "Kidswear",
    badge: "Top Choice",
    description: "Теплый зимний комбинезон.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Нурсултан А.", rating: 5, text: "Очень теплый!" }
    ],
    sizes: ["1-2 года", "2-3 года", "3-4 года"],
    variants: ["Синий", "Розовый", "Красный"]
  },
  {
    id: "k20",
    name: "Детские носочки (5 пар)",
    price: 350,
    image: "/products/tshirt.jpg",
    category: "Kidswear",
    description: "Набор носочков с веселыми принтами.",
    seller: sellers.kidsCorner,
    reviews: [
      { author: "Мадина С.", rating: 5, text: "Яркие и мягкие" }
    ],
    sizes: ["1-2 года", "3-4 года", "5-6 лет"],
    variants: ["Разноцветные"]
  },

  // ========== HOME ITEMS (20 items) ==========
  {
    id: "h1",
    name: "Набор кухонных принадлежностей",
    price: 890,
    image: "/products/kitchen.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Полный набор кухонных принадлежностей.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Каныкей М.", rating: 5, text: "Отличный набор!" }
    ]
  },
  {
    id: "h2",
    name: "Портативный мини-блендер",
    price: 1900,
    image: "/products/blender-portable.jpg",
    category: "Home items",
    badge: "Popular",
    description: "USB-блендер для смузи.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Зарина К.", rating: 4, text: "Удобно для смузи" }
    ],
    variants: ["Розовый", "Синий", "Белый"]
  },
  {
    id: "h3",
    name: "LED настольная лампа",
    price: 1250,
    image: "/products/lamp-desk.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Регулируемая LED лампа.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Эркин М.", rating: 5, text: "Отлично для учёбы!" }
    ],
    variants: ["Белый", "Черный"]
  },
  {
    id: "h4",
    name: "Автоматическая кофеварка",
    price: 4500,
    image: "/products/coffee-maker.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Программируемая кофеварка с таймером.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Манас Б.", rating: 5, text: "Лучшая кофеварка!" }
    ],
    variants: ["Черный", "Серебристый"]
  },
  {
    id: "h5",
    name: "Набор декоративных растений",
    price: 980,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "New",
    description: "Набор из 3 декоративных растений.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Чолпон М.", rating: 5, text: "Красивые растения!" }
    ]
  },
  {
    id: "h6",
    name: "Постельное белье комплект",
    price: 2200,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Комплект постельного белья из сатина.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Айгуль Т.", rating: 5, text: "Мягкое и приятное" }
    ],
    variants: ["Белый", "Серый", "Голубой"]
  },
  {
    id: "h7",
    name: "Электрический чайник",
    price: 1350,
    image: "/products/coffee-maker.jpg",
    category: "Home items",
    description: "Чайник с регулировкой температуры.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Бакыт А.", rating: 4, text: "Быстро кипятит" }
    ],
    variants: ["Белый", "Черный"]
  },
  {
    id: "h8",
    name: "Набор полотенец",
    price: 780,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "New",
    description: "Набор из 4 банных полотенец.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Гульмира С.", rating: 5, text: "Мягкие и пушистые" }
    ],
    variants: ["Белый", "Серый", "Бежевый"]
  },
  {
    id: "h9",
    name: "Подушка ортопедическая",
    price: 1650,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Ортопедическая подушка с эффектом памяти.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Нурлан К.", rating: 5, text: "Спина скажет спасибо" }
    ]
  },
  {
    id: "h10",
    name: "Сковорода антипригарная",
    price: 1100,
    image: "/products/kitchen.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Сковорода 28см с антипригарным покрытием.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Динара А.", rating: 5, text: "Ничего не пригорает" }
    ]
  },
  {
    id: "h11",
    name: "Набор контейнеров для хранения",
    price: 650,
    image: "/products/kitchen.jpg",
    category: "Home items",
    description: "Набор из 5 контейнеров разных размеров.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Асель Т.", rating: 4, text: "Удобно хранить еду" }
    ]
  },
  {
    id: "h12",
    name: "Увлажнитель воздуха",
    price: 2500,
    image: "/products/blender-portable.jpg",
    category: "Home items",
    badge: "New",
    description: "Ультразвуковой увлажнитель с подсветкой.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Эмиль С.", rating: 5, text: "Тихий и эффективный" }
    ],
    variants: ["Белый", "Черный"]
  },
  {
    id: "h13",
    name: "Органайзер для косметики",
    price: 550,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Прозрачный органайзер с отделениями.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Бермет К.", rating: 5, text: "Все на виду" }
    ]
  },
  {
    id: "h14",
    name: "Набор ножей",
    price: 1800,
    image: "/products/kitchen.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Набор из 5 ножей с подставкой.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Максат Т.", rating: 5, text: "Острые и удобные" }
    ]
  },
  {
    id: "h15",
    name: "Корзина для белья",
    price: 450,
    image: "/products/plants.jpg",
    category: "Home items",
    description: "Складная корзина для белья.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Чолпон А.", rating: 4, text: "Вместительная" }
    ],
    variants: ["Серый", "Бежевый"]
  },
  {
    id: "h16",
    name: "Коврик для ванной",
    price: 380,
    image: "/products/plants.jpg",
    category: "Home items",
    description: "Мягкий противоскользящий коврик.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Айнура С.", rating: 5, text: "Не скользит" }
    ],
    variants: ["Белый", "Серый", "Голубой"]
  },
  {
    id: "h17",
    name: "Часы настенные",
    price: 890,
    image: "/products/lamp-desk.jpg",
    category: "Home items",
    badge: "New",
    description: "Стильные настенные часы с бесшумным механизмом.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Руслан А.", rating: 5, text: "Красиво смотрятся" }
    ],
    variants: ["Черный", "Белый", "Золотой"]
  },
  {
    id: "h18",
    name: "Плед флисовый",
    price: 1100,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Мягкий флисовый плед 150x200см.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Жылдыз М.", rating: 5, text: "Очень мягкий и теплый" }
    ],
    variants: ["Серый", "Бежевый", "Розовый"]
  },
  {
    id: "h19",
    name: "Набор стаканов",
    price: 580,
    image: "/products/kitchen.jpg",
    category: "Home items",
    description: "Набор из 6 стеклянных стаканов.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Данияр К.", rating: 4, text: "Красивые стаканы" }
    ]
  },
  {
    id: "h20",
    name: "Ваза для цветов",
    price: 420,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "New",
    description: "Стеклянная ваза минималистичного дизайна.",
    seller: sellers.homeEssentials,
    reviews: [
      { author: "Аида С.", rating: 5, text: "Элегантная" }
    ],
    variants: ["Прозрачный", "Серый", "Синий"]
  },

  // ========== ACCESSORIES (20 items) ==========
  {
    id: "a1",
    name: "Мужской кожаный ремень",
    price: 680,
    image: "/products/belt.jpg",
    category: "Accessories",
    badge: "New",
    description: "Натуральная кожа с металлической пряжкой.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Руслан Т.", rating: 4, text: "Хорошая кожа" }
    ],
    sizes: ["90см", "95см", "100см", "105см"],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "a2",
    name: "Классические наручные часы",
    price: 1950,
    image: "/products/watch-classic.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Элегантные классические часы с кожаным ремешком.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Бектур А.", rating: 5, text: "Выглядят элегантно!" }
    ],
    variants: ["Коричневая кожа", "Черная кожа"]
  },
  {
    id: "a3",
    name: "Солнцезащитные очки авиаторы",
    price: 890,
    image: "/products/sunglasses.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Классические очки-авиаторы с UV-защитой.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Эмиль Б.", rating: 5, text: "Отличный стиль!" }
    ],
    variants: ["Золотой/Коричневый", "Серебро/Серый", "Черный"]
  },
  {
    id: "a4",
    name: "Кожаный кошелек",
    price: 750,
    image: "/products/wallet.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Натуральная кожа с множеством отделений.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Азамат Т.", rating: 5, text: "Идеальный размер!" }
    ],
    variants: ["Черный", "Коричневый", "Темно-синий"]
  },
  {
    id: "a5",
    name: "Спортивные солнцезащитные очки",
    price: 1100,
    image: "/products/sunglasses-aviator.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Поляризованные спортивные очки.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Данияр А.", rating: 5, text: "Отлично для велоспорта!" }
    ],
    variants: ["Красный", "Синий", "Черный"]
  },
  {
    id: "a6",
    name: "Силиконовый чехол для телефона",
    price: 350,
    image: "/products/phone-case.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Мягкий силиконовый чехол с защитой от ударов.",
    seller: sellers.techWorld,
    reviews: [
      { author: "Камила Б.", rating: 5, text: "Отличная посадка!" }
    ],
    variants: ["Прозрачный", "Черный", "Розовый", "Синий"]
  },
  {
    id: "a7",
    name: "Набор серебряных колец",
    price: 1650,
    image: "/products/ring.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Набор из 3 серебряных колец.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Асель А.", rating: 5, text: "Красивые и элегантные!" }
    ],
    sizes: ["16", "17", "18", "19"]
  },
  {
    id: "a8",
    name: "Шарф шерстяной",
    price: 580,
    image: "/products/hoodie.jpg",
    category: "Accessories",
    badge: "New",
    description: "Теплый шерстяной шарф.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Нургуль С.", rating: 5, text: "Очень теплый" }
    ],
    variants: ["Серый", "Черный", "Бордовый"]
  },
  {
    id: "a9",
    name: "Кепка бейсболка",
    price: 450,
    image: "/products/tshirt.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Классическая бейсболка с регулировкой.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Максат С.", rating: 4, text: "Хорошо сидит" }
    ],
    variants: ["Черный", "Белый", "Синий", "Красный"]
  },
  {
    id: "a10",
    name: "Браслет кожаный",
    price: 380,
    image: "/products/belt.jpg",
    category: "Accessories",
    description: "Мужской кожаный браслет с металлической застежкой.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Улан Т.", rating: 5, text: "Стильный аксессуар" }
    ],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "a11",
    name: "Зонт автоматический",
    price: 650,
    image: "/products/backpack.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Компактный зонт с автоматическим открытием.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Бакыт М.", rating: 5, text: "Удобно открывается" }
    ],
    variants: ["Черный", "Синий", "Красный"]
  },
  {
    id: "a12",
    name: "Перчатки кожаные",
    price: 980,
    image: "/products/belt.jpg",
    category: "Accessories",
    badge: "New",
    description: "Теплые кожаные перчатки с подкладкой.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Эрлан К.", rating: 5, text: "Отлично греют руки" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "a13",
    name: "Цепочка серебряная",
    price: 1200,
    image: "/products/ring.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Серебряная цепочка 50см.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Жылдыз А.", rating: 5, text: "Красивая и качественная" }
    ]
  },
  {
    id: "a14",
    name: "Галстук шелковый",
    price: 550,
    image: "/products/tshirt.jpg",
    category: "Accessories",
    description: "Классический шелковый галстук.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Нурлан А.", rating: 4, text: "Хорош для офиса" }
    ],
    variants: ["Синий", "Бордовый", "Черный"]
  },
  {
    id: "a15",
    name: "Шапка вязаная",
    price: 420,
    image: "/products/hoodie.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Теплая вязаная шапка.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Айбек С.", rating: 5, text: "Теплая и мягкая" }
    ],
    variants: ["Серый", "Черный", "Бежевый"]
  },
  {
    id: "a16",
    name: "Портмоне женское",
    price: 890,
    image: "/products/wallet.jpg",
    category: "Accessories",
    badge: "New",
    description: "Элегантное женское портмоне.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Чолпон К.", rating: 5, text: "Много отделений" }
    ],
    variants: ["Красный", "Черный", "Бежевый"]
  },
  {
    id: "a17",
    name: "Ключница",
    price: 320,
    image: "/products/wallet.jpg",
    category: "Accessories",
    description: "Кожаная ключница на молнии.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Руслан К.", rating: 4, text: "Удобно носить ключи" }
    ],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "a18",
    name: "Серьги золотые",
    price: 2500,
    image: "/products/ring.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Изящные золотые серьги.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Асель М.", rating: 5, text: "Очень красивые" }
    ]
  },
  {
    id: "a19",
    name: "Ремень женский",
    price: 480,
    image: "/products/belt.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Тонкий женский ремень с пряжкой.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Назгуль К.", rating: 5, text: "Красивый и удобный" }
    ],
    sizes: ["80см", "85см", "90см"],
    variants: ["Черный", "Коричневый", "Красный"]
  },
  {
    id: "a20",
    name: "Очки для компьютера",
    price: 650,
    image: "/products/sunglasses.jpg",
    category: "Accessories",
    badge: "New",
    description: "Очки с защитой от синего света.",
    seller: sellers.accessoryShop,
    reviews: [
      { author: "Данияр М.", rating: 5, text: "Глаза меньше устают" }
    ],
    variants: ["Черный", "Прозрачный"]
  },

  // ========== COSMETICS (20 items) ==========
  {
    id: "cos1",
    name: "Палетка для макияжа",
    price: 1650,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Профессиональная палетка с 24 цветами.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Асель К.", rating: 5, text: "Потрясающие цвета!" }
    ]
  },
  {
    id: "cos2",
    name: "Корейский набор для ухода",
    price: 2750,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Увлажняющий крем и тоник.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Аида Н.", rating: 5, text: "Кожа выглядит потрясающе!" }
    ]
  },
  {
    id: "cos3",
    name: "Дизайнерские духи 100мл",
    price: 3500,
    image: "/products/perfume.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Роскошный парфюм с долгоиграющим ароматом.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Асель М.", rating: 5, text: "Потрясающий аромат!" }
    ]
  },
  {
    id: "cos4",
    name: "Набор матовых помад",
    price: 1450,
    image: "/products/lipstick.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Стойкая матовая помада с 6 оттенками.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Назгуль К.", rating: 5, text: "Красивые цвета!" }
    ]
  },
  {
    id: "cos5",
    name: "Тональный крем",
    price: 980,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Легкий тональный крем с SPF 30.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Гульнара А.", rating: 5, text: "Идеально ложится" }
    ],
    variants: ["Светлый", "Средний", "Темный"]
  },
  {
    id: "cos6",
    name: "Маска для лица набор",
    price: 650,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Набор из 10 тканевых масок.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Бермет С.", rating: 5, text: "Кожа сияет" }
    ]
  },
  {
    id: "cos7",
    name: "Тушь для ресниц",
    price: 580,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Удлиняющая и объемная тушь.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Чолпон К.", rating: 5, text: "Не осыпается" }
    ],
    variants: ["Черный"]
  },
  {
    id: "cos8",
    name: "Крем для рук",
    price: 320,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    description: "Увлажняющий крем с витамином Е.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Айгуль Т.", rating: 4, text: "Хорошо увлажняет" }
    ]
  },
  {
    id: "cos9",
    name: "Набор кистей для макияжа",
    price: 1200,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Профессиональный набор из 12 кистей.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Жылдыз М.", rating: 5, text: "Мягкие и качественные" }
    ]
  },
  {
    id: "cos10",
    name: "Мицеллярная вода",
    price: 450,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Мягко очищает и тонизирует кожу.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Динара С.", rating: 5, text: "Отлично снимает макияж" }
    ]
  },
  {
    id: "cos11",
    name: "Блеск для губ",
    price: 380,
    image: "/products/lipstick.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Сияющий блеск с увлажняющим эффектом.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Асель Т.", rating: 5, text: "Красивый блеск" }
    ],
    variants: ["Розовый", "Персиковый", "Красный"]
  },
  {
    id: "cos12",
    name: "Сыворотка для лица",
    price: 1550,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Антивозрастная сыворотка с гиалуроновой кислотой.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Нургуль А.", rating: 5, text: "Кожа стала упругой" }
    ]
  },
  {
    id: "cos13",
    name: "Пудра компактная",
    price: 680,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Матирующая пудра для всех типов кожи.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Бермет К.", rating: 5, text: "Держится весь день" }
    ],
    variants: ["Светлый", "Средний"]
  },
  {
    id: "cos14",
    name: "Лак для ногтей набор",
    price: 550,
    image: "/products/lipstick.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Набор из 6 лаков разных цветов.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Айнура К.", rating: 4, text: "Красивые оттенки" }
    ]
  },
  {
    id: "cos15",
    name: "Крем-гель для душа",
    price: 420,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    description: "Нежный гель с ароматом лаванды.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Чолпон А.", rating: 5, text: "Приятный аромат" }
    ]
  },
  {
    id: "cos16",
    name: "Парфюм мужской 50мл",
    price: 2200,
    image: "/products/perfume.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Стильный мужской аромат.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Руслан М.", rating: 5, text: "Отличный запах" }
    ]
  },
  {
    id: "cos17",
    name: "Румяна",
    price: 480,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Нежные румяна с натуральным оттенком.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Гульмира К.", rating: 5, text: "Естественный цвет" }
    ],
    variants: ["Розовый", "Персиковый"]
  },
  {
    id: "cos18",
    name: "Маска для волос",
    price: 580,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Восстанавливающая маска с аргановым маслом.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Назгуль С.", rating: 5, text: "Волосы стали мягкими" }
    ]
  },
  {
    id: "cos19",
    name: "Карандаш для бровей",
    price: 350,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    description: "Водостойкий карандаш с щеточкой.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Жылдыз К.", rating: 4, text: "Хорошо держится" }
    ],
    variants: ["Коричневый", "Черный"]
  },
  {
    id: "cos20",
    name: "Солнцезащитный крем SPF 50",
    price: 780,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Защита от UVA/UVB лучей.",
    seller: sellers.beautyHaven,
    reviews: [
      { author: "Аида К.", rating: 5, text: "Не оставляет белых следов" }
    ]
  },

  // ========== BAGS (20 items) ==========
  {
    id: "b1",
    name: "Женская сумка",
    price: 1450,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Элегантная сумка из кожзама.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Жылдыз А.", rating: 5, text: "Красивая сумка!" }
    ],
    variants: ["Черный", "Коричневый", "Бежевый", "Красный"]
  },
  {
    id: "b2",
    name: "Кожаный рюкзак",
    price: 3800,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "New",
    description: "Премиум кожаный рюкзак с отделением для ноутбука.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Улан С.", rating: 5, text: "Отличная кожа!" }
    ],
    variants: ["Коричневый", "Черный"]
  },
  {
    id: "b3",
    name: "Сумка через плечо",
    price: 980,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Popular",
    description: "Компактная сумка на длинном ремешке.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Чолпон М.", rating: 5, text: "Удобно носить" }
    ],
    variants: ["Черный", "Коричневый", "Зеленый"]
  },
  {
    id: "b4",
    name: "Рюкзак городской",
    price: 1650,
    image: "/products/backpack.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Вместительный городской рюкзак.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Максат К.", rating: 5, text: "Много карманов" }
    ],
    variants: ["Черный", "Серый", "Синий"]
  },
  {
    id: "b5",
    name: "Клатч вечерний",
    price: 1200,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "New",
    description: "Элегантный клатч для особых случаев.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Асель К.", rating: 5, text: "Очень красивый" }
    ],
    variants: ["Черный", "Золотой", "Серебряный"]
  },
  {
    id: "b6",
    name: "Сумка-шоппер",
    price: 850,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Popular",
    description: "Большая сумка для покупок.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Динара А.", rating: 5, text: "Очень вместительная" }
    ],
    variants: ["Бежевый", "Черный", "Коричневый"]
  },
  {
    id: "b7",
    name: "Мужская сумка-планшет",
    price: 1350,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Кожаная сумка для документов.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Бакыт М.", rating: 5, text: "Качественная кожа" }
    ],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "b8",
    name: "Поясная сумка",
    price: 580,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "New",
    description: "Удобная поясная сумка.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Эрлан Т.", rating: 4, text: "Практичная" }
    ],
    variants: ["Черный", "Красный", "Синий"]
  },
  {
    id: "b9",
    name: "Дорожная сумка",
    price: 2500,
    image: "/products/backpack.jpg",
    category: "Bags",
    badge: "Popular",
    description: "Большая сумка для путешествий.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Нурлан С.", rating: 5, text: "Отлично для поездок" }
    ],
    variants: ["Черный", "Синий"]
  },
  {
    id: "b10",
    name: "Рюкзак спортивный",
    price: 1100,
    image: "/products/backpack.jpg",
    category: "Bags",
    description: "Легкий рюкзак для спорта.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Данияр К.", rating: 4, text: "Хорош для зала" }
    ],
    variants: ["Черный", "Синий", "Серый"]
  },
  {
    id: "b11",
    name: "Сумка для ноутбука",
    price: 1800,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Защитная сумка для ноутбука 15.6\".",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Улан А.", rating: 5, text: "Надежная защита" }
    ],
    variants: ["Черный", "Серый"]
  },
  {
    id: "b12",
    name: "Косметичка",
    price: 450,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Popular",
    description: "Компактная косметичка на молнии.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Гульнара С.", rating: 5, text: "Удобная и красивая" }
    ],
    variants: ["Розовый", "Черный", "Бежевый"]
  },
  {
    id: "b13",
    name: "Портфель деловой",
    price: 4200,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "New",
    description: "Классический кожаный портфель.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Бектур К.", rating: 5, text: "Элегантный и практичный" }
    ],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "b14",
    name: "Мини-сумка",
    price: 680,
    image: "/products/handbag.jpg",
    category: "Bags",
    description: "Маленькая сумочка на цепочке.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Асель С.", rating: 5, text: "Милая и стильная" }
    ],
    variants: ["Черный", "Белый", "Розовый"]
  },
  {
    id: "b15",
    name: "Рюкзак антивор",
    price: 2200,
    image: "/products/backpack.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Рюкзак со скрытыми карманами.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Руслан А.", rating: 5, text: "Чувствую себя защищенным" }
    ],
    variants: ["Черный", "Серый"]
  },
  {
    id: "b16",
    name: "Холщовая сумка",
    price: 350,
    image: "/products/backpack.jpg",
    category: "Bags",
    badge: "Popular",
    description: "Экологичная холщовая сумка.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Чолпон К.", rating: 4, text: "Практичная для покупок" }
    ],
    variants: ["Бежевый", "Черный"]
  },
  {
    id: "b17",
    name: "Сумка-мессенджер",
    price: 1450,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "New",
    description: "Стильная сумка на длинном ремне.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Эмиль К.", rating: 5, text: "Удобно для города" }
    ],
    variants: ["Черный", "Коричневый", "Хаки"]
  },
  {
    id: "b18",
    name: "Чемодан на колесах",
    price: 5500,
    image: "/products/backpack.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Прочный чемодан для путешествий.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Нурсултан М.", rating: 5, text: "Отлично катится" }
    ],
    variants: ["Черный", "Синий", "Красный"]
  },
  {
    id: "b19",
    name: "Сумка пляжная",
    price: 480,
    image: "/products/handbag.jpg",
    category: "Bags",
    description: "Большая сумка для пляжа.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Айгуль К.", rating: 4, text: "Хороша для лета" }
    ],
    variants: ["Полосатый", "Синий", "Бежевый"]
  },
  {
    id: "b20",
    name: "Органайзер для сумки",
    price: 280,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Popular",
    description: "Вставка-органайзер для сумки.",
    seller: sellers.bagWorld,
    reviews: [
      { author: "Динара К.", rating: 5, text: "Все на месте" }
    ],
    variants: ["Черный", "Бежевый", "Розовый"]
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

// Helper function to get similar products
export const getSimilarProducts = (productId: string): Product[] => {
  const product = products.find(p => p.id === productId);
  if (!product?.similarGroup) return [];
  
  return products.filter(p => 
    p.similarGroup === product.similarGroup && p.id !== productId
  );
};

// Helper function to get products by category with limit
export const getProductsByCategory = (category: string, limit?: number): Product[] => {
  const categoryProducts = products.filter(p => p.category === category);
  return limit ? categoryProducts.slice(0, limit) : categoryProducts;
};
