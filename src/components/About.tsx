import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';
import instaIcon from '../assets/images/insta.png';
import linkedinIcon from '../assets/images/linkedin.png';
import twitterIcon from '../assets/images/twitter.png';
import redditIcon from '../assets/images/reddit.png';
import mailIcon from '../assets/images/mail.png';
import { useState } from 'react';

const About = () => {
    const [showCopied, setShowCopied] = useState(false);

    const socialLinks = [
        { href: 'https://instagram.com/lucas_.ho', icon: instaIcon, label: 'Instagram' },
        { href: 'https://www.linkedin.com/in/lucas-ho-019497360/', icon: linkedinIcon, label: 'LinkedIn' },
        { href: 'https://x.com/lucas_h_0', icon: twitterIcon, label: 'Twitter' },
        { href: 'https://www.reddit.com/user/OkBarracuda4416/', icon: redditIcon, label: 'Reddit' },
        { href: 'lucas.jediho@gmail.com', icon: mailIcon, label: 'Email', isEmail: true },
    ];

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('lucas.jediho@gmail.com');
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

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
                        className="max-w-sm mx-auto object-contain"
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
                    className="flex justify-center gap-6 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    {socialLinks.map((link, index) => {
                        return (
                            <a
                                key={index}
                                href={link.isEmail ? '#' : link.href}
                                target={link.isEmail ? undefined : "_blank"}
                                rel={link.isEmail ? undefined : "noopener noreferrer"}
                                className="hover:opacity-70 transition-opacity"
                                aria-label={link.label}
                                onClick={link.isEmail ? handleEmailClick : undefined}
                            >
                                <img src={link.icon} alt={link.label} className="w-16 h-16 object-contain" />
                            </a>
                        );
                    })}
                    {showCopied && (
                        <motion.div
                            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-4 py-2 rounded font-scribble text-sm whitespace-nowrap"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            Email copied to clipboard!
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
