import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa'; 
import toast from 'react-hot-toast'; 

const TicketCard = ({ 
    ticket, 
    setInProgressTasks, 
    inProgressTasks 
}) => {

    const getStatusColor = (status) => {
        switch (status) {
            case 'Open': return 'bg-green-100 text-green-700 ring-green-500/10';
            case 'In-Progress': return 'bg-amber-100 text-amber-700 ring-amber-500/10';
            default: return 'bg-gray-100 text-gray-700 ring-gray-500/10';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'HIGH': return 'text-red-600 font-bold';
            case 'MEDIUM': return 'text-orange-500';
            case 'LOW': return 'text-gray-500';
            default: return 'text-gray-500';
        }
    };
    

    const handleCardClick = () => {
        const isAlreadyInTask = inProgressTasks.some(task => task.id === ticket.id);
        
        if (isAlreadyInTask) {
            toast.error(`"${ticket.title}" already added to Task Status.`);
            return;
        }

        setInProgressTasks(prevTasks => [...prevTasks, ticket]);
        
        toast.success(`"${ticket.title}" added to Task Status!`);
    };


    return (
        <div 
            onClick={handleCardClick} 
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 cursor-pointer"
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                    {ticket.title}
                </h3>
                <span 
                    className={`ml-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${getStatusColor(ticket.status)}`}
                >
                    {ticket.status}
                </span>
            </div>

            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {ticket.description}
            </p>

            <div className="flex justify-between items-center text-xs">
                
                <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-600">
                        #{ticket.id.split('-')[1]}
                    </span>
                    <span className={`uppercase text-xs ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority} PRIORITY
                    </span>
                </div>

                <div className="flex items-center space-x-4 text-gray-500">
                    <span className="flex items-center">
                        <FaUser className="mr-1 text-gray-400" />
                        {ticket.customer.split(' ')[0]} 
                    </span>
                    <span className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-400" />
                        {ticket.createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;