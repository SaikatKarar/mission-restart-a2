import {
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* Column 1 */}
                    <div className="md:col-span-1">
                        <h2 className="text-white text-xl font-semibold mb-4">
                            CS — Ticket System
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition">About Us</li>
                            <li className="hover:text-white transition">Our Mission</li>
                            <li className="hover:text-white transition">Contact Sales</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition">Products & Services</li>
                            <li className="hover:text-white transition">Customer Stories</li>
                            <li className="hover:text-white transition">Download Apps</li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Information</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition">Privacy Policy</li>
                            <li className="hover:text-white transition">Terms & Conditions</li>
                            <li className="hover:text-white transition">Join Us</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>
                        <ul className="space-y-4 text-sm">

                            <li className="flex items-center gap-3 hover:text-white transition">
                                <FaXTwitter className="text-white text-base" />
                                @CS — Ticket System
                            </li>

                            <li className="flex items-center gap-3 hover:text-white transition">
                                <FaLinkedinIn className="text-white text-base" />
                                @CS — Ticket System
                            </li>

                            <li className="flex items-center gap-3 hover:text-white transition">
                                <FaFacebookF className="text-white text-base" />
                                @CS — Ticket System
                            </li>

                            <li className="flex items-center gap-3 hover:text-white transition">
                                <MdEmail className="text-white text-base" />
                                support@cst.com
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>

            </div>
        </footer>
    );
}