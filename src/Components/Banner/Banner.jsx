import React from 'react';
import image from '/src/assets/woman2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">Let’s Build Something Amazing</h1>
                    <p className="py-6">
                    Hi, I’m Anjuman Ara, a passionate Web developer creating impactful and innovative work. Let’s build something amazing together.
                    </p>
                    <button className="btn bg-gray-900 text-white">Hire Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;