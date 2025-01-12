import { Instagram } from 'lucide-react'; 
import WhatsApp from '../assets/svg/WhatsApp.svg'; 

export const useContact = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <img src={WhatsApp} alt="WhatsApp Icon" className="w-6 h-6" />, 
      url: 'https://wa.me/3185197896?text=👋%20¡Hola!%20Visité%20tu%20página%20web%20y%20me%20encantó%20lo%20que%20ofreces.%20🎉%20Me%20gustaría%20obtener%20más%20información%20sobre%20tus%20servicios.%20😊%20%0APor%20favor%2C%20cuando%20tengas%20un%20momento%2C%20contáctame.%20Gracias%20de%20antemano.%20🙏',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Contáctanos rápidamente por WhatsApp para resolver tus dudas o recibir información personalizada.'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/spa_cuidadoyarmonia24/',
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Síguenos en Instagram para estar al tanto de nuestras novedades y promociones exclusivas. 📸✨'
    }
  ];

  return {
    socialLinks,
  };
};
