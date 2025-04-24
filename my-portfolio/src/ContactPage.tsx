import { motion } from 'framer-motion';
import './ContactPage.css';

export default function ContactPage() {
    const isThankYou = window.location.hash === "#thank-you";

    return (
        <motion.div
            id="contact"
            className='contact-container'
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className='left'>
                <h1>Contact Me</h1>
                <p>Hope to connect with you soon!</p>
            </div>

            <div className='right'>
                {isThankYou ? (
                    <p>Thank you for your message! (˶˃ ᵕ ˂˶)</p>
                ) : (
                    <form
                        action="https://formsubmit.co/reyna.okamune@gmail.com"
                        method="POST"
                        className="contact-form"
                    >
                        {/* Redirects to thank-you message on same page */}
                        <input type="hidden" name="_next" value="https://yourdomain.com#thank-you" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="message">
                            <label htmlFor="message"></label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type your message here!"
                                required
                                rows={5}
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </motion.div>
    );
}
