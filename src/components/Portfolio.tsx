import { motion } from 'framer-motion';
import ScribbledBox from './ScribbledBox';
import ghostbgIcon from '../assets/images/ghostbg.png';
import bostmapliveIcon from '../assets/images/bostmaplive.png';
import hangdudeIcon from '../assets/images/hangdude.jpg';
import metronomeIcon from '../assets/images/metronome-logo.png';

const projects = [
    {
        title: 'GhostBG',
        description: 'Chrome Extension to remove background without hassle.',
        icon: ghostbgIcon,
        url: 'https://ghostbg.xyz'
    },
    {
        title: 'BosTmapLive',
        description: 'Live Boston T Tracking Visualizer',
        icon: bostmapliveIcon,
        url: 'https://bostmaplive.xyz'
    },
    {
        title: 'Hangdude',
        description: 'Daily hangman vocabulary game.',
        icon: hangdudeIcon,
        url: 'https://hangdude.xyz'
    },
    {
        title: 'Metronome',
        description: 'Premiere plugin for automated beat markers.',
        icon: metronomeIcon,
        url: 'https://prmetronome.xyz'
    },
];

const Portfolio = () => {
    const handleProjectClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen pt-20 pb-20">
            <motion.h2
                className="font-scribble text-5xl md:text-7xl text-gray-800 mb-12 text-center px-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Portfolio
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <ScribbledBox
                        key={index}
                        project={project}
                        index={index}
                        onClick={() => handleProjectClick(project.url)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
