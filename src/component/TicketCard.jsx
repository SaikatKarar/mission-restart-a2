import { FaCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function TicketCard({ ticket, onSelect }) {
    const { id, title, description, customer, priority, status, createdAt } =
        ticket;

    const cleanPriority = priority.replace(" PRIORITY", "").toUpperCase();

    const isOpen = status.toLowerCase() === "open";

    return (
        <div
            onClick={() => onSelect(ticket)}
            className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition"
        >
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800 text-lg">
                    {title}
                </h3>

                <span
                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full font-medium
            ${isOpen
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                >
                    <FaCircle className="text-base" />
                    {status}
                </span>
            </div>

            <p className="text-base text-gray-500 mt-2 line-clamp-2">
                {description}
            </p>

            <div className="flex justify-between items-center mt-4 text-[14px] text-gray-500 flex-wrap gap-2">
                <span>#{id}</span>

                <span
                    className={`font-medium
            ${cleanPriority === "HIGH"
                            ? "text-red-500"
                            : cleanPriority === "MEDIUM"
                                ? "text-yellow-500"
                                : "text-green-500"
                        }`}
                >
                    {priority}
                </span>

                <span>{customer}</span>

                <span className="flex items-center gap-1">
                    <MdDateRange />
                    {createdAt}
                </span>
            </div>
        </div>
    );
}