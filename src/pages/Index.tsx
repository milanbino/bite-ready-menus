import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import QRSection from "@/components/QRSection";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <MenuSection />
        <QRSection />
        <CartDrawer />

        {/* Footer */}
        <footer className="py-8 text-center border-t border-border">
          <p className="text-sm text-muted-foreground font-body">
            Powered by <span className="text-gradient-warm font-semibold">MenuQR</span> — Digital menus for modern restaurants
          </p>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
