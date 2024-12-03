import React from 'react'
import '../../styles/_cards.sass'

interface CardProps {
  image: string | undefined;
  name: string;
  birthDate: string;
  deathDate: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, name, birthDate, deathDate, description }) => {
  return (
    <div className="card">
      <div><img src={image} alt={name} className="card-image" /></div>
      <div>
        <h2>{name}</h2>
        <p><strong>Date de naissance:</strong> {birthDate}</p>
        <p><strong>Date de décès:</strong> {deathDate}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
};


export default Card;
