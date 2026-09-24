import { useEffect, useState } from "react";
import { landingImageUrls } from "../../utilities/links";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import Icon from "../../components/Icon";
import { Link } from "react-router";

export default function Hero() {
  const [image, setImage] = useState<1 | 2 | 3>(1);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setImage((prevImage) =>
        prevImage === 3 ? 1 : ((prevImage + 1) as 1 | 2 | 3),
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const landingImage = landingImageUrls.find((img) => img.id === image)?.url;

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hero min-h-screen py-20 relative overflow-hidden px-4 md:px-10 text-center md:text-start flex flex-col items-center justify-center md:flex-row md:justify-between"
    >
      {/* Background Image Slider */}

      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ backgroundImage: `url(${landingImage})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Dots */}
      <div className="dots absolute bottom-4 w-full left-0 text-center space-x-2 z-20">
        {landingImageUrls.map((btn) => (
          <button
            key={btn.id}
            className={`btn btn-circle w-3 h-3 min-h-0 p-0 transition-all ${btn.id === image ? "btn-primary" : "btn-white/30 hover:btn-white/60"}`}
            onClick={() => setImage(btn.id as typeof image)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-neutral-content">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:leading-tight">
          Welcome to the Image Gallery
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover, share, and explore stunning images from around the world.
        </p>
        <Link to="/login" className="btn btn-primary btn-lg">
          Get Started <Icon icon={FaArrowRight} />
        </Link>
      </div>

      <div className="hero-image hidden md:inline-block md:mt-0 md:ml-8 relative z-10">
        <motion.img
          src={landingImage}
          key={image}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          alt="Beautiful Landscape"
          className="w-full max-w-md h-auto rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
