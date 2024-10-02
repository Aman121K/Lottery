import React from 'react';
import './TicketCard.css'; // Create a CSS file for styles

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <img src={ticket.image} alt={ticket.name} className="ticket-image" />
      <div className="ticket-info">
        <h3 className="ticket-name">{ticket.name}</h3> {/* Apply the class here */}
        <p>{ticket.time}</p>
        <p className="ticket-price">₹{ticket.price}</p>
        <button className="buy-ticket-button">Buy This Ticket</button>
      </div>
    </div>
  );
};

export default TicketCard;