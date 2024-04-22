import React, {useState} from 'react';
import { IoMdPhonePortrait } from "react-icons/io";
import { HiMenuAlt4, HiX} from "react-icons/hi";
import { motion } from "framer-motion";
import './Navbar.scss';

function Navbar() {
    const links = ['Accueil', 'Services', 'Contact'];
    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            <div className="app__navbar-menu">
                <div className="app__navbar-logo">
                    <img src="#" alt="JC-PLOMBERIE-LOGO"/> {/* Mettez à jour le src avec votre chemin d'image */}
                </div>
                <ul className="app__navbar-links">
                    {links.map((link, index) => (
                        <li className="nav-item" key={`link-${index}`}>
                            <a href={`#${link}`}>{link}</a>
                        </li>
                    ))}
                </ul>
                <div className="app__navbar-contact">
                    <IoMdPhonePortrait size={24} className="icon"/>
                    <a href="tel:0660732036">06 60 73 20 36</a>
                </div>
                <div className="app__navbar-responsive">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />

                    {
                        toggle && (
                            <motion.div
                                whileInView={{x: [200, 0]}}
                                transition={{duration: 0.85, ease: 'easeOut'}}
                            >
                                <HiX onClick={() => setToggle(false)}/>
                                <ul>
                                    {links.map((link, index) => (
                                        <li className="nav-item" key={`link-${index}`}>
                                            <a href={`#${link}`}>{link}</a>
                                        </li>
                                    ))}
                                    <li className="app__navbar-responsive-contact">
                                        <IoMdPhonePortrait size={18} className="icon"/>
                                        <a href="tel:0660732036">06 60 73 20 36</a>
                                    </li>
                                </ul>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;