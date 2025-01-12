import { motion } from "framer-motion";

export const NavLink = ({ href, children }) => (
    <motion.a
      href={href}
      className="text-gray-700 hover:text-pink-500 transition-colors"
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.a>
);