import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "../components/common/PageHeader";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import ext1 from "../assets/exterior-1.avif";
import r1 from "../assets/room-1.avif";
import r2 from "../assets/room-2.avif";
import r3 from "../assets/room-3.avif";
import r4 from "../assets/room-4.avif";
import f1 from "../assets/food-1.avif";
import fac1 from "../assets/pg_logo.avif";
import p1 from "../assets/pg_img.avif";
import p3 from "../assets/pg_img3.avif";
import p4 from "../assets/pg_img4.avif";
import p5 from "../assets/pg_img5.avif";
import p6 from "../assets/pg_img6.avif";
import p7 from "../assets/pg_img7.avif";
import p8 from "../assets/pg_img8.avif";

export default function Gallery() {
  const images = [
    { src: r2, alt: "Spacious Double Sharing" },

    { src: ext1, alt: "Meridian Homestay Exterior" },
    { src: f1, alt: "Hygienic Home Cooked Meals" },
    { src: fac1, alt: "Common Facilities Area" },
    { src: p1, alt: "Cozy Room Interior" },
    { src: p3, alt: "Furnished PG Room" },
    { src: p4, alt: "Comfortable Twin Bed" },
    { src: p5, alt: "Secure Living Space" },
    { src: r3, alt: "Clean & Furnished Single Bed" },

    { src: p6, alt: "Clean Washroom Area" },
    { src: p7, alt: "Bright and Airy Room" },
    { src: p8, alt: "Relaxing PG Atmosphere" },
    { src: r4, alt: "Comfortable Stay Area" },
    { src: r1, alt: "AC Room Setup" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Photos & Gallery | Meridian Homestay</title>
        <meta
          name="description"
          content="View real photos of Meridian Homestay. See our furnished rooms, delicious food, and clean facilities located in Newtown."
        />
      </Helmet>

      <PageHeader
        title="Our Gallery"
        subtitle="Take a visual tour through our premium accommodations and amenities."
      />

      <section className="py-20 px-4 md:px-6 bg-white min-h-[50vh]">
        <div className="container mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="break-inside-avoid shadow-lg rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative overflow-hidden w-full bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-sm">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              alt="Expanded view"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
