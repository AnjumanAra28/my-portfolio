import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error loading projects:', error));
    }, []);

    return (
        <section id="projects" className=" text-white py-14 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="card bg-gray-800 shadow-xl">
                            <div className="card-body text-center">
                                <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="card-actions justify-center mt-4">
                                    <a
                                        href={project.projectUrl}
                                        className="btn bg-white btn-outline text-gray-900"
                                        target="_blank"
                                        // rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;