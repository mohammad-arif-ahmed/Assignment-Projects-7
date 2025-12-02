
import React from 'react';
import Navbar from './components/Navbar'; 
import Banner from './components/Banner';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto p-4 md:px-8"> 
                <Banner />
                <h1 className="text-3xl text-gray-900 mt-8">Welcome to Customer Support Zone</h1>
            </main>

        </div>
    );
}

export default App;