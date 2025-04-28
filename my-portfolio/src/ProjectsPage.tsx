import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';
import './ProjectsPage.css'

export default function Projects() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const box = {
        width: windowWidth < 390 ? '35vw' : '20vw',
        height: windowWidth < 390 ? '35vw' : '20vw',
        borderRadius: 5,
    }

    return (
        <motion.div
        id='projects'
        className='projects-container'
        initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true}}
        >
            <div className='header'>
                <h1>Recent Work</h1>
                <p>* click the fruit to visit my project *</p>
            </div>


            <div className='boxes-container'>
                <div className='box'>
                    <a href="https://animal-trivia-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={box}
                        className="image-box"
                        >
                        <img src="/pineapple.png" alt="Animal Trivia" className="box-image" />
                        </motion.div>
                    </a>
                     <p className='title'>Animal Trivia</p>
                     <p className='description'>React, Javascript, CSS, HTML</p>
                </div>

                <div className='box'>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={box}
                        className="image-box"
                        >
                        <img src="/kiwi.png" alt="Animal Trivia" className="box-image" />
                        </motion.div>
                    </a>
                     <p className='title'>Project Name</p>
                     <p className='description'>Techstack</p>
                </div>

                <div className='box'>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={box}
                        className='image-box'
                        
                    >
                        <img src='./strawberry.png' alt='project1' className="box-image"/>
                    </motion.div>
                     <p className='title'>Project Name</p>
                     <p className='description'>TechStack</p>
                </div>
            </div>

        </motion.div>
    )
}