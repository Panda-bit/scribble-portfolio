import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import titleImage from '../assets/images/title.png';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.src = titleImage;

        img.onload = () => {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full flex justify-center"
            >
                <canvas
                    ref={canvasRef}
                    id="site-title-canvas"
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-[80%] md:w-[60%] h-auto opacity-60"
                    style={{ display: 'block', filter: 'brightness(0.7)' }}
                />
            </motion.div>
        </div>
    );
};

export default Hero;
