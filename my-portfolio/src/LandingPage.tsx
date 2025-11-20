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
                <h3>Aspring Pilates Instructor</h3>
                <h1>Okamune's Flow</h1>
                <p>
                    Welcome to my personal Pilates blog! I am currently earning my teaching certificate to deepen my understanding of mindful movement. 
                    Learn more about my journey and enjoy the content!
                </p>
            </div>

            

            <div className="image-container">
                <motion.div
                    className="kiwi-wrapper"
                     animate={{
                        scale: [1, 1.08, 1],
                        opacity: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                >
                    <img 
                    src="./Reyna_Sonny_Angel_Full.png" 
                    alt="sonny-angel-image" 
                    className="sonny-angel" 
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}