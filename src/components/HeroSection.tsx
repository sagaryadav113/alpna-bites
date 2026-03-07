import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious Indian thali with curries, rice and naan"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-1 bg-primary/15 border border-primary/30 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">4.9</span>
            </div>
            <span className="text-sm text-muted-foreground">Indian Restaurant • ₹1–200</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
          >
            <span className="text-foreground">Alpna</span>
            <br />
            <span className="text-gradient-gold italic">Cafe &</span>
            <br />
            <span className="text-foreground">Restaurant</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            Where homestyle North Indian flavors meet modern dining. Fresh, affordable, unforgettable.
          </motion.p>

          {/* Info Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Sector 126, Noida
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              Opens at 10:00 AM
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4"
          >
            <a
              href="#menu"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="border border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Visit Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
