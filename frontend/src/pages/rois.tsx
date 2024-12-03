import React from 'react';
import Card from '../components/cards/cards';
import '../styles/_rois.sass'

const Rois: React.FC = () => {
  const cards = [
    {
      Image:'https://www.histoiredefrance.net/wp-content/uploads/2020/03/Clovis-1.jpg',
      name: 'Clovis Ier',
      birthDate: '27 février 466 à Tournai  ',
      deathDate: '511  à Paris',
      description: 'Clovis Ier est le premier roi des Francs à unifier une grande partie de la Gaule. Il est connu pour avoir adopté le christianisme, unifiant ainsi le royaume des Francs sous la foi catholique. Il est souvent considéré comme le fondateur de la dynastie des Mérovingiens.',
    },
    {
      Image:'https://idata.over-blog.com/4/31/14/06/childebert_I.gif',
      name: 'Clodomir Ier',
      birthDate: 'Vers 495, à Soissons.',
      deathDate: 'Clodomir Ier est décédé le 24 juin 524, lors de la bataille de Vézeronce, dans la région de lactuelle Isère, en France.',
      description: 'Fils aîné de Clovis Ier, Clodomir a régné sur une partie du royaume des Francs. Il est mort jeune à 29 ans lors de la bataille de Vézeronce, tué par les Burgondes.',
    },
    {
      Image: 'https://fr.muzeo.com/sites/default/files/styles/image_basse_def/public/oeuvres/peinture/classique/childebert_ier_roi_de_francs_66899.jpg?itok=TYaiqsGO',
      name: 'Childebert Ier',
      birthDate: 'Vers 496, probablement à Reims.',
      deathDate: 'Le 13 décembre 558, à Paris',
      description: 'Fils de Clovis Ier et de Clotilde, Childebert Ier a régné sur le royaume des Francs de 511 à sa mort. Il a mené plusieurs campagnes militaires, notamment contre les Wisigoths et les Burgondes.',
    },
    {
      Image: 'https://fr.muzeo.com/sites/default/files/styles/image_basse_def/public/oeuvres/peinture/classique/childebert_ier_roi_de_francs_66899.jpg?itok=TYaiqsGO',
      name: 'Childebert Ier',
      birthDate: 'Vers 496, probablement à Reims.',
      deathDate: 'Le 13 décembre 558, à Paris',
      description: 'Fils de Clovis Ier et de Clotilde, Childebert Ier a régné sur le royaume des Francs de 511 à sa mort. Il a mené plusieurs campagnes militaires, notamment contre les Wisigoths et les Burgondes.',
    },
  ];

  return (
    <div className="rois">
      {cards.map((card, index) => (
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
  );
};

export default Rois;
