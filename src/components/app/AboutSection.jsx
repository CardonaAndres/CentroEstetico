import Logo from '../../assets/imgs/FullLogo.webp'
import { motion } from 'framer-motion';
import { Sparkles, Heart} from 'lucide-react';
import { Diferenciacion } from './Diferenciacion';

export const AboutSection = () => {
  return (
    <section className="py-16 overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Main About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src={Logo} alt="Nuestro Spa" className="w-full h-[500px] object-cover" loading='lazy'/>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
          <span className="text-pink-400 font-medium">Sobre Nosotros</span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Redefiniendo la experiencia del 
            <span className="text-pink-400 font-medium block">BIENESTAR Y LA BELLEZA</span>
          </h2>
          <p className="text-gray-600">
            En Cuidado y Armonía nacemos con una visión revolucionaria: transformar la manera en que las personas experimentan el cuidado personal. Como una empresa emergente en el mercado del bienestar, nos distinguimos por combinar técnicas innovadoras con un enfoque profundamente personalizado.
          </p>
          <p className="text-gray-600">
            Nuestro compromiso es brindar experiencias transformadoras que van más allá de los tratamientos tradicionales, incorporando las últimas tendencias y tecnologías en cuidado personal.
          </p>

          {/* Vision Cards */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-pink-50 p-4 rounded-xl"
            >
              <Sparkles className="w-8 h-8 text-pink-400 mb-2" />
              <h3 className="font-medium text-gray-800 mb-1">Innovación</h3>
              <p className="text-sm text-gray-600">Incorporamos las últimas tendencias en belleza y bienestar</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-pink-50 p-4 rounded-xl"
            >
              <Heart className="w-8 h-8 text-pink-400 mb-2" />
              <h3 className="font-medium text-gray-800 mb-1">Personalización</h3>
              <p className="text-sm text-gray-600">Cada tratamiento adaptado a tus necesidades únicas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Diferenciacion />

    </div>
  </section>
  )
}


