import TratamientosFaciales from '../assets/imgs/TratamientosFaciales.webp';
import TratamientosCorporales from '../assets/imgs/TratamientosCorporales.webp';
import MasajesCorporales from '../assets/imgs/MasajesCorporales.webp';
import MasajesReduccion from '../assets/imgs/MasajesReduccion.webp';
import DiaDeSpa from '../assets/imgs/DiaDeSpa.webp';
import DepilacionCera from '../assets/imgs/DepilacionCera.webp';

export const useServices = () => {

  const services = [
    {
      name: "Tratamientos Faciales",
      price: "$200,000 COP",
      description: "Tratamiento facial personalizado para rejuvenecer tu piel, con limpieza profunda y mascarillas hidratantes.",
      details: [
        "Duración: 75 minutos",
        "Técnicas: Hidratante, rejuvenecedora y relajante",
        "Incluye mascarilla antioxidante y serum regenerador"
      ],
      img: TratamientosFaciales
    },
    {
      name: "Tratamientos Corporales",
      description: "Tratamiento corporal completo que promueve la circulación, reduce la celulitis y tonifica tu cuerpo.",
      details: [
        "Duración: 90 minutos",
        "Técnicas: Descontracturante y de drenaje linfático",
        "Incluye aceites esenciales para relajación"
      ],
      img: TratamientosCorporales
    },
    {
      name: "Masajes de relajación",
      description: "Masaje terapéutico para aliviar tensiones musculares y reducir el estrés, con técnicas suaves y aceites aromáticos.",
      details: [
        "Duración: 60 minutos",
        "Técnicas: Suave y relajante",
        "Incluye aceites esenciales de lavanda y menta"
      ],
      img: MasajesCorporales
    },
    {
      name: "Masajes de reducción",
      description: "Masaje con enfoque en la reducción de grasa localizada y tonificación muscular, perfecto para zonas problemáticas.",
      details: [
        "Duración: 75 minutos",
        "Técnicas: Reductora y reafirmante",
        "Incluye cremas y geles reductores"
      ],
      img: MasajesReduccion
    },
    {
      name: "Día de Spa",
      description: "Un día completo de relajación que incluye tratamientos faciales, corporales, masajes, acceso a sauna y jacuzzi.",
      details: [
        "Duración: 2 horas",
        "Técnicas: Relajante, rejuvenecedora y de bienestar integral",
        "Incluye lunch saludable y acceso a zonas de relajación"
      ],
      img: DiaDeSpa
    },
    {
      name: "Depilación con cera",
      description: "Depilación efectiva y rápida con cera para obtener una piel suave y libre de vello por más tiempo.",
      details: [
        "Duración: 30 minutos",
        "Técnicas: Depilación con cera caliente",
        "Incluye hidratación post-depilación"
      ],
      img: DepilacionCera
    }
  ];

  return {
    services
  }
}
