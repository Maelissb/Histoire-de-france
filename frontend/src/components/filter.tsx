import React from 'react';
import '../styles/_filter.sass';

// Définition du type pour les props
interface FilterButtonsProps {
  onDynastyFilter: (dynasty: string) => void; // Fonction pour filtrer par dynastie
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onDynastyFilter }) => {
  return (
    <div className='button'>
      <button onClick={() => onDynastyFilter('Mérovingiens')}>Mérovingiens</button>
      <button onClick={() => onDynastyFilter('Carolingiens')}>Carolingiens</button>
      <button onClick={() => onDynastyFilter('Capétiens')}>Capétiens</button>
      <button onClick={() => onDynastyFilter('Valois')}>Valois</button>
      <button onClick={() => onDynastyFilter('Bourbons')}>Bourbons</button>
    </div>
  );
};

export default FilterButtons;
