import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div className="container mx-auto px-4 pt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-black text-4xl md:text-5xl text-center">
            About Me
          </h2>
          <p className="mt-8 text-secondary text-lg leading-relaxed">
            I am a versatile professional with expertise in Software Development, Application Development,
            IT Support, and Quality Assurance. With a passion for technology and problem-solving,
            I bring a comprehensive skill set to every project I undertake.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-xl p-6"
            >
              <h3 className="text-white text-2xl font-bold mb-4">Skills</h3>
              <ul className="list-disc list-inside text-secondary">
                <li>Full Stack Development</li>
                <li>Mobile App Development</li>
                <li>IT Infrastructure Management</li>
                <li>Quality Assurance</li>
                <li>Technical Support</li>
                <li>Project Management</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-xl p-6"
            >
              <h3 className="text-white text-2xl font-bold mb-4">Experience</h3>
              <ul className="space-y-4 text-secondary">
                <li>
                  <h4 className="text-white font-semibold">Software Developer</h4>
                  <p>YBI Foundation • Sep/2024 - Dec/2024</p>
                </li>
                <li>
                  <h4 className="text-white font-semibold">IT Support Specialist</h4>
                  <p>RCS India • Jan/2023 - May/2023</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;