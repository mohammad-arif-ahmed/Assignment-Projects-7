import React from 'react';
import vectorPattern from '../assets/vector1.png'; 
const Banner = ({ inProgressCount, resolvedCount }) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative p-6 rounded-xl shadow-lg overflow-hidden h-48 
                            flex flex-col justify-center items-center 
                            bg-gradient-to-r from-indigo-500 to-purple-600">
                
                <img 
                    src={vectorPattern} 
                    alt="Background Pattern 1" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                
                <img 
                    src={vectorPattern} 
                    alt="Background Pattern 2" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 scale-x-[-1]"
                />

                <div className="relative z-10 text-center">
                    <p className="text-white text-lg font-medium uppercase mb-2">In-Progress</p>
                    <h2 className="text-white text-6xl font-extrabold">{inProgressCount}</h2>
                </div>
            </div>

            <div className="relative p-6 rounded-xl shadow-lg overflow-hidden h-48 
                            flex flex-col justify-center items-center 
                            bg-gradient-to-r from-green-500 to-teal-600">
                
                <img 
                    src={vectorPattern} 
                    alt="Background Pattern 1" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 scale-x-[-1]"
                />
                
                <img 
                    src={vectorPattern} 
                    alt="Background Pattern 2" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                />

                <div className="relative z-10 text-center">
                    <p className="text-white text-lg font-medium uppercase mb-2">Resolved</p>
                    <h2 className="text-white text-6xl font-extrabold">{resolvedCount}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;