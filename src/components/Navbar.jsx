import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-4 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-xl font-bold text-gray-800">
                    CS — Ticket System
                </div>

                <div className="flex items-center space-x-6">

                    <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Home</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">FAQ</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Changelog</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Blog</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Download</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Contact</a>
                    </div>

                    <button
                        className="flex items-center px-4 py-2 text-sm font-semibold rounded-lg shadow-md 
                               text-white 
                               bg-gradient-to-r from-purple-600 to-indigo-700 
                               transition duration-200"
                    >
                        + New Ticket
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;