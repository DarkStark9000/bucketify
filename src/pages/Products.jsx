import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ProductCard from "../components/ProductCard";
import productsData from "../../products.json";

function Products() {
  const [shopData, setShopData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load products from local JSON catalog
    // Will port to Postgres later
    try {
      const products = productsData?.products;
      if (!products || !Array.isArray(products)) {
        throw new Error("Invalid products data");
      }
      setShopData(products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="card p-4 animate-pulse">
            <div className="aspect-square rounded-lg bg-[var(--color-bg-secondary)] mb-4" />
            <div className="h-4 bg-[var(--color-bg-secondary)] rounded w-3/4 mb-2" />
            <div className="h-4 bg-[var(--color-bg-secondary)] rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-error)]">Failed to load products: {error}</p>
      </div>
    );
  }

  if (shopData.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-text-muted)]">No products available</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
    >
      {shopData.map((item, index) => (
        <ProductCard key={item.id} item={item} index={index} />
      ))}
    </motion.div>
  );
}

export default Products;
