import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScribbledBoxProps {
    project: {
        title: string;
        description: string;
        icon: string;
        url: string;
    };
    index: number;
    onClick?: () => void;
}

const ScribbledBox = ({ project, index, onClick }: ScribbledBoxProps) => {
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

        // Procedurally generate scribbled box edges
        const drawScribbledLine = (x1: number, y1: number, x2: number, y2: number) => {
            const segments = 20;
            const wobble = 3;

            ctx.beginPath();
            ctx.moveTo(x1, y1);

            for (let i = 0; i <= segments; i++) {
                const t = i / segments;
                const x = x1 + (x2 - x1) * t;
                const y = y1 + (y2 - y1) * t;

                // Add random wobble with seeded randomness based on index
                const seed = index * 1000 + i;
                const randomX = (Math.sin(seed * 0.1) * wobble);
                const randomY = (Math.cos(seed * 0.15) * wobble);

                ctx.lineTo(x + randomX, y + randomY);
            }

            ctx.stroke();
        };

        const margin = 10;

        // Draw four scribbled edges
        drawScribbledLine(margin, margin, width - margin, margin); // top
        drawScribbledLine(width - margin, margin, width - margin, height - margin); // right
        drawScribbledLine(width - margin, height - margin, margin, height - margin); // bottom
        drawScribbledLine(margin, height - margin, margin, margin); // left

    }, [index]);

    return (
        <motion.div
            className="relative cursor-pointer group aspect-square"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
        >
            <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
            />
            <div className="relative h-full flex flex-col overflow-hidden p-4 md:p-6">
                {/* Icon section - top 2/3 */}
                <div className="flex-[2] flex items-center justify-center">
                    <img
                        src={project.icon}
                        alt={project.title}
                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    />
                </div>

                {/* Text section - bottom 1/3 */}
                <div className="flex-[1] flex flex-col justify-center px-3 pb-3">
                    <h3 className="font-scribble text-xl md:text-3xl mb-2 text-gray-500 group-hover:text-gray-600 transition-colors break-words line-clamp-2">
                        {project.title}
                    </h3>
                    <p className="font-scribble text-sm md:text-lg text-gray-400 group-hover:text-gray-500 transition-colors break-words leading-snug line-clamp-3">
                        {project.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ScribbledBox;
