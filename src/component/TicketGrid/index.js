// src/components/TicketGrid.js
import React from 'react';
// import TicketCard from './TicketCard';
import './TicketGrid.css';
import TicketCard from '../TicketCard';

const TicketGrid = () => {
  const tickets = [
    {
      name: 'RAJSHREE 500 MONTHLY LOTTERY',
      time: '06:30 PM 08-10-2024',
      price: 500,
      image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
    },
    {
      name: 'GOLDEN 100 GOLD MONTHLY LOTTERY',
      time: '06:30 PM 03-10-2024',
      price: 100,
      image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
    },
    {
      name: 'MAHARASHTRA GANESHLAXMI DASARA SPECIAL MONTHLY LOTTERY',
      time: '04:00 PM 12-10-2024',
      price: 100,
      image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
    },
    {
        name: 'RAJSHREE 500 MONTHLY LOTTERY',
        time: '06:30 PM 08-10-2024',
        price: 500,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'GOLDEN 100 GOLD MONTHLY LOTTERY',
        time: '06:30 PM 03-10-2024',
        price: 100,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'MAHARASHTRA GANESHLAXMI DASARA SPECIAL MONTHLY LOTTERY',
        time: '04:00 PM 12-10-2024',
        price: 100,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'RAJSHREE 500 MONTHLY LOTTERY',
        time: '06:30 PM 08-10-2024',
        price: 500,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'GOLDEN 100 GOLD MONTHLY LOTTERY',
        time: '06:30 PM 03-10-2024',
        price: 100,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'MAHARASHTRA GANESHLAXMI DASARA SPECIAL MONTHLY LOTTERY',
        time: '04:00 PM 12-10-2024',
        price: 100,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'RAJSHREE 500 MONTHLY LOTTERY',
        time: '06:30 PM 08-10-2024',
        price: 500,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'GOLDEN 100 GOLD MONTHLY LOTTERY',
        time: '06:30 PM 03-10-2024',
        price: 100,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
      {
        name: 'MAHARASHTRA GANESHLAXMI DASARA SPECIAL MONTHLY LOTTERY',
        time: '04:00 PM 12-10-2024',
        price: 100,
        image: 'https://www.buystatelottery.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-22-at-8.23.28-PM-300x269.jpg', // Replace with actual image path
      },
  ];

  return (
    <div className="ticket-grid">
      <h2 className="grid-title">Big Prize Tickets</h2>
      <p className="grid-subtitle">Win Big Prizes</p>
      <div className="grid">
        {tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketGrid;