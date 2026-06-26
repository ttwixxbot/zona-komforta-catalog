import sofaPremier from "../assets/products/sofa-premier.jpg";
import sofaHilton from "../assets/products/sofa-hilton.jpg";
import sofaBoston from "../assets/products/sofa-boston.jpg";
import sofaBostonOttoman from "../assets/products/sofa-boston-ottoman.jpg";
import sofaMiami from "../assets/products/sofa-miami.jpg";
import sofaMarseille from "../assets/products/sofa-marseille.jpg";
import sofaMilord from "../assets/products/sofa-milord.jpg";
import sofaNeo from "../assets/products/sofa-neo.jpg";
import sofaPremierOttoman from "../assets/products/sofa-premier-ottoman.jpg";
import sofaPrestige from "../assets/products/sofa-prestige.jpg";
import chairA929 from "../assets/products/chair-a929.jpg";
import chairA928a from "../assets/products/chair-a928a.jpg";
import chair1695 from "../assets/products/chair-1695.jpg";
import chair2006 from "../assets/products/chair-2006.jpg";
import chair2008 from "../assets/products/chair-2008.jpg";
import office4005A from "../assets/products/office-4005-a.jpg";
import office4005B from "../assets/products/office-4005-b.jpg";
import office616b from "../assets/products/office-616b.jpg";
import loungeD618 from "../assets/products/lounge-d618.jpg";
import soft610Beige from "../assets/products/soft-610-beige.jpg";
import soft610Brown from "../assets/products/soft-610-brown.jpg";
import tableWhite from "../assets/products/table-white.jpg";
import tableBrown from "../assets/products/table-brown.jpg";
import bedsideLaptopTable from "../assets/products/bedside-laptop-table.jpg";
import designerChairCategory from "../assets/categories/designer-chair.jpg";
import softChairCategory from "../assets/categories/soft-chair.jpg";

export type CategorySlug =
  | "designer-chairs"
  | "soft-armchairs"
  | "lounge-armchairs"
  | "sofas"
  | "office-chairs"
  | "beds"
  | "wardrobes"
  | "kitchens"
  | "nightstands"
  | "bedrooms";

export type Product = {
  id: string;
  title: string;
  category: CategorySlug;
  price: number;
  image: string;
  description: string;
  characteristics: string[];
  isPopular: boolean;
  isNew: boolean;
};

export type Category = {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  accent: string;
  productLine: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "designer-chairs",
    title: "Дизайнерские стулья",
    shortTitle: "Стулья",
    accent: "Nova Chair",
    productLine: "Для кухни, гостиной и переговорных зон",
    image: designerChairCategory,
  },
  {
    slug: "soft-armchairs",
    title: "Мягкие кресла",
    shortTitle: "Кресла",
    accent: "Moss Chair",
    productLine: "Обволакивающая посадка и мягкий силуэт",
    image: softChairCategory,
  },
  {
    slug: "lounge-armchairs",
    title: "Лаунж-кресла",
    shortTitle: "Лаунж",
    accent: "Luna Armchair",
    productLine: "Кресла для неспешного отдыха и чтения",
    image: loungeD618,
  },
  {
    slug: "sofas",
    title: "Диваны",
    shortTitle: "Диваны",
    accent: "Terra Sofa",
    productLine: "Прямые, угловые и модульные решения",
    image: sofaBoston,
  },
  {
    slug: "office-chairs",
    title: "Офисные кресла",
    shortTitle: "Офис",
    accent: "Focus Seat",
    productLine: "Эргономика для кабинета и home office",
    image: office616b,
  },
  {
    slug: "beds",
    title: "Кровати",
    shortTitle: "Кровати",
    accent: "Calm Bed",
    productLine: "Мягкая спальня в спокойной гамме",
    image: sofaHilton,
  },
  {
    slug: "wardrobes",
    title: "Шкафы",
    shortTitle: "Шкафы",
    accent: "Line Wardrobe",
    productLine: "Системы хранения под интерьер",
    image: tableBrown,
  },
  {
    slug: "kitchens",
    title: "Кухни",
    shortTitle: "Кухни",
    accent: "Warm Kitchen",
    productLine: "Обеденные зоны и кухонные решения",
    image: tableWhite,
  },
  {
    slug: "nightstands",
    title: "Прикроватные тумбы",
    shortTitle: "Тумбы",
    accent: "Quiet Stand",
    productLine: "Компактные акценты рядом с кроватью",
    image: bedsideLaptopTable,
  },
  {
    slug: "bedrooms",
    title: "Спальни",
    shortTitle: "Спальни",
    accent: "Soft Room",
    productLine: "Готовые сочетания для зоны отдыха",
    image: sofaPrestige,
  },
];

export const products: Product[] = [
  {
    id: "terra-sofa-premier",
    title: "Terra Sofa Premier",
    category: "sofas",
    price: 129900,
    image: sofaPremier,
    description:
      "Тёплый диван с мягкими подушками и выразительной фактурой для гостиной в эстетике sunset lounge.",
    characteristics: ["ткань с рельефом", "посадка средней мягкости", "ширина 220 см", "2 декоративные подушки"],
    isPopular: true,
    isNew: true,
  },
  {
    id: "hilton-day-sofa",
    title: "Hilton Day Sofa",
    category: "sofas",
    price: 84900,
    image: sofaHilton,
    description:
      "Лаконичный диван с чистым силуэтом для кабинета, гостевой комнаты или современной квартиры.",
    characteristics: ["ровная спинка", "металлические опоры", "обивка велюр", "нейтральный бежевый тон"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "boston-straight",
    title: "Boston Straight",
    category: "sofas",
    price: 158000,
    image: sofaBoston,
    description:
      "Прямой диван с глубокими модулями и спокойной геометрией для большой гостиной.",
    characteristics: ["модульная посадка", "пружинный блок", "съёмные подушки", "ширина 260 см"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "boston-ottoman",
    title: "Boston Ottoman",
    category: "sofas",
    price: 196000,
    image: sofaBostonOttoman,
    description:
      "Угловой диван с оттоманкой для больших гостиных и приватных лаунж-зон.",
    characteristics: ["оттоманка слева", "глубокая посадка", "мягкая фактура", "семейный формат"],
    isPopular: true,
    isNew: true,
  },
  {
    id: "miami-compact",
    title: "Miami Compact",
    category: "sofas",
    price: 73900,
    image: sofaMiami,
    description:
      "Компактный диван для квартиры или зоны ожидания, где важны мягкость и визуальная лёгкость.",
    characteristics: ["компактный размер", "универсальный оттенок", "простая чистка", "для ежедневного отдыха"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "marseille-euro",
    title: "Marseille Euro",
    category: "sofas",
    price: 112400,
    image: sofaMarseille,
    description:
      "Диван с еврокнижкой и спокойной посадкой для интерьера в тёплых натуральных оттенках.",
    characteristics: ["механизм еврокнижка", "короб для хранения", "мягкие подлокотники", "обивка микровелюр"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "milord-living",
    title: "Milord Living",
    category: "sofas",
    price: 174500,
    image: sofaMilord,
    description:
      "Статусный диван с выразительной формой для гостиной, в которой мебель становится центром композиции.",
    characteristics: ["премиальная посадка", "широкие подушки", "усиленный каркас", "подходит для салона"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "neo-soft",
    title: "Neo Soft",
    category: "sofas",
    price: 98000,
    image: sofaNeo,
    description:
      "Современный диван с мягким профилем и спокойной пластикой для повседневного отдыха.",
    characteristics: ["универсальный дизайн", "лёгкая визуальная форма", "комфортная глубина", "износостойкая ткань"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "prestige-pistachio",
    title: "Prestige Pistachio",
    category: "bedrooms",
    price: 138900,
    image: sofaPrestige,
    description:
      "Мягкий комплектный акцент для спальни или гостиной в приглушённом природном оттенке.",
    characteristics: ["пастельная обивка", "мягкие объёмы", "для спокойных интерьеров", "коллекционный оттенок"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "premier-ottoman",
    title: "Premier Ottoman",
    category: "sofas",
    price: 167000,
    image: sofaPremierOttoman,
    description:
      "Диван с оттоманкой для расслабленного сценария отдыха и домашнего кинотеатра.",
    characteristics: ["оттоманка", "широкая посадка", "декоративные подушки", "терракотовый подтон"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "nova-chair-a928",
    title: "Nova Chair A928",
    category: "designer-chairs",
    price: 18900,
    image: chairA928a,
    description:
      "Дизайнерский стул с выразительной посадкой для обеденной зоны или камерной переговорной.",
    characteristics: ["мягкое сиденье", "стабильная опора", "акцентная форма", "для дома и кафе"],
    isPopular: true,
    isNew: true,
  },
  {
    id: "line-chair-a929",
    title: "Line Chair A929",
    category: "designer-chairs",
    price: 22900,
    image: chairA929,
    description:
      "Высокое кресло-стул с контрастом дерева и тёмной обивки для кабинета и переговорной.",
    characteristics: ["деревянные подлокотники", "мягкая спинка", "поворотная база", "акцентная фурнитура"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "wood-chair-1695",
    title: "Wood Chair 1695",
    category: "designer-chairs",
    price: 15400,
    image: chair1695,
    description:
      "Лаконичный стул для кухонной зоны с мягким сиденьем и тёплым деревянным силуэтом.",
    characteristics: ["деревянная база", "мягкое сиденье", "натуральный тон", "легко комбинируется"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "dining-chair-2006",
    title: "Dining Chair 2006",
    category: "designer-chairs",
    price: 12600,
    image: chair2006,
    description:
      "Обеденный стул с мягкой фактурой для интерьера, где важен уют без визуальной тяжести.",
    characteristics: ["износостойкая ткань", "металлические ножки", "эргономичная спинка", "обеденная зона"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "dining-chair-2008",
    title: "Dining Chair 2008",
    category: "designer-chairs",
    price: 13200,
    image: chair2008,
    description:
      "Компактный стул с мягкой посадкой для кухни, гостиной и небольших коммерческих пространств.",
    characteristics: ["лёгкий каркас", "мягкая посадка", "тёплая гамма", "быстрая перестановка"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "moss-610-beige",
    title: "Moss 610 Beige",
    category: "soft-armchairs",
    price: 26900,
    image: soft610Beige,
    description:
      "Мягкое кресло в светлом тоне для спальни, лаунж-зоны или уютного угла для чтения.",
    characteristics: ["тканевая обивка", "мягкая спинка", "компактная ширина", "спокойный бежевый"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "moss-610-brown",
    title: "Moss 610 Brown",
    category: "soft-armchairs",
    price: 27900,
    image: soft610Brown,
    description:
      "Кресло с тёплым коричневым оттенком, которое поддерживает уютную терракотовую палитру.",
    characteristics: ["коричневая ткань", "мягкая посадка", "устойчивые опоры", "для гостиной"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "luna-armchair-d618",
    title: "Luna Armchair D618",
    category: "lounge-armchairs",
    price: 38800,
    image: loungeD618,
    description:
      "Лаунж-кресло с глубоким силуэтом для расслабленной зоны отдыха и тихих вечеров.",
    characteristics: ["широкая посадка", "мягкие подлокотники", "лаунж-сценарий", "обивка микровелюр"],
    isPopular: true,
    isNew: true,
  },
  {
    id: "focus-chair-4005-a",
    title: "Focus Chair 4005",
    category: "office-chairs",
    price: 31900,
    image: office4005A,
    description:
      "Офисное кресло руководителя с высокой спинкой и выразительной посадкой для рабочего кабинета.",
    characteristics: ["регулировка высоты", "поворотная база", "мягкая спинка", "усиленная крестовина"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "focus-chair-4005-b",
    title: "Focus Chair 4005 Cocoa",
    category: "office-chairs",
    price: 34500,
    image: office4005B,
    description:
      "Кабинетное кресло в тёмном оттенке для спокойного, собранного рабочего пространства.",
    characteristics: ["глубокая посадка", "подлокотники", "газлифт", "износостойкая обивка"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "air-office-616b",
    title: "Air Office 616B",
    category: "office-chairs",
    price: 28400,
    image: office616b,
    description:
      "Лёгкое сетчатое кресло для ежедневной работы, переговорных и домашнего офиса.",
    characteristics: ["сетка на спинке", "регулировка высоты", "колёсная база", "дышащая посадка"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "calm-bed-hilton",
    title: "Calm Bed Hilton",
    category: "beds",
    price: 115000,
    image: sofaHilton,
    description:
      "Мягкая основа для спальни в спокойной бежевой гамме, подобранная как временная позиция каталога.",
    characteristics: ["мягкая обивка", "низкий профиль", "спокойный тон", "для спальни и гостевой"],
    isPopular: false,
    isNew: false,
  },
  {
    id: "line-wardrobe-brown",
    title: "Line Wardrobe Brown",
    category: "wardrobes",
    price: 96900,
    image: tableBrown,
    description:
      "Тёплая система хранения для интерьера в натуральной гамме, продолжает визуальную линию коллекции.",
    characteristics: ["модульная логика", "тёплый древесный тон", "закрытое хранение", "под заказ"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "warm-kitchen-white",
    title: "Warm Kitchen White",
    category: "kitchens",
    price: 248000,
    image: tableWhite,
    description:
      "Светлая кухонная зона с чистой геометрией и мягкой мебельной эстетикой для современного дома.",
    characteristics: ["светлый фасад", "рабочая зона под заказ", "обеденная группа", "проектирование"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "quiet-nightstand",
    title: "Quiet Nightstand",
    category: "nightstands",
    price: 21900,
    image: bedsideLaptopTable,
    description:
      "Компактная прикроватная тумба-столик для спальни, чтения и утреннего кофе.",
    characteristics: ["компактный формат", "лёгкая опора", "для спальни", "матовая поверхность"],
    isPopular: false,
    isNew: true,
  },
  {
    id: "soft-bedroom-prestige",
    title: "Soft Bedroom Prestige",
    category: "bedrooms",
    price: 289000,
    image: sofaPrestige,
    description:
      "Готовая мягкая композиция для спальни в приглушенной палитре с акцентом на тактильность.",
    characteristics: ["спокойная палитра", "комплектный подбор", "мягкая зона", "премиальная фактура"],
    isPopular: true,
    isNew: true,
  },
];

export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(price);

export const getProductById = (id: string) => products.find((product) => product.id === id);

export const getProductsByCategory = (category: CategorySlug) =>
  products.filter((product) => product.category === category);
