import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm Abhishek Chauhan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Computer Science Engineer specializing in Cloud Computing and Web Development
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Developer"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;