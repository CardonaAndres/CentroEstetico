import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useImages } from "../../hooks/useImages";

export const Carousel = () => {
    const { images } = useImages();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <section className="relative w-full max-w-5xl mx-auto py-10">
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence initial={false}>
            <motion.img
              key={images[currentIndex].url}
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-72 md:h-96 object-cover"
            />
          </AnimatePresence>
  
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white/90 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white/90 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
  
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-pink-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>
    );
}
