
import './App.css'
import { motion } from 'framer-motion';

export default function NavBar() {

    return (
        <motion.nav
            className='nav-container'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="nav-left">
                <a href="#landing" className="logo">
                    <img src="./sonny-logo.png" alt="logo"/>
                </a> 
            </div>

            <div className="nav-right">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

        </motion.nav>
    )
}