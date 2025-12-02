import React from 'react';
import TicketList from './TicketList';
import TaskStatus from './TaskStatus';
const MainLayout = ({ 
    allTickets, 
    setAllTickets, 
    inProgressTasks, 
    setInProgressTasks, 
    resolvedTasks, 
    setResolvedTasks 
}) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Tickets</h2>
                
                <TicketList 
                    allTickets={allTickets}
                    setAllTickets={setAllTickets}
                    setInProgressTasks={setInProgressTasks} 
                    inProgressTasks={inProgressTasks}
                />
            </div>
            
            <div className="lg:col-span-1">
                <TaskStatus 
                    inProgressTasks={inProgressTasks}
                    setInProgressTasks={setInProgressTasks} 
                    resolvedTasks={resolvedTasks}
                    setResolvedTasks={setResolvedTasks} 
                    setAllTickets={setAllTickets} 
                />
            </div>
        </div>
    );
};

export default MainLayout;