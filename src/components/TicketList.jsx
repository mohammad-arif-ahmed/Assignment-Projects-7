import React from 'react'
import TicketCard from './TicketCard';

const TicketList = ({ 
    allTickets, 
    setInProgressTasks, 
    inProgressTasks 
}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allTickets.map((ticket) => (
                <TicketCard 
                    key={ticket.id}
                    ticket={ticket} 
                    setInProgressTasks={setInProgressTasks} 
                    inProgressTasks={inProgressTasks} 
                />
            ))}
        </div>
    );
};

export default TicketList;