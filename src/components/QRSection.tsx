import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Download } from "lucide-react";

const QRSection = () => {
  const menuUrl = window.location.href;

  return (
    <section id="qr" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
        >
          {/* QR Code */}
          <div className="shrink-0">
            <div className="bg-foreground p-4 rounded-xl glow-warm">
              <QRCodeSVG
                value={menuUrl}
                size={180}
                bgColor="hsl(40, 20%, 92%)"
                fgColor="hsl(30, 15%, 8%)"
                level="H"
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Share Your <span className="text-gradient-warm">Digital Menu</span>
            </h2>
            <p className="text-muted-foreground font-body mb-6 max-w-md">
              Print this QR code and place it on your tables. Customers scan with their phone camera — no app needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 text-sm text-primary font-body">
                <Smartphone className="w-4 h-4" />
                Works on any smartphone
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-primary font-body">
                <Download className="w-4 h-4" />
                No downloads required
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRSection;
