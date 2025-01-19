import { motion } from 'framer-motion';
import jpImage from '../assets/JP.jpg';
import azureImage from '../assets/Azure.jpg';
import pythonImage from '../assets/python.jpg';

const certifications = [
  {
    title: "JPMorgan Chase & Co - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2024",
    image: jpImage, // Imported image
  },
  {
    title: "Microsoft Azure Fundamentals AZ900",
    issuer: "Microsoft",
    date: "2025",
    image: azureImage, 
  },
  {
    title: "Inspiration. The future. Python, Ansible ++",
    issuer: "GNS3",
    date: "2025",
    image: pythonImage, 
  },
];



const Certifications = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div className="container mx-auto px-4 pt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, rotateX: 45 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-black text-4xl md:text-5xl text-center">
            Certifications
          </h2>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-tertiary rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover" // Set the same height and width as the project images
                />
                <h3 className="text-white text-xl font-bold text-center">
                  {cert.title}
                </h3>
                <p className="text-white/70 text-center mt-2">
                  {cert.issuer}
                </p>
                <p className="text-white/70 text-center mt-1">
                  {cert.date}
                </p>
                <div className="text-center mt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#915eff]"
                  >
                    View Certificate →  
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
