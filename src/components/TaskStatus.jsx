import React from 'react';
import toast from 'react-hot-toast'; 
import { FaCheckCircle } from 'react-icons/fa'; 

const TaskStatus = ({
    inProgressTasks,
    setInProgressTasks,
    resolvedTasks,
    setResolvedTasks,
    setAllTickets 
}) => {

    const handleComplete = (taskId) => {
        const completedTask = inProgressTasks.find(task => task.id === taskId);
        if (!completedTask) return; 

        setInProgressTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

        setResolvedTasks(prevTasks => [...prevTasks, completedTask]);
            
        setAllTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== taskId));

        toast.success(`Ticket #${completedTask.id.split('-')[1]} RESOLVED!`);
    };
    

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Status</h2>
            
            {inProgressTasks.length === 0 ? (
                <p className="text-sm text-gray-500 mb-6">Select a ticket to add to Task Status</p>
            ) : (
                <div className="space-y-4 mb-8">
                    {inProgressTasks.map((task) => (
                        <div key={task.id} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                            <p className="text-sm font-medium text-gray-700 mb-2 leading-tight">{task.title}</p>
                            
                            <button
                                onClick={() => handleComplete(task.id)}
                                className="w-full px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition duration-200"
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>
            )}
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Resolved Task</h2>

            {resolvedTasks.length === 0 ? (
                <p className="text-sm text-gray-500">No resolved tasks yet.</p>
            ) : (
                <div className="space-y-3">
                    {resolvedTasks.map((task) => (
                        <div key={task.id} className="p-3 bg-blue-100 rounded-lg flex items-center shadow-sm">
                             <FaCheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
                             <span className="text-sm text-gray-700 line-clamp-1">{task.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskStatus;