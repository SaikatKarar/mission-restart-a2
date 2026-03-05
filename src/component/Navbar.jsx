import { FiPlus } from "react-icons/fi";

export default function Navbar() {
    return (
        <header className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">


                <div className="text-xl font-semibold text-gray-900 tracking-tight">
                    TaskFlow — Ticket System
                </div>

                <nav className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
                        <li className="hover:text-gray-900 cursor-pointer transition">
                            Home
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition">
                            FAQ
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition">
                            Changelog
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition">
                            Blog
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition">
                            Download
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition">
                            Contact
                        </li>
                    </ul>

                    <button
                        className="flex items-center gap-2 text-white text-sm font-medium px-5 py-2 rounded-md shadow-sm transition-all duration-200 bg-gradient-to-r from-[#422AD5] to-[#7B4DFF] hover:brightness-110 cursor-pointer"
                    >
                        <FiPlus className="text-base" />
                        New Ticket
                    </button>
                </nav>
            </div>
        </header>
    );
}