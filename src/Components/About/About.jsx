import React from 'react';

const About = () => {
    return (
        <section id='about' className="bg-gray-900 text-white py-16 px-6 my-14">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-300">
                    I'm <span className="text-blue-400 font-semibold">Anjuman Ara Anny </span>, a passionate web developer skilled in
                    <span className="text-blue-400"> HTML, CSS, Tailwind, JavaScript, React,</span> and
                    <span className="text-blue-400"> MongoDB</span>. I specialize in building sleek, responsive, and high-performance web applications.
                    I love solving complex problems, optimizing user experiences, and staying ahead with the latest web technologies.
                </p>
            </div>
        </section>
    );
};

export default About;