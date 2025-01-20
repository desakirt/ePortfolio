import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Hardcode the service, template, and user IDs directly
const SERVICE_ID = 'service_6ata5vg';  // Replace with your actual service ID
const TEMPLATE_ID = 'template_c48t9cr';  // Replace with your actual template ID
const USER_ID = 'tk56EG_mErSVSOfdb';  // Replace with your actual user ID

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using emailjs
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Kirtan Desai',
        from_email: form.email,
        to_email: 'kirtandesai119@gmail.com',
        message: form.message,
      },
      USER_ID
    ).then(() => {
      setLoading(false);
      alert('Thank you for your message. I will get back to you soon!');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="relative w-full min-h-screen">
      <div className="container mx-auto px-4 pt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-black text-4xl md:text-5xl text-center">
            Contact Me
          </h2>
          
          <div className="mt-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-tertiary py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-tertiary py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="bg-tertiary py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-[#915eff] transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="bg-tertiary rounded-xl p-8">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Let's Connect
                </h3>
                <p className="text-secondary">
                  I'm always open to discussing new projects, opportunities,
                  or partnerships. Feel free to reach out to me through this
                  form or my social media profiles.
                </p>
                <div className="mt-8">
                  <p className="text-white font-medium">Email</p>
                  <p className="text-secondary">kirtandesai119@gmail.com</p>
                </div>
                <div className="mt-4">
                  <p className="text-white font-medium">Location</p>
                  <p className="text-secondary">Greater Toronto Area, ON</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
