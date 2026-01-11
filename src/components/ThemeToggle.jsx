import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const THEMES = {
  light: { icon: LightModeIcon, label: "Light" },
  dark: { icon: DarkModeIcon, label: "Dark" },
  system: { icon: SettingsBrightnessIcon, label: "System" },
};

// Apply theme to document - defined outside component as it doesn't need React state
const applyTheme = (newTheme) => {
  const html = document.documentElement;
  html.classList.remove("light", "dark");

  if (newTheme === "light") {
    html.classList.add("light");
  } else if (newTheme === "dark") {
    html.classList.add("dark");
  }
  // "system" = no class, uses media query
};

// Get initial theme from localStorage (runs once on module load)
const getInitialTheme = () => {
  if (typeof window === "undefined") return "system";
  const saved = localStorage.getItem("theme");
  return saved || "system";
};

function ThemeToggle() {
  // Lazy initialization - only runs once on mount
  const [theme, setTheme] = useState(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    return initial;
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const CurrentIcon = THEMES[theme].icon;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-16 right-0 mb-2 p-2 bg-(--color-bg-surface) border border-border rounded-xl shadow-lg min-w-[140px]"
          >
            {Object.entries(THEMES).map(([key, { icon: Icon, label }]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    theme === key
                      ? "bg-accent-subtle text-accent"
                      : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                  }
                `}
              >
                <Icon sx={{ fontSize: 18 }} />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center justify-center w-12 h-12 
          bg-(--color-bg-surface) 
          border border-border 
          rounded-full shadow-lg
          text-text-secondary
          hover:text-accent
          hover:border-accent
          transition-colors duration-200
        `}
        title={`Theme: ${THEMES[theme].label}`}
      >
        <CurrentIcon sx={{ fontSize: 22 }} />
      </motion.button>
    </div>
  );
}

export default ThemeToggle;
