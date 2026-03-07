import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImage from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={interiorImage}
                alt="Alpna restaurant warm interior with brass lights"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-xl shadow-2xl max-w-[200px]">
              <p className="font-display text-3xl font-bold text-gradient-gold">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years serving the community</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 text-foreground">
              A Taste of
            </h2>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-gold italic">
              Home
            </h2>
            <div className="divider-spice mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nestled in the heart of Raipur Khadar, Sector 126, Noida — Alpna Cafe & Restaurant
              has been a beloved neighborhood gem. We serve authentic North Indian cuisine with the
              warmth of homestyle cooking, making every meal feel like a gathering at home.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From students at Amity University to professionals along the Noida Expressway,
              we've become the go-to spot for those who crave bold flavors without breaking the bank.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Dishes" },
                { value: "4.9★", label: "Rating" },
                { value: "₹200", label: "Avg. Meal" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
