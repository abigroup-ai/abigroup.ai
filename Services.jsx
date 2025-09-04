import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies, optimized for performance and user experience.",
      color: "#ffffff"
    },
    {
      title: "Web Applications", 
      description: "Powerful, scalable web apps that transform your business processes and enhance productivity.",
      color: "#ffffff"
    },
    {
      title: "AI Services",
      description: "Intelligent solutions powered by machine learning and artificial intelligence to automate and innovate.",
      color: "#ffffff"
    },
    {
      title: "System Architecture",
      description: "Robust, secure system design and implementation tailored to your specific business requirements.",
      color: "#ffffff"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.h3
              className="service-title"
              style={{
                color: hoveredCard === index ? service.color : '#ffffff'
              }}
            >
              {service.title}
            </motion.h3>

            <p className="service-description">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.img
        src="/abi-logo-icon.png"
        alt="ABI GROUP"
        className="section-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
        whileHover={{ opacity: 0.5, scale: 1.05 }}
      />
    </section>
  );
};

export default Services;