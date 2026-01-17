import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="fixed bottom-8 right-8 flex items-end gap-6 z-50 transform translate-x-4 translate-y-4 md:translate-x-0 md:translate-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        >
            {/* 
            <div className="flex gap-4 items-end pb-2">
                <motion.a
                    href="#"
                    className="inline-block w-12 md:w-16"
                >
                    <img src="/src/assets/images/robot.png" alt="Github" className="w-full object-contain opacity-80 hover:opacity-100" />
                </motion.a>
                <motion.a
                    href="#"
                    className="inline-block w-12 md:w-16"
                >
                    <img src="/src/assets/images/circle.png" alt="Twitter" className="w-full object-contain opacity-80 hover:opacity-100" />
                </motion.a>
                <motion.a
                    href="#"
                    className="inline-block w-12 md:w-16"
                >
                    <img src="/src/assets/images/bird.png" alt="Mail" className="w-full object-contain opacity-80 hover:opacity-100" />
                </motion.a>
            </div>

            <motion.div
                className="relative group cursor-pointer inline-block w-24 md:w-32"
            >
                <img src="/src/assets/images/contacts.png" alt="Contacts" className="w-full object-contain opacity-80 hover:opacity-100" />
            </motion.div> 
            */}
        </motion.footer>
    );
};

export default Footer;
