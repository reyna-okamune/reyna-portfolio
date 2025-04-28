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
        <h1>About Me</h1>

        {windowWidth < 390 
          ? <div className='logo-img'>
              <img src='./sonny-logo.png' alt='sonny-logo'/>
            </div>
          : <></>
        }
      </div>

      <div className='right-div'>
        <p>
          Hi, I'm <strong>Reyna Okamune</strong>, an aspiring front-end developer from Los Angeles, California!<br></br>
          <br></br>As a recent graduate with a passion for creative and accesible web deisgn, I'm excited to
          build engaging user experiences on the web!<br></br>
          <br></br>When I'm not coding, I enjoy creating content about my kitchen creations and sharing my fitness journey! 
          I also enjoy growing plumeria and orchid flowers!
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
