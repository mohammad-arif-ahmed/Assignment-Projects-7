
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ticketsData from './data/tickets.json';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
    const [allTickets, setAllTickets] = useState(ticketsData);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto p-4 md:px-8">
                <Banner 
                inProgressCount={inProgressTasks.length}
                resolvedCount={resolvedTasks.length}/>
                
                <MainLayout
                    allTickets={allTickets}
                    setAllTickets={setAllTickets}
                    inProgressTasks={inProgressTasks}
                    setInProgressTasks={setInProgressTasks}
                    resolvedTasks={resolvedTasks}
                    setResolvedTasks={setResolvedTasks}
                />
            </main>
            <Footer />
            <Toaster />

        </div>
    );
}

export default App;