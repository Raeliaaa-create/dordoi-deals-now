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
    name: "Женская футболка оверсайз",
    price: 650,
    image: "/products/tshirt.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Удобная хлопковая футболка оверсайз, идеальна для повседневной носки.",
    seller: {
      name: "Fashion Hub",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Аида К.", rating: 5, text: "Отличное качество!" },
      { author: "Нурсултан Б.", rating: 4, text: "Хорошая посадка" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Белый", "Черный", "Серый", "Розовый"]
  },
  {
    id: "2",
    name: "Мужские кроссовки",
    price: 1800,
    image: "/products/sneakers.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Стильные и удобные кроссовки для повседневной носки. Прочная резиновая подошва.",
    seller: {
      name: "Shoe Palace",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 234 567"
    },
    reviews: [
      { author: "Бектур М.", rating: 5, text: "Очень удобные!" },
      { author: "Азамат С.", rating: 5, text: "Идеальны для носки" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    variants: ["Черный/Белый", "Темно-синий", "Серый"]
  },
  {
    id: "3",
    name: "Летнее платье для девочек",
    price: 750,
    image: "/products/dress.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Яркое летнее платье для девочек. Легкая дышащая ткань.",
    seller: {
      name: "Kids Corner",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 345 678"
    },
    reviews: [
      { author: "Динара Т.", rating: 5, text: "Дочке очень нравится!" }
    ],
    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
    variants: ["Розовый цветочный", "Синий в горошек", "Желтый со звездами"]
  },
  {
    id: "4",
    name: "Power Bank 20,000 мАч",
    price: 1200,
    image: "/products/powerbank.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Мощный power bank с быстрой зарядкой. Совместим со всеми устройствами.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Бакыт А.", rating: 4, text: "Хорошая батарея" },
      { author: "Эмиль К.", rating: 5, text: "Быстро заряжает" }
    ],
    variants: ["Черный", "Белый", "Синий"]
  },
  {
    id: "5",
    name: "Женские джинсы",
    price: 1300,
    image: "/products/jeans.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Классические джинсы с эластичной тканью. Удобные и стильные.",
    seller: {
      name: "Fashion Hub",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Гульнара З.", rating: 5, text: "Идеальная посадка!" },
      { author: "Айдай М.", rating: 4, text: "Хороший деним" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    variants: ["Синий", "Черный", "Светлый"]
  },
  {
    id: "6",
    name: "Толстовка унисекс",
    price: 1100,
    image: "/products/hoodie.jpg",
    category: "Clothing",
    badge: "Popular",
    description: "Теплая толстовка для холодных дней. Мягкая флисовая подкладка.",
    seller: {
      name: "Street Style",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 567 890"
    },
    reviews: [
      { author: "Тимур И.", rating: 5, text: "Очень теплая!" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: ["Серый", "Черный", "Темно-синий", "Бордовый"]
  },
  {
    id: "7",
    name: "Беспроводные наушники",
    price: 950,
    image: "/products/earbuds.jpg",
    category: "Electronics",
    badge: "New",
    description: "Bluetooth 5.0 наушники с кейсом для зарядки. Отличное качество звука.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Айдар К.", rating: 4, text: "Хороший звук" }
    ],
    variants: ["Белый", "Черный"]
  },
  {
    id: "8",
    name: "Женская сумка",
    price: 1450,
    image: "/products/handbag.jpg",
    category: "Bags",
    badge: "Top Choice",
    description: "Элегантная сумка из кожзама с несколькими отделениями. Идеальна для повседневного использования.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Жылдыз А.", rating: 5, text: "Красивая сумка!" },
      { author: "Чолпон Б.", rating: 5, text: "Отличное качество" }
    ],
    variants: ["Черный", "Коричневый", "Бежевый", "Красный"]
  },
  {
    id: "9",
    name: "Детский школьный рюкзак",
    price: 850,
    image: "/products/backpack.jpg",
    category: "Kidswear",
    badge: "Popular",
    description: "Прочный школьный рюкзак с несколькими карманами. Водостойкий материал.",
    seller: {
      name: "Kids Corner",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 345 678"
    },
    reviews: [
      { author: "Мурат С.", rating: 5, text: "Идеальный размер!" }
    ],
    variants: ["Синий", "Розовый", "Зеленый", "Фиолетовый"]
  },
  {
    id: "10",
    name: "Мужской кожаный ремень",
    price: 680,
    image: "/products/belt.jpg",
    category: "Accessories",
    badge: "New",
    description: "Натуральная кожа с металлической пряжкой. Классический дизайн.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Руслан Т.", rating: 4, text: "Хорошая кожа" }
    ],
    sizes: ["90см", "95см", "100см", "105см"],
    variants: ["Черный", "Коричневый"]
  },
  {
    id: "11",
    name: "Палетка для макияжа",
    price: 1650,
    image: "/products/makeup.jpg",
    category: "Cosmetics",
    badge: "Popular",
    description: "Профессиональная палетка с 24 цветами. Стойкие и пигментированные.",
    seller: {
      name: "Beauty Haven",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Асель К.", rating: 5, text: "Потрясающие цвета!" },
      { author: "Назира Д.", rating: 5, text: "Лучшая палетка" }
    ]
  },
  {
    id: "12",
    name: "Набор кухонных принадлежностей",
    price: 890,
    image: "/products/kitchen.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Полный набор кухонных принадлежностей с деревянными ручками. Термостойкие.",
    seller: {
      name: "Home Essentials",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Каныкей М.", rating: 5, text: "Отличный набор!" }
    ]
  },
  {
    id: "13",
    name: "Беспроводные наушники TWS",
    price: 2490,
    image: "/products/earbuds-wireless.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Беспроводные наушники с шумоподавлением и долгим временем работы.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Эрлан Б.", rating: 5, text: "Отличное качество звука!" },
      { author: "Камила С.", rating: 4, text: "Хорошее шумоподавление" }
    ],
    variants: ["Черный", "Белый"]
  },
  {
    id: "14",
    name: "Женская толстовка оверсайз",
    price: 1350,
    image: "/products/hoodie-women.jpg",
    category: "Clothing",
    badge: "Top Choice",
    description: "Мягкая хлопковая толстовка, идеальна для повседневной носки.",
    seller: {
      name: "Fashion Hub",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Айгуль М.", rating: 5, text: "Очень удобная и стильная!" },
      { author: "Нургуль К.", rating: 5, text: "Люблю свободный крой" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: ["Розовый", "Серый", "Бежевый", "Черный"]
  },
  {
    id: "15",
    name: "Плюшевый медведь 40см",
    price: 890,
    image: "/products/teddy-bear.jpg",
    category: "Kidswear",
    badge: "New",
    description: "Мягкая игрушка для детей. Высококачественный плюшевый материал.",
    seller: {
      name: "Kids Corner",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 345 678"
    },
    reviews: [
      { author: "Мадина А.", rating: 5, text: "Дети в восторге!" },
      { author: "Аскар Т.", rating: 5, text: "Очень мягкий и милый" }
    ],
    variants: ["Коричневый", "Белый", "Розовый"]
  },
  {
    id: "16",
    name: "Портативный мини-блендер",
    price: 1900,
    image: "/products/blender-portable.jpg",
    category: "Home items",
    badge: "Popular",
    description: "USB-блендер для смузи. Идеален для путешествий и офиса.",
    seller: {
      name: "Home Essentials",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Зарина К.", rating: 4, text: "Удобно для смузи" },
      { author: "Данияр С.", rating: 5, text: "Отлично для спортзала" }
    ],
    variants: ["Розовый", "Синий", "Белый"]
  },
  {
    id: "17",
    name: "Корейский набор для ухода",
    price: 2750,
    image: "/products/skincare.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Увлажняющий крем и тоник для ежедневного ухода. Корейская косметика.",
    seller: {
      name: "Beauty Haven",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Аида Н.", rating: 5, text: "Кожа выглядит потрясающе!" },
      { author: "Бермет А.", rating: 5, text: "Лучший уход за кожей" }
    ]
  },
  {
    id: "18",
    name: "Мужская куртка casual",
    price: 2200,
    image: "/products/jacket-men.jpg",
    category: "Clothing",
    badge: "New",
    description: "Стильная куртка для весны и осени. Водонепроницаемый материал.",
    seller: {
      name: "Fashion Hub",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 123 456"
    },
    reviews: [
      { author: "Улан М.", rating: 5, text: "Отличная посадка и стиль!" },
      { author: "Азамат К.", rating: 4, text: "Хорошее качество" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    variants: ["Темно-синий", "Черный", "Хаки"]
  },
  {
    id: "19",
    name: "Беспроводная клавиатура и мышь",
    price: 1650,
    image: "/products/keyboard-mouse.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Эргономичная беспроводная клавиатура и мышь. Долгое время работы батареи.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Максат Б.", rating: 5, text: "Отлично для офиса" },
      { author: "Нурлан Т.", rating: 4, text: "Удобно печатать" }
    ],
    variants: ["Черный", "Белый"]
  },
  {
    id: "20",
    name: "Женские кроссовки для бега",
    price: 2100,
    image: "/products/running-shoes.jpg",
    category: "Shoes",
    badge: "Top Choice",
    description: "Легкие беговые кроссовки с отличной амортизацией. Идеальны для спорта.",
    seller: {
      name: "Shoe Palace",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 234 567"
    },
    reviews: [
      { author: "Гульнара А.", rating: 5, text: "Очень удобны для бега!" },
      { author: "Айнура С.", rating: 5, text: "Отличная поддержка" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Розовый/Белый", "Синий/Серый", "Черный/Красный"]
  },
  {
    id: "21",
    name: "Смарт-часы фитнес-трекер",
    price: 3200,
    image: "/products/smartwatch.jpg",
    category: "Electronics",
    badge: "New",
    description: "Умные часы с пульсометром, трекером сна и уведомлениями.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Тимур К.", rating: 5, text: "Отличные функции!" },
      { author: "Айбек М.", rating: 4, text: "Хороший фитнес-трекер" }
    ],
    variants: ["Черный", "Серебристый", "Розовое золото"]
  },
  {
    id: "22",
    name: "Премиум наушники",
    price: 2800,
    image: "/products/headphones.jpg",
    category: "Electronics",
    badge: "Popular",
    description: "Полноразмерные наушники с активным шумоподавлением. Студийное качество звука.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Эльдияр С.", rating: 5, text: "Потрясающий звук!" },
      { author: "Алибек Т.", rating: 5, text: "Лучшие наушники" }
    ],
    variants: ["Черный", "Серебристый"]
  },
  {
    id: "23",
    name: "Классические наручные часы",
    price: 1950,
    image: "/products/watch-classic.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Элегантные классические часы с кожаным ремешком. Идеальны для торжеств.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Бектур А.", rating: 5, text: "Выглядят элегантно!" },
      { author: "Дастан К.", rating: 4, text: "Хорошие часы" }
    ],
    variants: ["Коричневая кожа", "Черная кожа"]
  },
  {
    id: "24",
    name: "Дизайнерские духи 100мл",
    price: 3500,
    image: "/products/perfume.jpg",
    category: "Cosmetics",
    badge: "New",
    description: "Роскошный парфюм с долгоиграющим ароматом. Премиум качество.",
    seller: {
      name: "Beauty Haven",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Асель М.", rating: 5, text: "Потрясающий аромат!" },
      { author: "Чолпон С.", rating: 5, text: "Теперь мой любимый" }
    ]
  },
  {
    id: "25",
    name: "Солнцезащитные очки авиаторы",
    price: 890,
    image: "/products/sunglasses.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Классические очки-авиаторы с UV-защитой. Стильные и функциональные.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Эмиль Б.", rating: 5, text: "Отличный стиль!" },
      { author: "Руслан М.", rating: 4, text: "Идеальны для лета" }
    ],
    variants: ["Золотой/Коричневый", "Серебро/Серый", "Черный"]
  },
  {
    id: "26",
    name: "Кожаный кошелек",
    price: 750,
    image: "/products/wallet.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Натуральная кожа с множеством отделений. Тонкий дизайн.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Азамат Т.", rating: 5, text: "Идеальный размер!" },
      { author: "Нурлан К.", rating: 5, text: "Удобно в кармане" }
    ],
    variants: ["Черный", "Коричневый", "Темно-синий"]
  },
  {
    id: "27",
    name: "Цифровая камера 4K",
    price: 8900,
    image: "/products/camera.jpg",
    category: "Electronics",
    badge: "New",
    description: "Профессиональная 4K камера с несколькими объективами. Идеальна для фотографии.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Кубат С.", rating: 5, text: "Отличное качество фото!" },
      { author: "Анвар М.", rating: 5, text: "Отлично для работы" }
    ]
  },
  {
    id: "28",
    name: "Спортивные солнцезащитные очки",
    price: 1100,
    image: "/products/sunglasses-aviator.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Поляризованные спортивные очки для активного отдыха. Защита UV400.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Данияр А.", rating: 5, text: "Отлично для велоспорта!" },
      { author: "Бакыт С.", rating: 4, text: "Хорошие линзы" }
    ],
    variants: ["Красный", "Синий", "Черный"]
  },
  {
    id: "29",
    name: "Набор матовых помад",
    price: 1450,
    image: "/products/lipstick.jpg",
    category: "Cosmetics",
    badge: "Top Choice",
    description: "Стойкая матовая помада с 6 популярными оттенками. Увлажняющая формула.",
    seller: {
      name: "Beauty Haven",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 789 012"
    },
    reviews: [
      { author: "Назгуль К.", rating: 5, text: "Красивые цвета!" },
      { author: "Жылдыз М.", rating: 5, text: "Держится весь день" }
    ]
  },
  {
    id: "30",
    name: "Женские ботильоны",
    price: 2900,
    image: "/products/boots-women.jpg",
    category: "Shoes",
    badge: "New",
    description: "Стильные ботильоны на удобном каблуке. Идеальны для осени и зимы.",
    seller: {
      name: "Shoe Palace",
      location: "Ряд B10 → Контейнер 47",
      contact: "+996 555 234 567"
    },
    reviews: [
      { author: "Динара А.", rating: 5, text: "Очень удобные!" },
      { author: "Айгуль С.", rating: 5, text: "Отлично для холодов" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    variants: ["Черный", "Коричневый", "Бордовый"]
  },
  {
    id: "31",
    name: "LED настольная лампа",
    price: 1250,
    image: "/products/lamp-desk.jpg",
    category: "Home items",
    badge: "Popular",
    description: "Регулируемая LED лампа с уровнями яркости. Безопасна для глаз.",
    seller: {
      name: "Home Essentials",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Эркин М.", rating: 5, text: "Отлично для учёбы!" },
      { author: "Айдар К.", rating: 4, text: "Хороший свет" }
    ],
    variants: ["Белый", "Черный"]
  },
  {
    id: "32",
    name: "Силиконовый чехол для телефона",
    price: 350,
    image: "/products/phone-case.jpg",
    category: "Accessories",
    badge: "Top Choice",
    description: "Мягкий силиконовый чехол с защитой от ударов. Подходит для многих моделей.",
    seller: {
      name: "Tech World",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 456 789"
    },
    reviews: [
      { author: "Камила Б.", rating: 5, text: "Отличная посадка!" },
      { author: "Бермет Т.", rating: 4, text: "Хорошее качество" }
    ],
    variants: ["Прозрачный", "Черный", "Розовый", "Синий"]
  },
  {
    id: "33",
    name: "Кожаный рюкзак",
    price: 3800,
    image: "/products/backpack-leather.jpg",
    category: "Bags",
    badge: "New",
    description: "Премиум кожаный рюкзак с отделением для ноутбука. Профессиональный и стильный.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Улан С.", rating: 5, text: "Отличная кожа!" },
      { author: "Бектур М.", rating: 5, text: "Идеален для работы" }
    ],
    variants: ["Коричневый", "Черный"]
  },
  {
    id: "34",
    name: "Набор серебряных колец",
    price: 1650,
    image: "/products/ring.jpg",
    category: "Accessories",
    badge: "Popular",
    description: "Набор из 3 серебряных колец элегантного дизайна. Отличный подарок.",
    seller: {
      name: "Accessory Shop",
      location: "Ряд C3 → Контейнер 88",
      contact: "+996 555 678 901"
    },
    reviews: [
      { author: "Асель А.", rating: 5, text: "Красивые и элегантные!" },
      { author: "Каныкей К.", rating: 5, text: "Хорошее серебро" }
    ],
    sizes: ["16", "17", "18", "19"]
  },
  {
    id: "35",
    name: "Автоматическая кофеварка",
    price: 4500,
    image: "/products/coffee-maker.jpg",
    category: "Home items",
    badge: "Top Choice",
    description: "Программируемая кофеварка с таймером. Идеальный кофе каждый раз.",
    seller: {
      name: "Home Essentials",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Манас Б.", rating: 5, text: "Лучшая кофеварка!" },
      { author: "Нурсултан А.", rating: 5, text: "Легко использовать" }
    ],
    variants: ["Черный", "Серебристый"]
  },
  {
    id: "36",
    name: "Набор декоративных растений",
    price: 980,
    image: "/products/plants.jpg",
    category: "Home items",
    badge: "New",
    description: "Набор из 3 декоративных растений с керамическими горшками. Идеален для интерьера.",
    seller: {
      name: "Home Essentials",
      location: "Ряд A5 → Контейнер 12",
      contact: "+996 555 890 123"
    },
    reviews: [
      { author: "Чолпон М.", rating: 5, text: "Красивые растения!" },
      { author: "Аида Т.", rating: 4, text: "Отлично для декора" }
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
