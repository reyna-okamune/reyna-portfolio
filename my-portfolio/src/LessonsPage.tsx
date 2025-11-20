import { motion } from 'framer-motion';
import './LessonsPage.css';

export default function LessonsPage() {

    return (
        <motion.div
            id="lessons"
            className='lessons-container'
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className='header'>
                <h1>Lesson Plans</h1>
                <p>Movements for Mat, Reformer, Cadillac, and Chair</p>
            </div>

            <div className='main-container'>
                <p className="coming-soon">(وᵔ▿ᵔ)و<br></br><br></br>
                coming soon</p>
            </div>
        </motion.div>
    );
}
