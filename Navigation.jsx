import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

return (
  <motion.nav
    className="navbar"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1, x: '-50%' }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <img 
      src="/abi-group-logo.png" 
      alt="ABI GROUP" 
      className="navbar-logo"
      onClick={() => handleNavClick('home')}
    />
    <div className="nav-links-container">
      {navItems.map((item, index) => (
        <motion.a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item.id);
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.2 + index * 0.1,
            duration: 0.5 
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </motion.a>
      ))}
    </div>
  </motion.nav>
);
};

export default Navigation;