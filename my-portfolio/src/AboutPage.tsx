import { motion } from 'framer-motion';
import {useState, useEffect} from 'react';
import './AboutPage.css';

const AboutSection = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
      useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      
      return () => window.removeEventListener('resize', handleResize);
      }, []);
  


  return (
    <motion.div
      id="about"
      initial={{opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true}}
      className='about-container'
    >
      <div className='left-div'>
        <h1>Profile</h1>

        {windowWidth < 390 
          ? <div className='logo-img'>
              <img src='./sonny-logo.png' alt='sonny-logo'/>
            </div>
          : <></>
        }
      </div>

      <div className='right-div'>
        <p>
          Hi, I'm <strong>Reyna</strong>!<br></br>
          <br></br>
          I am currently pursuing my Mat Pilates Instructor Certification, which I anticipate completing in December 2025, 
          followed by the Apparatus Certifcation in June 2026. I plan to sit for the National Pilates Certification Program exam 
          as part of my continued professional development.
          <br></br>
          
           <br></br>
           Before transitioning into Pilates, I worked in web development. 
           I built this website to maintain and refine my technical skills while documenting my growth as an instructor.
           <br></br>

          <br></br>Outside of training, I enjoy traveling and exploring new fitness studios in different countries and cities.
          I look forward to sharing future insights and experiences from my journey.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
