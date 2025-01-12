import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { useContact } from '../../hooks/useContact';
import Logo from '../../assets/imgs/Logo.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = useContact();

  return (
    <footer className="bg-gradient-to-b from-pink-100 to-pink-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-800">Cuidado y Armonía</h1>
            <p className="text-gray-600 text-sm">
              Tu destino para el bienestar y la belleza. Descubre una experiencia única de relajación y cuidado personal.
            </p>
            <div className="flex space-x-6">
              <motion.a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} aria-label='Instagram API' className="p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition-all">
                {socialLinks[1].icon}
              </motion.a>
              <motion.a href={socialLinks[0].url} aria-label='WhatsApp API'
                target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
                {socialLinks[0].icon}
              </motion.a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">

            <div className="text-lg font-medium text-gray-800">Enlaces Rápidos</div>
            <ul className="space-y-2">
              <li>
                <a href="#Bienvenido" className="text-gray-600 hover:text-pink-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#Servicios" className="text-gray-600 hover:text-pink-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#SobreNosotros" className="text-gray-600 hover:text-pink-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#Contacto" className="text-gray-600 hover:text-pink-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
            <div className="text-lg font-medium text-gray-800">Información de Contacto</div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-6 h-6 text-pink-400 mt-1" />
                <span>Bello, Barrio Obrero - Cll 33 #52-44</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-600">
                <Clock className="w-6 h-6 text-pink-400 mt-1" />
                <span>
                  Lunes a Domingo<br />
                  8:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Cuidado y Armonía. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
