import React from 'react'
import Navbar from './component/Navbar'
import TicketStatsBanner from './component/TicketStatsBanner'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 py-10 px-10">
        <TicketStatsBanner inProgress={5} resolved={12} />
      </main>
      <Footer />
    </>
  )
}

export default App