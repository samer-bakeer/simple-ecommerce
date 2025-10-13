
export const products = [
  {
    id: 1,
    name: "سماعة لاسلكية",
    price: 120,
    image: "https://placehold.co/300x300/3b82f6/white?text=سماعة",
    category: "إلكترونيات",
  },
  {
    id: 2,
    name: "ساعة ذكية",
    price: 250,
    image: "https://placehold.co/300x300/10b981/white?text=ساعة",
    category: "إلكترونيات",
  },
  {
    id: 3,
    name: "حقيبة لابتوب",
    price: 80,
    image: "https://placehold.co/300x300/f97316/white?text=حقيبة",
    category: "إكسسوارات",
  },
  {
    id: 4,
    name: "شاحن محمول",
    price: 45,
    image: "https://placehold.co/300x300/ef4444/white?text=شاحن",
    category: "إلكترونيات",
  },
  {
    id: 5,
    name: "قبعة رياضية",
    price: 25,
    image: "https://placehold.co/300x300/8b5cf6/white?text=قبعة",
    category: "ملابس",
  },
  {
    id: 6,
    name: "نظارات شمسية",
    price: 60,
    image: "https://placehold.co/300x300/ec4899/white?text=نظارات",
    category: "إكسسوارات",
  },
];
export const categories = [...new Set(products.map(p => p.category))];