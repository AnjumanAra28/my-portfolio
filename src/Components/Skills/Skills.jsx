import React from 'react';

const Skills = () => {
    return (
        <section id='skills' className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HTML Card */}
          <div className="card bg-gray-800 shadow-xl p-6">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-blue-400">HTML</h3>
              <p className="text-gray-300">
                The foundation of every website, structuring content for the web.
              </p>
            </div>
          </div>

          {/* CSS Card */}
          <div className="card bg-gray-800 shadow-xl p-6">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-blue-400">CSS</h3>
              <p className="text-gray-300">
                Styling websites with responsive, elegant designs.
              </p>
            </div>
          </div>

          {/* Tailwind CSS Card */}
          <div className="card bg-gray-800 shadow-xl p-6">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-blue-400">Tailwind CSS</h3>
              <p className="text-gray-300">
                A utility-first framework for rapid UI development.
              </p>
            </div>
          </div>

          {/* JavaScript Card */}
          <div className="card bg-gray-800 shadow-xl p-6">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-blue-400">JavaScript</h3>
              <p className="text-gray-300">
                Bringing interactivity and functionality to web applications.
              </p>
            </div>
          </div>

          {/* React Card */}
          <div className="card bg-gray-800 shadow-xl p-6">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-blue-400">React</h3>
              <p className="text-gray-300">
                A powerful JavaScript library for building modern UIs.
              </p>
            </div>
          </div>

          {/* MongoDB Card */}
          <div className="card bg-gray-800 shadow-xl p-6">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-blue-400">MongoDB</h3>
              <p className="text-gray-300">
                A NoSQL database for scalable and flexible data storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Skills;