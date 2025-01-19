import { motion } from 'framer-motion';


const certifications = [
  {
    title: "JPMorgan Chase & Co - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2024",
    image: "https://th.bing.com/th/id/OIP.I9RculMi86WxL_DbvQ48DgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "Microsoft Azure Fundamentals AZ900",
    issuer: "Microsoft",
    date: "2025",
    image: "https://th.bing.com/th/id/OIP.7TmzQPd9omvkagiD0ZGzqQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Inspiration. The future. Python, Ansible ++",
    issuer: "GNS3",
    date: "2025",
    image: "https://th.bing.com/th/id/OIP.3hO2_6q8K-oVawVNJMG1xwHaEK?rs=1&pid=ImgDetMain",
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
                className="bg-tertiary rounded-xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4 aspect-w-16 aspect-h-9">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 rounded-lg"
                  />
                </div>
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-white hover:text-[#915eff] transition-colors duration-300"
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