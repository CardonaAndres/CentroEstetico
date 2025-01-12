import { useServices } from '../../hooks/useServices';
import { motion } from 'framer-motion';

export const Services = () => {
  
  const { services } = useServices();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 bg-gradient-to-br from-green-50 via-white to-green-50 pt-24"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl text-center font-medium text-gray-800 mb-12"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-800 mt-4">{service.name}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mr-2 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12l5 5L20 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
