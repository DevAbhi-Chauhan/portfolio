import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Book } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Master's in Computer Science Engineering (Cloud Computing)",
      institution: "Chandigarh University",
      year: "2024-2026",
      grade: "Pursuing",
    },
    {
      degree: "Bachelor's in Computer Science Engineering (Cloud Computing)",
      institution: "Chandigarh University",
      year: "2020-2024",
      grade: "CGPA: 7.82",
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "Army Public School, Ambala Cantt",
      year: "2018-2019",
      grade: "69.6%",
    },
    {
      degree: "Matriculation (CBSE)",
      institution: "Army Public School, Kota",
      year: "2016-2017",
      grade: "CGPA: 8.60",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a dedicated Computer Science Engineer with a focus on Cloud Computing and Web Development.
            My journey is driven by a passion for creating innovative solutions and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>{edu.year}</span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="mr-2" /> Certifications
              </h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-md">
                  Web Development Training Certificate
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  Operating System Course - NPTEL, IIT Kharagpur
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  Bronze Medal - Interschool Debate Competition
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  A Grade - NCC Air Wing
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Book className="mr-2" /> Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  Reading Books
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  Travelling
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  Cricket
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  Watching Documentaries
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;