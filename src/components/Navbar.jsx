import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import HomeLogo from "./HomeLogo";
import NavCartinfo from "./NavCartinfo";
import NavUserInfo from "./NavUserInfo";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 glass-surface"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <HomeLogo />
          </NavLink>

          {/* Search - centered */}
          <SearchBar />

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <NavUserInfo />
            <NavLink to="/cart">
              <NavCartinfo />
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Bottom border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
    </motion.header>
  );
}

export default Navbar;
