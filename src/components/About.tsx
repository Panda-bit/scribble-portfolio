import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const SocialLink = ({ href, label, index }: { href: string; label: string; index: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 2;

        const drawScribbledLine = (x1: number, y1: number, x2: number, y2: number) => {
            const segments = 15;
            const wobble = 2;

            ctx.beginPath();
            ctx.moveTo(x1, y1);

            for (let i = 0; i <= segments; i++) {
                const t = i / segments;
                const x = x1 + (x2 - x1) * t;
                const y = y1 + (y2 - y1) * t;

                const seed = index * 500 + i;
                const randomX = Math.sin(seed * 0.1) * wobble;
                const randomY = Math.cos(seed * 0.15) * wobble;

                ctx.lineTo(x + randomX, y + randomY);
            }

            ctx.stroke();
        };

        const margin = 8;
        drawScribbledLine(margin, margin, width - margin, margin);
        drawScribbledLine(width - margin, margin, width - margin, height - margin);
        drawScribbledLine(width - margin, height - margin, margin, height - margin);
        drawScribbledLine(margin, height - margin, margin, margin);
    }, [index]);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer block"
        >
            <canvas
                ref={canvasRef}
                width={300}
                height={80}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />
            <div className="relative py-4 px-6">
                <span className="font-scribble text-lg md:text-xl text-gray-500 group-hover:text-gray-600 transition-colors">
                    {label}
                </span>
            </div>
        </a>
    );
};

const About = () => {
    const socialLinks = [
        { href: 'https://instagram.com/lucas_.ho', label: 'Instagram' },
        { href: 'https://www.reddit.com/user/OkBarracuda4416/', label: 'Reddit' },
        { href: 'https://x.com/lucas_h_0', label: 'Twitter' },
        { href: 'mailto:lucas.jediho@gmail.com', label: 'Email' },
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

                {/* Profile Picture Placeholder - Replace with actual image */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="w-48 h-48 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 font-scribble">Profile Picture</span>
                    </div>
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    {socialLinks.map((link, index) => (
                        <SocialLink
                            key={index}
                            href={link.href}
                            label={link.label}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
