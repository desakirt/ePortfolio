import { motion } from 'framer-motion';
import BankingApp from "../assets/BankingApp.jpg";
import Graphcast from "../assets/Graphcast (1).jpg";
import BlogspaceImage from "../assets/Blogapp.jpeg";  // Correct the relative path if needed


const projects = [
  {
    title: "Banking Application",
    description: "The BankApplication is a comprehensive banking management system designed to handle various banking operations such as account creation, deposits, withdrawals, and balance inquiries. It provides a user-friendly interface and robust backend functionality to ensure secure and efficient banking transactions.",
    tags: ["Java", "Node.js", "MongoDB"],
    image: BankingApp,
    link: "https://github.com/desakirt/BankApp",
  },
  {
    title: "Google DeepMind GraphCast and GenCast",
    description: "GraphCast is an advanced AI system developed by Google DeepMind, primarily designed for weather forecasting and modeling physical systems. It leverages graph neural networks (GNNs) to understand and predict complex, dynamic systems represented as graphs.",
    tags: ["Python", "Firebase"],
    image: Graphcast,
    link: "https://github.com/desakirt/graphcast",
  },
  {
    title: "Blogspace Application",
    description: "Features 📝 Dynamic Blog Posts: Create, read, and manage blog entries with ease. 📱 Responsive Design: Optimized for devices of all sizes. 🎨 Modern Styling: Styled with clean and reusable CSS, using modern design principles. 🔒 TypeScript Integration: Ensures robust and error-free development with type safety. 🚀 Fast Build: Utilizes modern tooling like Vite for a fast and efficient development experience. Tech Stack Frontend",
    tags: ["Typescript", "vite.js", "SQL"],
    image: BlogspaceImage,  // Use Blogspace image
    link: "https://github.com/desakirt/Blog-App",
  },
];

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div className="container mx-auto px-4 pt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-black text-4xl md:text-5xl text-center">
            Projects
          </h2>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-tertiary rounded-xl overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/70 mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-black-200 text-white/90 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-white hover:text-[#915eff]"
                  >
                    View Project →
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

export default Projects;
