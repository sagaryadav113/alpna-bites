import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroFood from "@/assets/hero-food.jpg";
import spicesBg from "@/assets/spices-bg.jpg";
import interior from "@/assets/restaurant-interior.jpg";

const images = [
  { src: heroFood, alt: "Indian thali spread", span: "md:col-span-2 md:row-span-2" },
  { src: spicesBg, alt: "Aromatic Indian spices", span: "" },
  { src: interior, alt: "Restaurant interior ambiance", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            A Visual <span className="text-gradient-gold italic">Feast</span>
          </h2>
          <div className="divider-spice mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
