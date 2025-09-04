import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDdr3DmEAZBoYp3xW3zXHze627zwIocCgeITz3rfCrjfgezyAD7ItQS6ZZQSwtJW-s/exec';
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toLocaleString()
        })
      });

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div
        className="contact-form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-textarea"
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="form-submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </motion.button>
          
          {formStatus && (
            <motion.div
              className={`form-status ${formStatus}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formStatus === 'success' 
                ? '✓ Message sent successfully! We\'ll get back to you soon.' 
                : '✗ Something went wrong. Please try again.'}
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.img
        src="/abi-logo-icon.png"
        alt="ABI GROUP"
        className="section-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{ opacity: 0.5, scale: 1.05 }}
      />
    </section>
  );
};

export default Contact;