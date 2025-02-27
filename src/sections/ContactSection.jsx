import { MdEmail, MdPhone, MdDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const ResumeContact = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            {/* Section Title */}
            <div className="flex items-center justify-center mb-12">
                <div className="flex items-center w-full max-w-md">
                    <hr className="flex-grow border-t border-gray-500" />
                    <h3 className="text-2xl font-semibold px-4 text-center">Resume & Contact</h3>
                    <hr className="flex-grow border-t border-gray-500" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
                {/* Resume Download Section */}
                <div className="w-full md:w-1/2 bg-stone-800 p-6 rounded-lg shadow-lg text-center">
                    <h4 className="text-xl font-semibold mb-4">Download My Resume</h4>
                    <p className="text-gray-400 mb-6">Click below to download my latest resume.</p>
                    <a
                        href="https://drive.google.com/file/d/18UdkxbGfjfRlOvfVZUi9qBUrp0hznjb8/view?usp=sharing"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-stone-500 to-stone-700 hover:from-stone-600 hover:to-stone-800 text-white font-semibold rounded-lg transition-transform hover:scale-105 shadow-md"
                    >
                        <MdDownload className="text-xl animate-bounce" /> Download PDF
                    </a>
                </div>

                {/* Contact Info Section */}
                <div className="w-full md:w-1/2 bg-stone-800 p-6 rounded-lg shadow-lg text-center">
                    <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
                    <p className="text-gray-400 mb-6">Feel free to reach out to me via email or LinkedIn.</p>
                    <div className="flex flex-col gap-3">
                        <a
                            href="mailto:dksisodia002@gmail.com"
                            className="flex items-center justify-center gap-3 text-gray-300 hover:text-blue-400 transition"
                        >
                            <MdEmail size={24} /> dksisodia002@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dhamkirti-sisodia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 text-gray-300 hover:text-blue-500 transition"
                        >
                            <FaLinkedin size={24} /> LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeContact;
