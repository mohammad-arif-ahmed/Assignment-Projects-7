import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-12 py-10">
            <div className="container mx-auto px-4 md:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-6">
                    
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-3">CS — Ticket System</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            The customer support zone built with React and Tailwind CSS.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold text-white mb-3">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-150">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold text-white mb-3">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Download Apps</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-md font-semibold text-white mb-3">Social Links</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <a href="#" className="flex items-center hover:text-white transition duration-150"><FaFacebook className="mr-2"/> ICES — Ticket System</a>
                            <a href="#" className="flex items-center hover:text-white transition duration-150"><FaTwitter className="mr-2"/> ICES — Ticket System</a>
                            <a href="#" className="flex items-center hover:text-white transition duration-150"><FaInstagram className="mr-2"/> support@cst.com</a>
                            <a href="#" className="flex items-center hover:text-white transition duration-150"><FaEnvelope className="mr-2"/> support@cst.com</a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;