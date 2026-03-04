import { useState } from "react";
import ticketsData from "../data/tickets";
import TicketCard from "./TicketCard";

export default function TicketList() {
    const [tickets, setTickets] = useState(ticketsData);

    const handleSelect = (ticket) => {
        console.log("Selected:", ticket);
        // Later we will move this to Task Status
    };

    return (
        <section className="max-w-7xl mx-auto px-6 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
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

                {/* Right Side */}
                <div className="bg-gray-50 rounded-lg p-5">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        Task Status
                    </h2>
                    <p className="text-lg text-gray-500 mt-2">
                        Select a ticket to add to Task Status
                    </p>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-gray-700">
                            Resolved Task
                        </h3>
                        <p className="text-lg text-gray-400 mt-2">
                            No resolved tasks yet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}