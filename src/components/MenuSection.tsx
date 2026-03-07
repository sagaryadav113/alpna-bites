import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Curries", "Biryani", "Rolls", "Snacks", "Beverages"];

const menuItems = [
  { name: "Paneer Butter Masala", price: "₹120", category: "Curries", desc: "Rich tomato-cashew gravy with soft paneer cubes", veg: true },
  { name: "Dal Makhani", price: "₹100", category: "Curries", desc: "Slow-cooked black lentils in creamy butter sauce", veg: true },
  { name: "Chicken Biryani", price: "₹150", category: "Biryani", desc: "Fragrant basmati rice layered with spiced chicken", veg: false },
  { name: "Veg Biryani", price: "₹110", category: "Biryani", desc: "Aromatic rice with seasonal vegetables and saffron", veg: true },
  { name: "Chicken Roll", price: "₹80", category: "Rolls", desc: "Grilled chicken wrapped in flaky paratha", veg: false },
  { name: "Paneer Tikka Roll", price: "₹70", category: "Rolls", desc: "Smoky paneer tikka in a warm rumali wrap", veg: true },
  { name: "Samosa", price: "₹20", category: "Snacks", desc: "Crispy pastry filled with spiced potato & peas", veg: true },
  { name: "Chowmein", price: "₹60", category: "Snacks", desc: "Indo-Chinese stir-fried noodles with vegetables", veg: true },
  { name: "Masala Chai", price: "₹15", category: "Beverages", desc: "Spiced tea brewed with cardamom & ginger", veg: true },
  { name: "Mango Lassi", price: "₹40", category: "Beverages", desc: "Creamy yogurt blended with fresh mango pulp", veg: true },
  { name: "Kadai Chicken", price: "₹140", category: "Curries", desc: "Wok-tossed chicken with bell peppers & spices", veg: false },
  { name: "Aloo Paratha", price: "₹40", category: "Snacks", desc: "Stuffed flatbread served with butter & curd", veg: true },
];

const MenuSection = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Our Menu</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Crafted with <span className="text-gradient-gold italic">Love</span>
          </h2>
          <div className="divider-spice mx-auto mt-6" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group flex items-start justify-between p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-2.5 h-2.5 rounded-sm border ${
                      item.veg ? "border-green-500" : "border-red-500"
                    } flex items-center justify-center`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.veg ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <span className="font-display text-lg font-bold text-primary ml-4 whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
