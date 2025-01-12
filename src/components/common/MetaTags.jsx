import { Helmet } from "react-helmet-async";

export const MetaTags = () => (
  <Helmet>
    <title>Cuidado y Armonía Spa | Relajación y Bienestar en Bello, Colombia</title>
    <meta
      name="description"
      content="Descubre Cuidado y Armonía, el mejor spa en Bello, Colombia. Ofrecemos masajes relajantes, reductores, tratamientos faciales, y más. ¡Reserva tu cita hoy!"
    />
    <meta
      name="keywords"
      content="spa en Bello, masajes relajantes en Bello, tratamientos faciales en Bello, depilación con cera Bello, día de spa en Bello, bienestar corporal Bello, masajes reductores, spa en Colombia, spa en Bello Colombia, masajes terapéuticos, rejuvenecimiento facial, estética avanzada, tratamientos corporales en Bello, spa de lujo"
    />
    <meta property="og:title" content="Cuidado y Armonía Spa | Relajación y Bienestar en Bello, Colombia" />
    <meta
      property="og:description"
      content="Relájate en nuestro spa en Bello, Colombia. Disfruta de masajes, tratamientos faciales, corporales, y días de spa inolvidables."
    />
    <meta property="og:image" content="https://centro-estetico-xi.vercel.app/assets/imgs/image.png" />
    <meta property="og:url" content="https://centro-estetico-xi.vercel.app/" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Cuidado y Armonía Spa | Relajación y Bienestar en Bello, Colombia" />
    <meta
      name="twitter:description"
      content="Visítanos en Bello, Colombia para un día de relajación total. Masajes, tratamientos faciales, reductores y más."
    />
    <meta name="twitter:image" content="https://centro-estetico-xi.vercel.app/assets/imgs/image.png" />

    <meta name="author" content="Cuidado y Armonía Spa" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://centro-estetico-xi.vercel.app/" />

    {/* Datos estructurados para mejorar la visibilidad en buscadores */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Cuidado y Armonía Spa",
        description:
          "Relájate y renueva tu cuerpo con masajes relajantes, reductores y tratamientos faciales en Bello, Colombia.",
        url: "https://centro-estetico-xi.vercel.app/",
        logo: "https://centro-estetico-xi.vercel.app/assets/imgs/image.png", // Cambiar según tu logo
        image: "https://centro-estetico-xi.vercel.app/assets/imgs/image.png", // Cambiar según tu imagen destacada
        telephone: "+57 318 519 7896",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cll 33 #52-44",
          addressLocality: "Barrio Obrero",
          addressRegion: "Bello",
          postalCode: "12345",
          addressCountry: "CO",
        },
        sameAs: [
          "https://facebook.com/TuPaginaDeFacebook", // Asegúrate de tener tus redes sociales
          "https://instagram.com/TuPaginaDeInstagram",
        ],
        openingHours: "Mo-Su 09:00-19:00", // Horario de atención
      })}
    </script>
  </Helmet>
);
