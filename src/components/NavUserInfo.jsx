import { motion } from "motion/react";
import PersonIcon from "@mui/icons-material/Person";

function NavUserInfo() {
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-bg-secondary"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bg-secondary border border-border">
        <PersonIcon sx={{ fontSize: 18 }} className="text-text-muted" />
      </div>
      <span className="hidden sm:block text-sm font-medium text-text-primary">
        Guest
      </span>
    </motion.div>
  );
}

export default NavUserInfo;
