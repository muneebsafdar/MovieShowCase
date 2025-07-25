import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full px-8 py-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Profile Image */}
        <img 
          src="public\profile.png" // <-- Replace this path with your actual image path
          alt="Muneeb Safdar"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-6 border-4 border-teal-400 shadow-md"
        />

        <h1 className="text-4xl font-bold mb-4 text-teal-400">About Me</h1>
      </div>

      <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg mb-6 text-gray-300">
          I'm <span className="text-white font-semibold">Muneeb Safdar</span>, a dedicated and enthusiastic developer with a passion for building user-friendly and impactful digital experiences. I specialize in front-end technologies, especially React, and continuously explore full-stack development, cloud integration, and intelligent systems.
        </p>

        <p className="text-lg mb-6 text-gray-300">
          My approach to development is centered around clean code, scalability, and real-world problem-solving. I enjoy transforming ideas into responsive, accessible, and interactive applications — whether it’s through web technologies, AI integrations, or modern frameworks.
        </p>

        <p className="text-lg mb-6 text-gray-300">
          I believe in lifelong learning and collaborative growth. Whether you’re a fellow developer, recruiter, or someone who’s just curious about my work — I’m always open to new connections, ideas, and opportunities.
        </p>

        <p className="text-lg mb-6 text-gray-300">
          If you’re interested in working together, contributing to innovative ideas, or just having a meaningful conversation about tech — don’t hesitate to reach out.
        </p>

        <div className="mt-8 space-y-2 text-gray-300">
          <p><span className="font-semibold text-white">Email:</span> <a href="mailto:safdarmuneeb95@gmail.com" className="text-teal-400 hover:underline">muneeb@example.com</a></p>
          <p><span className="font-semibold text-white">GitHub:</span> <a href="https://github.com/muneebsafdar" target="_blank" className="text-teal-400 hover:underline">github.com/muneebsafdar</a></p>
          <p><span className="font-semibold text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/muneeb--ur--rehman/r" target="_blank" className="text-teal-400 hover:underline">linkedin.com/in/muneeb--ur--rehman/</a></p>
        </div>

        <p className="mt-8 text-lg text-teal-400 font-semibold">
          Let’s build, learn, and grow together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
