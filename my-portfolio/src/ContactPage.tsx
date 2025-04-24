import {motion} from 'framer-motion'
import { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // clear after submitting
        setName('');
        setEmail('');
        setMessage('');
        setResponse(true);
    };

    return (
        <motion.div
            id="contact"
            className='contact-container'
            initial={{y: -100, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className='left'>
                <h1>Contact Me</h1>
                <p>Hope to connect with you soon!</p>
            </div>

            <div className='right'>
                {response
                    ? 
                        <p>Thank you for your message! (˶˃ ᵕ ˂˶)</p>
                    :
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <div className="message">
                            <label htmlFor="message"></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message here!"
                                    required
                                    rows={5} // optional, controls height
                                />
                            </div>


                            <button type="submit" className="submit-btn">
                                Sumbit
                            </button>
                        </form>
                }
            </div>
        </motion.div>

    )
}