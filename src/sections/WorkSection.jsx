const WorkExperience = () => {
    const experiences = [
        {
            company: "Stardust IT Solutions",
            role: "Junior MERN Developer Intern",
            duration: "March 2024 - June 2024",
            description: [
                "Engineered a robust and scalable backend infrastructure tailored for a multi-vendor platform, ensuring seamless functionality and scalability.",
                "Architected and implemented the entire frontend interface of an intricate admin panel within an accelerated timeframe of 20 days, optimizing both aesthetics and user experience."
            ]
        },
        {
            company: "Persistent Digital Commerce Limited",
            role: "Backend Developer Intern",
            duration: "November 2023 - December 2023",
            description: [
                "Independently developed a scalable backend framework for a delivery app, optimizing performance with caching mechanisms and database enhancements.",
                "Leveraged Node.js and database design expertise for robust data management and efficient server-side operations."
            ]
        },
        {
            company: "Gooogle Developer Student Club , ITM Gwalior",
            role: "Creative Director",
            duration: "August 2022 - June 2023",
            description: [
                "Handled the establishment and growth of a thriving community of over 600 students, deftly organizing and overseeing more than 30 high - impact events, fostering innovation and collaboration across the ITM - Gwalior campus.",
                "Seamlessly coordinated cross-functional teams, leveraging advanced problem-solving acumen to drive project success, while simultaneously managing multiple initiatives in parallel with precision and efficiency.",
                "Facilitated partnerships with external tech communities and industry leaders, ensuring the student body remained at the forefront of emerging technologies and professional development opportunities."
            ]
        },
    ];

    return (
        <section className="py-16  text-white">
            {/* Section Title */}
            <div className="flex items-center justify-center mb-12">
                <div className="flex items-center w-full max-w-lg">
                    <hr className="flex-grow border-t border-gray-600" />
                    <h3 className="text-2xl font-semibold px-4">Work Experience</h3>
                    <hr className="flex-grow border-t border-gray-600" />
                </div>
            </div>

            {/* Experience Cards */}
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-stone-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
                    >
                        <h4 className="text-xl font-bold">{exp.company}</h4>
                        <p className="text-gray-400">{exp.role}</p>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                        {exp.description.map((item) => {
                            return (<p className="mt-2">{item}</p>)
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
