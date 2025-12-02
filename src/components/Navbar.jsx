import React from 'react';
// আপনি এখানে React Icons ব্যবহার করতে পারেন যদি নিউ টিকিট বাটনে কোনো আইকন দিতে চান 

const Navbar = () => {
    return (
        <nav className="p-4 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* 1. Website Name / Logo (Left Side) */}
                <div className="text-xl font-bold text-gray-800">
                    CS — Ticket System
                </div>

                {/* 2. Menu Items and Button (Right Side) */}
                <div className="flex items-center space-x-6">
                    
                    {/* Menu Items */}
                    <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Home</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">FAQ</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Changelog</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Blog</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Download</a>
                        <a href="#" className="hover:text-indigo-600 transition duration-150">Contact</a>
                    </div>
                    
                    {/* New Ticket Button */}
                    <button
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
                    >
                        + New Ticket
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;