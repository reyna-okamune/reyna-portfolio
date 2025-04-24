import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true}}
    >
      <h1>About Me</h1>
    </motion.section>
  );
};

export default AboutSection;
