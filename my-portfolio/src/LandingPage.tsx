import {motion} from 'framer-motion'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <motion.div
            id="landing"
            className='landing-container'
            initial={{y: -100, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="intro-container">
                <h3>Aspring Front End Developer</h3>
                <h1>Reyna Okamune's Portfolio</h1>
                <p>
                    Welcome to my personal portfolio! I tried to make it as chic and personal
                    while showcasing my coding skills! Learn more about me here!
                </p>
            </div>

            

            <div className="fruit-container">
                <motion.div
                    className="kiwi-wrapper"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <img 
                    src="./kiwi.png" 
                    alt="kiwi-image" 
                    className="kiwi" 
                    />
                </motion.div>
            </div>


        
      
    

        </motion.div>
    )
}