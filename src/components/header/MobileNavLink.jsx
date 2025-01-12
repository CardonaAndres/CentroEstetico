import { motion } from "framer-motion";

export const MobileNavLink = ({ href, children }) => (
    <motion.a
      href={href}
      className="text-gray-700 hover:text-pink-500 transition-colors block px-4 py-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
  