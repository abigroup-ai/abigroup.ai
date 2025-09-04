import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "The Future of Web & AI",
    "Digital Innovation",
    "Infinite Possibilities"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleExploreClick = () => {
    document.querySelector('#services')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero-title-container">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTitle}
              className="hero-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {titles[currentTitle]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Advance Beyond Imagination
        </motion.p>

        <motion.button
          className="cta-button"
          onClick={handleExploreClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="button-text">EXPLORE SERVICES</span>
        </motion.button>
      </motion.div>

      <motion.img
        src="/abi-logo-icon.png"
        alt="ABI GROUP"
        className="hero-logo"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.3, y: 0, x: '-50%' }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ opacity: 0.5 }}
      />

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </section>
  );
};

export default Hero;