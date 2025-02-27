const skills = [
    "React.Js", "Node.Js", "Express.Js", "Firebase", "MongoDB", "JavaScript",
    "Coding", "MVC", "Agile", "OOP", "REST API", "WebSockets",
    "AWS", "Next.Js", "MS Office",
];

const SkillSection = () => {
    return (
        <section className="py-16 mt-2 text-white">
            {/* Section Title */}
            <div className="flex items-center justify-center mb-12">
                <div className="flex items-center w-full max-w-md">
                    <hr className="flex-grow border-t border-gray-500" />
                    <h3 className="text-2xl font-semibold px-4">Skills</h3>
                    <hr className="flex-grow border-t border-gray-500" />
                </div>
            </div>

            {/* Skills Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="bg-stone-700 hover:bg-stone-500 p-4 rounded-md text-center shadow-md transition-transform hover:scale-105"
                    >
                        <p className="text-white font-bold">{skill}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;
