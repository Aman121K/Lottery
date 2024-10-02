import React from 'react';
import './TicketCard.css'; // Create a CSS file for styles

const TicketCard = ({ ticket }) => {
  // Function to handle WhatsApp message opening
  const handleBuyClick = () => {
    const message = `I am interested to buy ${encodeURIComponent(ticket.name)}. Please send me more details!`;
    const whatsappLink = `https://wa.me/919781256044?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="ticket-card">
      <img src={ticket.image} alt={ticket.name} className="ticket-image" />
      <div className="ticket-info">
        <h3 className="ticket-name">{ticket.name}</h3>
        <p>{ticket.time}</p>
        <p className="ticket-price">₹{ticket.price}</p>
        <button className="buy-ticket-button" onClick={handleBuyClick}>
          Buy This Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketCard;