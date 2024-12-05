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
      name: 'Clovis Ier (481–511)',
      dynasty: "Mérovingiens",
      birthDate: '27 février 466 à Tournai, Royaume des Francs.',
      deathDate: '511 à Paris, Royaume des Francs.',
      description: 'Clovis Ier est le premier roi des Francs à unifier une grande partie de la Gaule. Il est connu pour avoir adopté le christianisme...',
    },
    {
      Image: 'https://idata.over-blog.com/4/31/14/06/childebert_I.gif',
      name: 'Clodomir Ier (511 - 524)',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 495, à Soissons, Royaume des Francs.',
      deathDate: '25 juin 524, Bataille de Vézeronce, Royaume des Burgondes',
      description: 'Fils aîné de Clovis Ier, Clodomir a régné sur une partie du royaume des Francs...',
    },
    {
      Image: 'https://fr.muzeo.com/sites/default/files/styles/image_basse_def/public/oeuvres/peinture/classique/childebert_ier_roi_de_francs_66899.jpg?itok=TYaiqsGO',
      name: 'Childebert Ier (511 - 558)',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 496, probablement à Reims, Royaume des Francs..',
      deathDate: 'Le 13 décembre 558, à Paris, Royaume des Francs',
      description: 'Fils de Clovis Ier et de Clotilde, Childebert Ier a régné sur le royaume des Francs...',
    },
    {
      Image: 'https://www.worldhistory.org/img/r/p/1500x1500/17068.jpg',
      name: 'Clotaire Ier (511 - 561)',
      dynasty: "Mérovingiens",
      birthDate: 'Vers 497, à Soissons, Royaume des Francs.',
      deathDate: '29 novembre 561 à Compiègne, Royaume des Francs',
      description: "Clotaire Ier était l'un des fils de Clovis Ier et de Clotilde. À la mort de son père en 511, le royaume des Francs fut partagé entre ses quatre fils. Clotaire reçut Soissons et travailla tout au long de sa vie à étendre son territoire. Il participa à de nombreuses guerres pour réunifier le royaume, notamment contre les Burgondes et les Thuringiens. À la fin de son règne, il réussit à réunifier temporairement l'ensemble du royaume franc sous son autorité. Clotaire Ier est connu pour sa politique expansionniste et son rôle dans l'établissement de la dynastie mérovingienne.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jean-Joseph_Dassy_%281796-1865%29_-_Caribert%2C_roi_franc_de_Paris_et_de_l%27ouest_de_Gaule_%28mort_en_567%29.jpg/250px-Jean-Joseph_Dassy_%281796-1865%29_-_Caribert%2C_roi_franc_de_Paris_et_de_l%27ouest_de_Gaule_%28mort_en_567%29.jpg',
      name: 'Caribert Ier (561 - 567)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 520, à  Paris, Royaume des Francs.',
      deathDate: 'décembre 567 à Paris, Royaume des Francs.',
      description: "Caribert Ier, roi mérovingien de Paris, est connu pour son règne marqué par des tensions religieuses et des scandales personnels, notamment ses multiples mariages controversés. Fils de Clotaire Ier, il hérita de Paris lors du partage du royaume. Son règne fut bref, et il laissa derrière lui un royaume divisé entre ses frères.",
    },
    {
      Image: 'https://gw.geneanet.org/public/img/media/deposits/83/3d/2744081/medium.jpg?t=1449276915',
      name: 'Sigebert Ier (561 - 575)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 535 à Reims, Royaume des Francs.',
      deathDate: 'vers 575 à Vitry-en-Artois (actuellement en France).',
      description: "Sigebert Ier, roi mérovingien d'Austrasie, est connu pour son mariage avec Brunehaut, une princesse wisigothique, et pour sa rivalité avec son frère Chilpéric Ier. Il fut assassiné en 575 dans le cadre de luttes de pouvoir fratricides, caractérisant les divisions politiques de l'époque mérovingienne.",
    },
    {
      Image: 'https://www.worldhistory.org/img/r/p/1500x1500/17078.jpg',
      name: 'Chilpéric Ier',
      dynasty: "Mérovingiens",
      birthDate: 'vers 539 à Soissons, Royaume des Francs.',
      deathDate: 'septembre 584 à Chelles, Royaume des Francs.',
      description: "Chilpéric Ier, roi mérovingien de Neustrie, est souvent surnommé le Néron des Francs en raison de sa réputation de cruauté. Marié à Frédégonde, il fut impliqué dans une guerre de succession acharnée contre son frère Sigebert Ier. Son règne est marqué par des intrigues politiques et des tensions religieuses. Il fut assassiné en 584 dans des circonstances mystérieuses.",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/childebert-ii.jpg?fx=r_1200_800',
      name: 'Childebert II (575 - 595)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 570 à Metz, Royaume des Francs.',
      deathDate: 'vers 595 à Reims, Royaume des Francs',
      description: "Childebert II, roi mérovingien d'Austrasie et de Bourgogne, succéda à son père Sigebert Ier. Son règne fut marqué par des tensions avec ses voisins, notamment les rois de Neustrie et de Provence. Bien qu'il ait maintenu une certaine stabilité dans son royaume, il dut faire face à de nombreuses luttes internes pour assurer son pouvoir. À sa mort, ses territoires furent partagés entre ses enfants.",
    },
    {
      Image: 'https://www.worldhistory.org/img/r/p/1500x1500/17124.jpg',
      name: 'Clotaire II (584 - 629)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 584 à Metz, Royaume des Francs',
      deathDate: 'vers 629 à Compiègne, Royaume des Francs',
      description: "Clotaire II, roi mérovingien de Neustrie puis roi des Francs unifiés, est connu pour avoir réussi à réunifier le royaume des Francs après une période de division. Son règne marqua un retour à une certaine stabilité politique et une centralisation du pouvoir royal. Clotaire II est également reconnu pour avoir renforcé l'autorité du roi face aux aristocrates et pour avoir établi les premiers fondements du pouvoir royal en France.",
    },
    {
      Image: 'https://www.worldhistory.org/uploads/images/17138.jpg',
      name: 'Dagobert Ier (629 - 639)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 603 à Metz, Royaume des Francs',
      deathDate: '19 janvier 639 à Épinay-sur-Seine, Royaume des Francs',
      description: "Dagobert Ier, roi mérovingien des Francs, est souvent considéré comme le dernier grand roi de sa dynastie. Son règne est marqué par une consolidation du pouvoir royal et des réformes administratives. Connu pour sa richesse et sa piété, il fonda la basilique de Saint-Denis, où il fut enterré. Son règne fut également caractérisé par des relations diplomatiques avec d'autres royaumes et une prospérité économique.",
    },
    {
      Image: 'https://www.histoireeurope.fr/ImgC/Clovis%20II_2.PNG',
      name: 'Clovis II (639 - 657)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 657, Royaume des Francs',
      deathDate: '19 janvier 639 à Compiègne, Royaume des Francs',
      description: "Clovis II, roi mérovingien de Neustrie et de Bourgogne, est connu pour avoir régné durant une période où le pouvoir royal était largement contrôlé par les maires du palais. Marié à Sainte Bathilde, il est associé à plusieurs réformes sociales, notamment l'interdiction de l'esclavage des chrétiens. Son règne est marqué par une relative stabilité, bien que l'influence des aristocrates ait continué à croître.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Signol_-_Childeric_II.jpg',
      name: 'Childeric II (657 - 673)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 653, Royaume des Francs',
      deathDate: 'vers 675 à Compiègne, Forêt de Livry (actuellement Livry-sur-Seine, France)',
      description: "Childeric II, roi mérovingien d'Austrasie puis roi des Francs unifiés, tenta de renforcer l'autorité royale face aux aristocrates et aux maires du palais. Son règne fut marqué par des réformes judiciaires visant à limiter les abus des nobles. Toutefois, son autoritarisme suscita des oppositions, et il fut assassiné avec son épouse, la reine Bilichilde, en 675 lors d'un complot aristocratique.",
    },
    {
      Image: 'https://cdn.britannica.com/88/19088-004-C49BA2AE/Theodoric-III-illustration.jpg',
      name: 'Theuderic III (673 - 691)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 654, Royaume des Francs',
      deathDate: 'vers 691, Royaume des Francs)',
      description: "Theuderic III, roi mérovingien de Neustrie, de Bourgogne, et plus tard roi des Francs unifiés, régna durant une période où le pouvoir était fortement dominé par les maires du palais, notamment Ébroïn et Pépin de Herstal. Souvent qualifié de roi fainéant, son règne marqua un affaiblissement du pouvoir royal mérovingien, prélude à la montée en puissance des Carolingiens.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Georges_Rouget_%281783-1869%29_-_Clovis_III_roi_d%27Austrasie_en_691_%28682-695%29.jpg',
      name: 'Clovis III (691 - 695)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 677, Royaume des Francs',
      deathDate: 'vers 695 Royaume des Francs',
      description: "Clovis III, roi mérovingien de Neustrie et de Bourgogne, fut un jeune souverain dont le règne était principalement contrôlé par les maires du palais. Son règne s'inscrit dans une période de déclin de l'autorité royale mérovingienne, avec une montée progressive de l'influence des Carolingiens, qui dominaient la gestion des affaires du royaume.",
    },
    {
      Image: 'https://c8.alamy.com/compfr/fwp73c/childebert-iii-appele-le-juste-670-et-683-711-roi-merovingien-des-francs-fwp73c.jpg',
      name: 'Childebert III (695 - 711)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 683, Royaume des Francs',
      deathDate: 'vers 711 Royaume des Francs',
      description: "Childebert III, surnommé Childebert le Juste, fut roi mérovingien de Neustrie et de Bourgogne. Bien que son règne fût officiellement long, il exerça peu d'autorité réelle, le pouvoir étant entre les mains des maires du palais, notamment Pépin de Herstal. Son règne est caractéristique de l'ère des rois fainéants, où les souverains mérovingiens jouaient un rôle symbolique tandis que les Carolingiens renforçaient leur influence.",
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntiL3AulFHXbKvohgVCXJ55RaFdokwHLF2g&s',
      name: 'Dagobert III (711 - 715)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 699, Royaume des Francs',
      deathDate: 'vers 715 Royaume des Francs',
      description: "Dagobert III, roi mérovingien de Neustrie et de Bourgogne, régna durant une période de troubles politiques et militaires. Comme ses prédécesseurs, son règne fut marqué par une faible autorité royale, avec le véritable pouvoir exercé par le maire du palais, Pépin de Herstal. Son court règne s’inscrit dans le déclin progressif de la dynastie mérovingienne face à la montée en puissance des Carolingiens.",
    },
    {
      Image: 'https://collections.louvre.fr/media/cache/intermediate/0000000021/0000061376/0001181764_OG.JPG',
      name: 'Clotaire IV (717 - 718)',
      dynasty: "Mérovingiens",
      birthDate: 'inconnue Royaume des Francs',
      deathDate: 'vers 718 Royaume des Francs',
      description: "Clotaire IV fut proclamé roi mérovingien d'Austrasie par le maire du palais, Charles Martel, pendant une période de guerre civile. Son règne fut bref et largement symbolique, servant les intérêts de Charles Martel dans sa lutte contre la Neustrie. Clotaire IV est l'un des nombreux rois fainéants de la dynastie mérovingienne, jouant un rôle limité dans l'administration du royaume.",
    },
    {
      Image: 'https://www.histoireeurope.fr/ImgT/Thierry%20IV_2.PNG',
      name: 'Thierry IV (721 - 737)',
      dynasty: "Mérovingiens",
      birthDate: 'inconnue Royaume des Francs',
      deathDate: 'vers 737 Royaume des Francs',
      description: "Thierry IV fut un roi mérovingien d'Austrasie, qui régna sous la tutelle des maires du palais, principalement Charles Martel. Son règne, comme celui de ses prédécesseurs, fut marqué par une faible autorité royale, le véritable pouvoir étant détenu par les maires du palais. Thierry IV fut l'un des derniers rois de la dynastie mérovingienne avant la montée en puissance des Carolingiens, notamment avec Charles Martel, qui centralisa progressivement le pouvoir.",
    },
    {
      Image: 'https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.JLJ.43975640.7055475/4654755.jpg?old-wm',
      name: 'Childeric III (743 - 751)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 720 Royaume des Francs',
      deathDate: 'vers 755 à Metz, Royaume des Francs',
      description: "Thierry IV fut un roi mérovingien d'Austrasie, qui régna sous la tutelle des maires du palais, principalement Charles Martel. Son règne, comme celui de ses prédécesseurs, fut marqué par une faible autorité royale, le véritable pouvoir étant détenu par les maires du palais. Thierry IV fut l'un des derniers rois de la dynastie mérovingienne avant la montée en puissance des Carolingiens, notamment avec Charles Martel, qui centralisa progressivement le pouvoir.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Amiel_-_Pepin_the_Short.jpg/220px-Amiel_-_Pepin_the_Short.jpg',
      name: 'Pepin le Bref (751 - 768)',
      dynasty: "Carolingiens",
      birthDate: 'vers 715 à Jupille, Royaume des Francs',
      deathDate: '24 septembre 768 à Saint-Denis, Royaume des Francs',
      description: "Pépin le Bref, fils de Charles Martel, est le premier roi carolingien des Francs, ayant déposé le dernier roi mérovingien, Childeric III, en 751. Son règne est marqué par des réformes administratives et religieuses importantes, ainsi que par des victoires militaires, notamment contre les Lombards en Italie, ce qui renforça la position du pape. Pépin établit les bases de la dynastie carolingienne, qui culminera avec le règne de son fils, Charlemagne. Sa politique de soutien à l'Église et ses victoires militaires consolidèrent l'autorité royale et lancèrent un nouvel élan pour le royaume des Francs.",
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
