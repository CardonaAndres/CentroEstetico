import { AboutSection } from "./components/app/AboutSection"
import { Carousel } from "./components/app/Carousel"
import { ContactSection } from "./components/app/ContactSection"
import { Footer } from "./components/app/Footer"
import { Header } from "./components/app/Header"
import { Hero } from "./components/app/Hero"
import { Services } from "./components/app/Services"
import { MetaTags } from "./components/common/MetaTags"

export const App = () => {
  
  return (
    <>
      <MetaTags />
      <div className="bg-white font-sans">
        <Header />
        <div id="Bienvenido">
         <Hero />
        </div>
        <div id="SobreNosotros">
          <AboutSection />
        </div>
        <div id="Servicios">
         <Services />
         <Carousel />
        </div>
        <div id="Contacto">
          <ContactSection />
        </div>
        <Footer />
        
      </div>
    </>
  )
}

