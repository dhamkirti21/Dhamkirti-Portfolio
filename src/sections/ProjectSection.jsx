const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built using React and Tailwind CSS.",
        link: "https://dhamkirti-portfolio.vercel.app/",
    },
    {
        title: "InstaPedia",
        description: "Full-stack Social Media platform with Firebase.",
        link: "https://github.com/dhamkirti21/SocialMediaApplication/",
    },
    {
        title: "Weather App",
        description: "Fetches live weather data using OpenWeather API.",
        link: "https://weather-application-gamma-beige.vercel.app/",
    },
    {
        title: "SpeakUP App",
        description: "A Open Platform to Discuss City Problems Anonomusly",
        link: "https://github.com/dhamkirti21/SPEAKUP/",
    },

];

const ProjectSection = () => {
    return (
        <section id="contact" className="py-16  text-white">
            {/* Section Title */}
            <div className="flex items-center justify-center mb-12">
                <div className="flex items-center w-full max-w-md">
                    <hr className="flex-grow border-t border-gray-500" />
                    <h3 className="text-2xl font-semibold px-4">Projects</h3>
                    <hr className="flex-grow border-t border-gray-500" />
                </div>
            </div>

            {/* Project Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-stone-800 hover:bg-stone-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105"
                    >
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <p className="text-gray-400 mt-2">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-stone-600 hover:bg-stone-900 rounded-md text-white font-semibold transition"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
