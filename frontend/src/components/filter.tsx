import React from 'react';
import '../styles/_filter.sass'

// Définition du type pour les props
interface FilterButtonsProps {
  onFilter: (dynasty: string) => void;  // Typage explicite de la fonction
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilter }) => {
  return (
    <div className='button'>
      <button onClick={() => onFilter('Mérovingiens')}>Mérovingiens</button>
      <button onClick={() => onFilter('Carolingiens')}>Carolingiens</button>
      <button onClick={() => onFilter('Capétiens')}>Capétiens</button> 
      <button onClick={() => onFilter('Valois')}>Valois</button> 
      <button onClick={() => onFilter('Bourbons')}>Bourbons</button> 
    </div>
  );
};

export default FilterButtons;
