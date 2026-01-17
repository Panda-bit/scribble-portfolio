import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full flex justify-center"
            >
                <img src="/src/assets/images/title.png" alt="Lucas Ho" className="w-[80%] md:w-[60%] object-contain opacity-80" />
            </motion.div>
        </div>
    );
};

export default Hero;
