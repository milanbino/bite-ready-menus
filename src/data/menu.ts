export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  tags?: string[];
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const menuCategories = ["All", "Starters", "Mains", "Desserts", "Drinks"] as const;
export type MenuCategory = (typeof menuCategories)[number];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Burrata",
    description: "Creamy burrata with black truffle, heirloom tomatoes & basil oil",
    price: 16,
    category: "Starters",
    tags: ["Vegetarian"],
    popular: true,
  },
  {
    id: "2",
    name: "Tuna Tartare",
    description: "Yellowfin tuna with avocado mousse, citrus ponzu & sesame",
    price: 19,
    category: "Starters",
    tags: ["Gluten-Free"],
  },
  {
    id: "3",
    name: "Wild Mushroom Soup",
    description: "Forest mushroom velouté with truffle cream & sourdough croutons",
    price: 14,
    category: "Starters",
    tags: ["Vegetarian"],
  },
  {
    id: "4",
    name: "Grilled Ribeye",
    description: "12oz prime ribeye with roasted garlic butter & seasonal vegetables",
    price: 42,
    category: "Mains",
    popular: true,
  },
  {
    id: "5",
    name: "Pan-Seared Salmon",
    description: "Atlantic salmon with saffron risotto, asparagus & lemon beurre blanc",
    price: 34,
    category: "Mains",
    tags: ["Gluten-Free"],
  },
  {
    id: "6",
    name: "Lamb Tagine",
    description: "Slow-braised lamb shoulder with apricot, almond & couscous",
    price: 36,
    category: "Mains",
  },
  {
    id: "7",
    name: "Mushroom Risotto",
    description: "Arborio rice with porcini, parmesan & white truffle oil",
    price: 26,
    category: "Mains",
    tags: ["Vegetarian"],
  },
  {
    id: "8",
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar",
    price: 12,
    category: "Desserts",
    popular: true,
  },
  {
    id: "9",
    name: "Chocolate Fondant",
    description: "Warm dark chocolate cake with molten center & vanilla gelato",
    price: 14,
    category: "Desserts",
  },
  {
    id: "10",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers with mascarpone & cocoa",
    price: 13,
    category: "Desserts",
  },
  {
    id: "11",
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur & vanilla",
    price: 16,
    category: "Drinks",
    popular: true,
  },
  {
    id: "12",
    name: "Sparkling Elderflower",
    description: "Elderflower cordial with prosecco & fresh mint",
    price: 14,
    category: "Drinks",
  },
  {
    id: "13",
    name: "Aged Negroni",
    description: "Barrel-aged gin, Campari & sweet vermouth",
    price: 18,
    category: "Drinks",
  },
];
