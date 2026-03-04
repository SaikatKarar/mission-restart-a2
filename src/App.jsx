import React, { useState } from 'react'
import Navbar from './component/Navbar'
import TicketStatsBanner from './component/TicketStatsBanner'
import Footer from './component/Footer'
import TicketList from './component/TicketList'
import ticketsData from "./data/tickets";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [resolved, setResolved] = useState([]);


  return (
    <>
      <Navbar />
      <main className="bg-gray-100 py-10 md:px-10">

        <TicketStatsBanner
          inProgress={tickets.filter(t => t.status === "In-Progress").length}
          resolved={resolved.length}
        />

        <TicketList
          tickets={tickets}
          setTickets={setTickets}
          resolved={resolved}
          setResolved={setResolved}
        />
      </main>
      <Footer />
    </>
  )
}

export default App