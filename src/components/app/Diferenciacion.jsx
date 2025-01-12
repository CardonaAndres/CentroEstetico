import { motion } from 'framer-motion';
import { Heart, Star, Trophy } from 'lucide-react';

export const Diferenciacion = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mt-16 pt-16 border-t border-gray-100">
        <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-light text-gray-800">
            Lo que nos hace <span className="text-pink-400">diferentes</span>
        </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
            <Star className="w-10 h-10 text-pink-400 mb-4" />
            <h4 className="text-xl font-medium text-gray-800 mb-2">Experiencia Única</h4>
            <p className="text-gray-600">
            Creamos un ambiente donde cada visita se convierte en un viaje de renovación personal.
            </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
            <Trophy className="w-10 h-10 text-pink-400 mb-4" />
            <h4 className="text-xl font-medium text-gray-800 mb-2">Calidad Premium</h4>
            <p className="text-gray-600">
            Utilizamos productos y técnicas de vanguardia para garantizar los mejores resultados.
            </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
            <Heart className="w-10 h-10 text-pink-400 mb-4" />
            <h4 className="text-xl font-medium text-gray-800 mb-2">Atención Personalizada</h4>
            <p className="text-gray-600">
            Entendemos que cada cliente es único y adaptamos nuestros servicios a sus necesidades.
            </p>
        </motion.div>
        </div>
    </motion.div>
  )
}
