import React, { useState } from 'react';
import Card from './cards';
import FilterButtons from '../filter'; 
import '../../styles/_rois.sass'

const Rois: React.FC = () => {
  const [selectedDynasty, setSelectedDynasty] = useState<string>('');
  
  // Définition des cartes
  const cards = [
    {
      Image: 'https://www.histoiredefrance.net/wp-content/uploads/2020/03/Clovis-1.jpg',
      name: 'Clovis Ier',
      dynasty: "Mérovingiens",
      birthDate: '27 février 466 à Tournai',
      deathDate: '511 à Paris',
      description: 'Clovis Ier est le premier roi des Francs à unifier une grande partie de la Gaule. Il est connu pour avoir adopté le christianisme...',
    },
    {
      Image: 'https://idata.over-blog.com/4/31/14/06/childebert_I.gif',
      name: 'Clodomir Ier',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 495, à Soissons.',
      deathDate: 'Clodomir Ier est décédé le 24 juin 524, lors de la bataille de Vézeronce...',
      description: 'Fils aîné de Clovis Ier, Clodomir a régné sur une partie du royaume des Francs...',
    },
    {
      Image: 'https://fr.muzeo.com/sites/default/files/styles/image_basse_def/public/oeuvres/peinture/classique/childebert_ier_roi_de_francs_66899.jpg?itok=TYaiqsGO',
      name: 'Childebert Ier',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 496, probablement à Reims.',
      deathDate: 'Le 13 décembre 558, à Paris',
      description: 'Fils de Clovis Ier et de Clotilde, Childebert Ier a régné sur le royaume des Francs...',
    },
    {
      Image: 'https://www.worldhistory.org/img/r/p/1500x1500/17068.jpg',
      name: 'Clotaire Ier',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 497, à Soissons.',
      deathDate: '29 novembre 561 à Compiègne',
      description: "Clotaire Ier était l'un des fils de Clovis Ier et de Clotilde. À la mort de son père en 511, le royaume des Francs fut partagé entre ses quatre fils. Clotaire reçut Soissons et travailla tout au long de sa vie à étendre son territoire. Il participa à de nombreuses guerres pour réunifier le royaume, notamment contre les Burgondes et les Thuringiens. À la fin de son règne, il réussit à réunifier temporairement l'ensemble du royaume franc sous son autorité. Clotaire Ier est connu pour sa politique expansionniste et son rôle dans l'établissement de la dynastie mérovingienne.",
    },
    {
      Image: 'https://www.worldhistory.org/img/r/p/1500x1500/17068.jpg',
      name: 'Clotaire Ier',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 496, probablement à Reims.',
      deathDate: 'Le 13 décembre 558, à Paris',
      description: 'Fils de Clovis Ier et de Clotilde, Childebert Ier a régné sur le royaume des Francs...',
    },
    





  ];

  // Filtrage des rois selon la dynastie sélectionnée
  const filteredRois = selectedDynasty
    ? cards.filter((card) => card.dynasty === selectedDynasty)
    : cards;

  // Fonction pour gérer le changement de filtre
  const handleFilter = (dynasty: string) => {
    setSelectedDynasty(dynasty);
  };

  return (
    <div className="container-rois">
      <div className="filter-container">
        <FilterButtons onFilter={handleFilter} />
      </div>
      <div className='rois'>
      {filteredRois.map((card, index) => (
        <Card
          key={index}
          image={card.Image}
          name={card.name}
          birthDate={card.birthDate}
          deathDate={card.deathDate}
          description={card.description}
        />
      ))}
      </div>
    </div>
  );
};

export default Rois;
