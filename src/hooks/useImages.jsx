import TratamientosFaciales from '../assets/imgs/TratamientosFaciales.webp';
import TratamientosCorporales from '../assets/imgs/TratamientosCorporales.webp';
import MasajesCorporales from '../assets/imgs/MasajesCorporales.webp';
import MasajesReduccion from '../assets/imgs/MasajesReduccion.webp';
import DiaDeSpa from '../assets/imgs/DiaDeSpa.webp';
import DepilacionCera from '../assets/imgs/DepilacionCera.webp';

export const useImages = () => {
  const images = [{
    url: TratamientosFaciales,
    alt: "Tratamientos Faciales"
  },
  {
    url: TratamientosCorporales,
    alt: "Tratamientos Corporales"
  },
  {
    url: MasajesCorporales,
    alt: "Masajes Corporales"
  },
  {
    url: MasajesReduccion,
    alt: "Masajes de Reducción"
  },
  {
    url: DiaDeSpa,
    alt: "Día de Spa"
  },
  {
    url: DepilacionCera,
    alt: "Depilación con Cera"
  }];

  return { images}

}
