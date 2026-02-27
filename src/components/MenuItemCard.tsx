import { motion } from "framer-motion";
import { Plus, Flame } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard = ({ item, index }: MenuItemCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group glass-card rounded-xl p-5 hover:glow-warm transition-all duration-300"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="font-display text-lg font-semibold text-foreground truncate">
              {item.name}
            </h3>
            {item.popular && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-body font-medium shrink-0">
                <Flame className="w-3 h-3" />
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
            {item.description}
          </p>
          {item.tags && (
            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col items-end gap-3 shrink-0">
          <span className="text-xl font-display font-bold text-primary">
            ${item.price}
          </span>
          <button
            onClick={() => addItem(item)}
            className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
