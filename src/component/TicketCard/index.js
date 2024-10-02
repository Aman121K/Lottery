import React, { useState } from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
    // State to handle the modal
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to open modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBuyClick = () => {
        const message = `I am interested to buy ${encodeURIComponent(ticket.name)}. Please send me more details!`;
        const whatsappLink = `https://wa.me/919781256044?text=${message}`;
        window.open(whatsappLink, '_blank');
    };

    // Function to close modal if clicking outside the image
    const handleModalClick = (e) => {
        // Close the modal only if the click is on the modal background (not on the image)
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <>
            <div className="ticket-card">
                {/* Image click will open the modal */}
                <img 
                    src={ticket.image} 
                    alt={ticket.name} 
                    className="ticket-image" 
                    onClick={openModal} // Trigger modal on click
                />
                <div className="ticket-info">
                    <h3 className="ticket-name">{ticket.name}</h3>
                    <p>{ticket.time}</p>
                    <p className="ticket-price">₹{ticket.price}</p>
                    <button className="buy-ticket-button" onClick={handleBuyClick}>
                        Buy This Ticket
                    </button>
                </div>
            </div>

            {/* Modal for full-screen image */}
            {isModalOpen && (
                <div className="modal" onClick={handleModalClick}>
                    <span className="close-modal" onClick={closeModal}>
                        &times;
                    </span>
                    <img src={ticket.image} alt={ticket.name} className="modal-image" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
};

export default TicketCard;