import { Helmet } from "react-helmet-async"

export const MetaTags = () => (
    <Helmet>
       <title>Cuidado y Armonía Spa | Relajación y Bienestar</title>
       <meta 
            name="description" 
            content="Descubre Cuidado y Armonía, el mejor spa en Barrio Bello y Barrio Obrero. Tratamientos faciales, masajes relajantes, reductores y más. ¡Reserva tu cita hoy!" 
        />
        <meta 
            name="keywords" 
            content="spa Barrio Bello, masajes relajantes, tratamientos faciales, depilación cera, día de spa, bienestar corporal, tratamientos corporales, masajes de relajación, masajes de reducción" 
        />
          <meta property="og:title" content="Cuidado y Armonía Spa | Relajación y Bienestar" />
        <meta 
            property="og:description" 
            content="Relájate en nuestro spa en Barrio Bello y Barrio Obrero. Disfruta de masajes, tratamientos corporales, y días de spa inolvidables." 
        />
        <meta property="og:image" content="URL_DE_TU_IMAGEN_DESTACADA" />
        <meta property="og:url" content="TU_URL_DEL_SITIO_WEB" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cuidado y Armonía Spa | Relajación y Bienestar" />
        <meta 
            name="twitter:description" 
            content="Visítanos en Barrio Bello y Barrio Obrero para un día de relajación total. Masajes, tratamientos faciales y más." 
        />
        <meta name="twitter:image" content="URL_DE_TU_IMAGEN_DESTACADA" />

        <meta name="author" content="Cuidado y Armonía Spa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://tusitioweb.com" />
        <link rel="icon" href="../../assets/imgs/Logo.ico" type="image/x-icon" />

        {/* Datos estructurados para mejorar la visibilidad en buscadores */}
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Cuidado y Armonía Spa",
                description:
                "Relájate y renueva tu cuerpo con masajes relajantes, reductores y tratamientos faciales en Barrio Bello y Barrio Obrero.",
                url: "https://tusitioweb.com",
                logo: "https://tusitioweb.com/assets/imgs/Logo.png", 
                image: "https://tusitioweb.com/assets/imgs/spa-destacada.jpg", 
                telephone: "+57 318 519 7896", 
                address: {
                "@type": "PostalAddress",
                streetAddress: "Cll 33 #52-44",
                addressLocality: "Barrio Obrero",
                addressRegion: "Ciudad Bello",
                postalCode: "12345",
                addressCountry: "CO",
                },
                sameAs: [
                "https://facebook.com/TuPaginaDeFacebook", 
                "https://instagram.com/TuPaginaDeInstagram",
                ],
            })}
        </script>


    </Helmet>
)
 