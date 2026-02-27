import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems, menuCategories, MenuCategory } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");

  const filtered = activeCategory === "All"
    ? menuItems
    : menuItems.filter((i) => i.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient-warm">Menu</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Crafted with passion using the finest seasonal ingredients
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex gap-2 justify-center flex-wrap mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item, i) => (
            <MenuItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
