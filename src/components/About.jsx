import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="about" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About ABI GROUP
      </motion.h2>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We are pioneers in digital transformation, specializing in creating innovative web solutions and AI-powered systems. Our team combines technical expertise with creative vision to deliver exceptional results.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          From responsive websites to complex AI integrations, we forge the digital tools that drive your business forward into the future.
        </motion.p>
      </motion.div>

      <motion.img
        src="/abi-logo-icon.png"
        alt="ABI GROUP"
        className="section-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
        whileHover={{ opacity: 0.5, scale: 1.05 }}
      />
    </section>
  );
};

export default About;