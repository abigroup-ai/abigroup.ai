import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Galaxy 
          starCount={500}
          nebulaColors={['#667eea', '#764ba2', '#f093fb', '#c0c0c0']}
          animationSpeed={0.5}
          interactiveStars={true}
        />
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;