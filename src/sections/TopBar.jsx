import profile from "../assets/picofme.png";
import { MdMessage } from "react-icons/md";

const TopBar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto px-6 py-4">
            {/* Profile Image */}
            <div className="bg-stone-500 p-2 rounded-md">
                <img
                    src={profile}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                />
            </div>

            {/* Message Icon */}
            <div className="bg-stone-500 hover:bg-red-200 h-12 w-12 flex items-center justify-center hover:scale-110 hover:cursor-pointer transition-transform duration-200 rounded-md mt-4 md:mt-0">
                <a href="#contact">
                    <MdMessage size={30} />
                </a>
            </div>
        </div>
    );
};

export default TopBar;
