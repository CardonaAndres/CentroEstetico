import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { useContact } from '../../hooks/useContact';

export const ContactSection = () => {
    const { socialLinks } = useContact();

    return (
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }} 
                    className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                    Conecta con <span className="text-pink-400">Nosotros</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Estamos aquí para atenderte y resolver todas tus dudas. Contáctanos a través de nuestras redes sociales o visítanos en nuestro local.
                </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }} className="space-y-8">
                    
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-light text-gray-800 mb-6">Redes Sociales</h3>
                    <div className="flex flex-col space-y-4">
                        {socialLinks.map((social, index) => (
                        <motion.a key={index} href={social.url} aria-label='Social Media URL'
                            target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }} className={`flex items-center p-4 ${social.color} text-white rounded-xl transition-colors`}>
                            {social.icon}
                            <span className="ml-3">{social.name}</span>
                        </motion.a>
                        ))}
                    </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-light text-gray-800 mb-6">
                            <MapPin className="inline-block w-6 h-6 mr-2 text-pink-400" />
                            Ubicación
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Bello, Barrio Obrero - Cll 33 #52-44
                        </p>
                        <div className="flex items-center text-gray-800 mb-4">
                            <Clock className="inline-block w-6 h-6 mr-2 text-pink-400" />
                            <span className="text-xl font-light">Horario</span>
                        </div>   
                        <div className="space-y-2 text-gray-600">
                            <p>Lunes - Viernes: <span className="font-medium">8 AM - 8 PM</span></p>
                            <p>Fines de semana: <span className="font-medium">9 AM - 6 PM</span></p>
                        </div>
                    </div>
                </motion.div>
                {/* Map */}
                <motion.div initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-4 h-[400px] md:h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5598438846732!2d-75.5619831259729!3d6.321397825480947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f0e33c6d65d%3A0x2d7a4dba2dc1a6b6!2sCl.%2033%20%2352-44%2C%20Obrero%2C%20Bello%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1736718420595!5m2!1ses!2sco"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                        title='Spa Address'
                    />
                </motion.div>
                </div>
            </div>
        
        </section >
    )
}
