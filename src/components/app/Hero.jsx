import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import SpaIMG from '../../assets/imgs/SpaIMG.webp';

export const Hero = () => {
  return (
    <motion.section  initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-36 pb-8 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50 ">
      <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-200 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl"
          />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold text-gray-800 mb-4 leading-tight tracking-wide">
              Belleza que inspira,
              <span className="block text-pink-400 text-6xl md:text-6xl font-extrabold mt-2">Bienestar que transforma</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              En Cuidado y Armonía, transformamos cada visita en una experiencia de bienestar total. 
              Déjanos ser tu destino para la renovación y el cuidado personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }} className="flex justify-center gap-8">
                <motion.a href='#Contacto' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors group">
                  <Calendar className="w-6 h-6 mr-2" />
                  Reservar cita
                  <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a href='#Servicios' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-100 transition-colors">
                  Servicios
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={SpaIMG} 
                  alt="Spa Treatment" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-pink-100 rounded-full blur-xl z-10"
              />
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-xl z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

  )
}
