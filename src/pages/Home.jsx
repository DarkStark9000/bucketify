import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Products from "./Products";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Home() {
  return (
    <div className="min-h-screen">
      {/* First Viewport: Navbar + Hero + Trust Badges */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section - fills remaining space */}
        <section className="relative overflow-hidden flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-subtle border border-accent/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">New Collection Available</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1.1] mb-6"
              >
                Discover Products
                <br />
                <span className="text-accent">You&apos;ll Love</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto"
              >
                Curated selection of premium products, delivered to your doorstep with care.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-base px-8 py-4"
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ShoppingBasketIcon sx={{ fontSize: 20 }} />
                Start Shopping
              </motion.button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Trust Badges */}
        <section className="border-y border-border bg-(--color-bg-surface)/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { icon: LocalShippingIcon, label: "Free Shipping", sub: "Orders over $50" },
                { icon: VerifiedIcon, label: "Quality Assured", sub: "100% Authentic" },
                { icon: SupportAgentIcon, label: "24/7 Support", sub: "Always here to help" },
                { icon: ShoppingBasketIcon, label: "Easy Returns", sub: "30-day policy" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center">
                    <item.icon sx={{ fontSize: 20 }} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-muted">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Products Section - appears on scroll */}
      <section id="products" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">Featured Products</h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Handpicked selection of our most popular items
            </p>
          </motion.div>

          <Products />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-text-muted">Made with care by Bucketify</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
