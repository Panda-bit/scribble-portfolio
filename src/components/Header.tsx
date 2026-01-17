import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import portfolioImage from '../assets/images/portfolio.png';
import aboutImage from '../assets/images/about.png';
import titleImage from '../assets/images/house.png';

const Header = () => {
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const location = useLocation();
    const showHomeLogo = location.pathname !== '/';

    useEffect(() => {
        setIsPortfolioHovered(false);
        setIsAboutHovered(false);
        setIsHomeHovered(false);
    }, [location.pathname]);

    return (
        <>
            {showHomeLogo && (
                <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
                    <Link
                        to="/"
                        className="relative group inline-block w-10 md:w-14"
                        onMouseEnter={() => setIsHomeHovered(true)}
                        onMouseLeave={() => setIsHomeHovered(false)}
                    >
                        <motion.div
                            className="absolute top-[35%] left-0 h-[50%] w-full -translate-y-1/2"
                            style={{
                                zIndex: 10,
                                background: 'linear-gradient(90deg, rgba(255, 235, 59, 0.6) 0%, rgba(255, 235, 59, 0.5) 50%, rgba(255, 235, 59, 0.6) 100%)',
                                transform: 'skewX(-3deg)',
                                borderRadius: '30% 15% 25% 20%',
                                mixBlendMode: 'multiply'
                            }}
                            initial={{ clipPath: 'polygon(0 15%, 0 0, 0 100%, 0 85%)' }}
                            animate={{
                                clipPath: isHomeHovered
                                    ? 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)'
                                    : 'polygon(0 15%, 0 0, 0 100%, 0 85%)'
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                                delay: isHomeHovered ? 0 : 0.1
                            }}
                        />
                        <img src={titleImage} alt="Home" className="w-full object-contain relative z-0" />
                    </Link>
                </div>
            )}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 z-50">
                <nav className="flex gap-4 md:gap-8 items-center">
                <Link
                    to="/portfolio"
                    className="relative group inline-block w-24 md:w-32"
                    onMouseEnter={() => setIsPortfolioHovered(true)}
                    onMouseLeave={() => setIsPortfolioHovered(false)}
                >
                    <motion.div
                        className="absolute top-[35%] left-0 h-[50%] w-full -translate-y-1/2"
                        style={{
                            zIndex: 10,
                            background: 'linear-gradient(90deg, rgba(255, 235, 59, 0.6) 0%, rgba(255, 235, 59, 0.5) 50%, rgba(255, 235, 59, 0.6) 100%)',
                            transform: 'skewX(-3deg)',
                            borderRadius: '30% 15% 25% 20%',
                            mixBlendMode: 'multiply'
                        }}
                        initial={{ clipPath: 'polygon(0 15%, 0 0, 0 100%, 0 85%)' }}
                        animate={{
                            clipPath: isPortfolioHovered
                                ? 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)'
                                : 'polygon(0 15%, 0 0, 0 100%, 0 85%)'
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                            delay: isPortfolioHovered ? 0 : 0.1
                        }}
                    />
                    <img src={portfolioImage} alt="Portfolio" className="w-full object-contain relative z-0" />
                </Link>
                <Link
                    to="/about"
                    className="relative group inline-block w-16 md:w-24"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                >
                    <motion.div
                        className="absolute top-[35%] left-0 h-[50%] w-full -translate-y-1/2"
                        style={{
                            zIndex: 10,
                            background: 'linear-gradient(90deg, rgba(255, 235, 59, 0.6) 0%, rgba(255, 235, 59, 0.5) 50%, rgba(255, 235, 59, 0.6) 100%)',
                            transform: 'skewX(-3deg)',
                            borderRadius: '30% 15% 25% 20%',
                            mixBlendMode: 'multiply'
                        }}
                        initial={{ clipPath: 'polygon(0 10%, 0 0, 0 100%, 0 90%)' }}
                        animate={{
                            clipPath: isAboutHovered
                                ? 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)'
                                : 'polygon(0 10%, 0 0, 0 100%, 0 90%)'
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                            delay: isAboutHovered ? 0 : 0.1
                        }}
                    />
                    <img src={aboutImage} alt="About" className="w-full object-contain relative z-0" />
                </Link>
            </nav>
        </div>
        </>
    );
};

export default Header;
