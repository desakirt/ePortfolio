import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img from '../assets/Kirtan.jpg';

const roles = [
  "Software Developer",
  "Application Developer",
  "IT Support",
  "Quality Technician"
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="container mx-auto px-4 pt-24 max-w-7xl flex flex-col md:flex-row items-center justify-center h-full gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-white font-black text-5xl md:text-7xl">
            Hi, I'm <span className="text-[#915eff]">Kirtan Desai</span>
          </h1>
          <div className="h-24"> {/* Fixed height container for role text */}
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-secondary mt-4 text-lg md:text-xl"
            >
              I'm a <span className="text-[#915eff] font-semibold">{roles[currentRole]}</span>
            </motion.p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a href="https://github.com/desakirt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915eff]">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/kirtan-desai-426a8530b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915eff]">
              <FaLinkedin size={30} />
            </a>
            <a href="https://x.com/Kirtan_Desai1?mx=2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915eff]">
              <FaTwitter size={30} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={img} // Replace with your photo URL
              alt="Kirtan Desai"
              className="rounded-full object-cover w-full h-full border-4 border-[#915eff]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;