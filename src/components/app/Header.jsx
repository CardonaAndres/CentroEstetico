import Logo  from '../../assets/imgs/Logo.png';
import { useState } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from '../header/NavLink';
import { MobileNavLink } from '../header/MobileNavLink';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm ">
      {/* Top info bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-pink-50">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            +57 318 519 7896
          </span>
          <span className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
             Bello, Barrio Obrero - Cll 33 #52-44
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src={Logo} alt="Cuidado y Armonía" className="h-14" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#Bienvenido">Bienvenido</NavLink>
            <NavLink href="#Servicios">Servicios</NavLink>
            <NavLink href="#nosotros">Nosotros</NavLink>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#Bienvenido">Bienvenido</MobileNavLink>
              <MobileNavLink href="#Servicios">Servicios</MobileNavLink>
              <MobileNavLink href="#nosotros">Nosotros</MobileNavLink>
              <MobileNavLink href="#contacto">Contacto</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};


