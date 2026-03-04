import TicketCard from "./TicketCard";
import { toast } from "react-toastify";

export default function TicketList({
    tickets,
    setTickets,
    resolved,
    setResolved,
}) {

    const handleSelect = (ticket) => {
        if (ticket.status === "In-Progress") {
            toast.warning("Already In-Progress");
            return;
        }
        const updatedTickets = tickets.map((t) =>
            t.id === ticket.id
                ? { ...t, status: "In-Progress" }
                : t
        );
        setTickets(updatedTickets);
        toast.success("Moved to In-Progress");
    };

    const handleComplete = (ticket) => {
        const updatedTickets = tickets.filter(
            (t) => t.id !== ticket.id
        );
        setTickets(updatedTickets);
        setResolved([...resolved, ticket]);
        toast.success("Ticket Completed");
    };


    const inProgressTasks = tickets.filter(
        (ticket) => ticket.status === "In-Progress"
    );

    return (
        <section className="max-w-7xl mx-auto px-6 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2">
                    <h2 className="text-lg font-semibold mb-4">
                        Customer Tickets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tickets.map((ticket) => (
                            <TicketCard
                                key={ticket.id}
                                ticket={ticket}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                    <h2 className="text-lg font-semibold">
                        Task Status
                    </h2>

                    {inProgressTasks.length === 0 ? (
                        <p className="text-sm text-gray-500 mt-3">
                            No tasks in progress
                        </p>
                    ) : (
                        <div className="mt-4 space-y-4">
                            {inProgressTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                        {task.title}
                                    </h3>

                                    <button
                                        onClick={() => handleComplete(task)}
                                        className="w-full bg-green-600 hover:bg-green-700 transition text-white font-medium py-3 rounded-lg"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-6">
                        <h3 className="font-semibold">
                            Resolved Task
                        </h3>

                        {resolved.length === 0 ? (
                            <p className="text-sm text-gray-400 mt-2">
                                No resolved tasks yet.
                            </p>
                        ) : (
                            <div className="mt-4 space-y-3">
                                {resolved.map((task) => (
                                    <div
                                        key={task.id}
                                        className="bg-indigo-100 text-gray-800 p-4 rounded-lg shadow-sm"
                                    >
                                        {task.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}