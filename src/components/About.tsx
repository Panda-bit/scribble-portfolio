import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import profileImage from '../assets/images/about.png';

const About = () => {
    const socialLinks = [
        { href: 'https://instagram.com/lucas_.ho', icon: Instagram, label: 'Instagram' },
        { href: 'https://www.linkedin.com/in/lucas-ho-019497360/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://x.com/lucas_h_0', icon: Twitter, label: 'Twitter' },
        { href: 'mailto:lucas.jediho@gmail.com', icon: Mail, label: 'Email' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
            <div className="text-center w-[90%] md:w-[60%] max-w-3xl">
                <motion.h2
                    className="font-scribble text-5xl md:text-6xl text-gray-500 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <img
                        src={profileImage}
                        alt="Lucas Ho"
                        className="w-48 h-48 mx-auto rounded-full object-cover"
                    />
                </motion.div>

                <motion.p
                    className="font-scribble text-2xl md:text-3xl text-gray-400 leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    My name is Lucas Ho, I come up with a lot of ideas and occasionally make them real.
                </motion.p>

                <motion.div
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label={link.label}
                            >
                                <Icon size={32} strokeWidth={1.5} />
                            </a>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
