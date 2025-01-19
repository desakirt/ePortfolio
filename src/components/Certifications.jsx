import { motion } from 'framer-motion';

const certifications = [
  {
    title: "JPMorgan Chase & Co - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2024",
    image: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_CxaTWzYqpAzSnBRHg_1735953732911_completion_certificate.pdf",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_CxaTWzYqpAzSnBRHg_1735953732911_completion_certificate.pdf",
  },
  {
    title: "Microsoft Azure Fundamentals AZ900",
    issuer: "Microsoft",
    date: "2025",
    image: "https://www.linkedin.com/learning/certificates/6a13b6e5d109ed9f71580b2e7a8c62835c99befc38c760cb664cd50dc25b4b61?trk=share_certificate",
    link: "https://www.linkedin.com/learning/certificates/6a13b6e5d109ed9f71580b2e7a8c62835c99befc38c760cb664cd50dc25b4b61?trk=share_certificate",
  },
  {
  title: "Inspiration. The future. Python, Ansible ++",
  issuer: "GNS3",
  date: "2025",
  image: "https://www.linkedin.com/learning/certificates/6a13b6e5d109ed9f71580b2e7a8c62835c99befc38c760cb664cd50dc25b4b61?trk=share_certificate",
  link: "https://gns3.teachable.com/courses/enrolled/502311",
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
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
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