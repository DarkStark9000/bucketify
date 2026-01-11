import { useState } from "react";
import { motion } from "motion/react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="hidden md:flex flex-1 max-w-md lg:max-w-xl mx-6 lg:mx-12">
      <motion.div
        className="relative w-full"
        animate={{ scale: isFocused ? 1.01 : 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Input container */}
        <div
          className={`
            flex items-center gap-3 w-full h-12 px-4
            bg-(--color-bg-surface) 
            border rounded-xl
            transition-all duration-200
            ${isFocused 
              ? "border-accent shadow-[0_0_0_3px_var(--color-accent-subtle)]" 
              : "border-border shadow-sm hover:border-border-strong"
            }
          `}
        >
          {/* Search icon - fixed position, doesn't overlap */}
          <SearchIcon 
            sx={{ fontSize: 20 }} 
            className={`shrink-0 transition-colors duration-200 ${
              isFocused ? "text-accent" : "text-text-muted"
            }`}
          />

          {/* Input field */}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search products..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="
              flex-1 w-full h-full
              bg-transparent 
              text-[15px] text-text-primary
              placeholder:text-text-muted
              outline-none border-none
              font-body
            "
          />

          {/* Keyboard shortcut hint - only show when not focused and empty */}
          {!isFocused && !searchValue && (
            <kbd className="hidden lg:inline-flex items-center px-2 py-1 text-[11px] font-medium text-text-muted bg-bg-secondary border border-border rounded-md">
              /
            </kbd>
          )}

          {/* Clear button - show when there's text */}
          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="shrink-0 p-1 text-text-muted hover:text-text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default SearchBar;
