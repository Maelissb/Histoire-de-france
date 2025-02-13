import React, { useState } from 'react';
import Card from './cards';
import FilterButtons from '../filter'; 
import '../../styles/_rois.sass'

const Rois: React.FC = () => {
  const [selectedDynasty, setSelectedDynasty] = useState<string>('');
  
  // Définition des cartes
  const cards = [
    {
      Image: 'https://c8.alamy.com/compfr/fwp6td/childeric-i-ou-childericus-childerich-c-440-481-482-un-roi-merovingien-des-francs-saliens-fwp6td.jpg',
      name: 'Childéric Ier (457 - 481)',
      dynasty: "Mérovingiens",
      birthDate: 'vers 437',
      deathDate: 'vers 481',
      description: 'Père de Clovis Ier, il est le premier roi des Francs saliens. Son règne marque le début de la dynastie mérovingienne..',
    },
    {
      Image: 'https://www.histoiredefrance.net/wp-content/uploads/2020/03/Clovis-1.jpg',
      name: 'Clovis Ier (481 – 511)',
      dynasty: "Mérovingiens",
      birthDate: '27 février 466 à Tournai, Royaume des Francs.',
      deathDate: '511 à Paris, Royaume des Francs.',
      description: 'Clovis Ier est le premier roi des Francs à unifier une grande partie de la Gaule. Il est connu pour avoir adopté le christianisme...',
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbNYJQrdPa98mKaRp_LQi1NAHpkkISadyWQ&s',
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
      Image: 'https://fr.muzeo.com/sites/default/files/styles/image_basse_def/public/oeuvres/peinture/classique/clovis_ii_roi_daustrasie_de25796.jpg?itok=mOMQ0BRo',
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
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CyoB7EFTvMOttAGbUH7YkShR9Jf4EsBqhA&s',
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
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntiL3AulFHXbKvohgVCXJ55RaFdokwHLF2g&s',
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

    // ----Carolingiens-----
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Amiel_-_Pepin_the_Short.jpg/220px-Amiel_-_Pepin_the_Short.jpg',
      name: 'Pepin le Bref (751 - 768)',
      dynasty: "Carolingiens",
      birthDate: 'vers 715 à Jupille, Royaume des Francs',
      deathDate: '24 septembre 768 à Saint-Denis, Royaume des Francs',
      description: "Pépin le Bref, fils de Charles Martel, est le premier roi carolingien des Francs, ayant déposé le dernier roi mérovingien, Childeric III, en 751. Son règne est marqué par des réformes administratives et religieuses importantes, ainsi que par des victoires militaires, notamment contre les Lombards en Italie, ce qui renforça la position du pape. Pépin établit les bases de la dynastie carolingienne, qui culminera avec le règne de son fils, Charlemagne. Sa politique de soutien à l'Église et ses victoires militaires consolidèrent l'autorité royale et lancèrent un nouvel élan pour le royaume des Francs.",
    },
    {
      Image: 'https://histoire-image.org/sites/default/files/2021-11/charlemagne-empereur-occident.jpg',
      name: 'Charlemagne (768 - 814)',
      dynasty: "Carolingiens",
      birthDate: '2 avril 742',
      deathDate: '28 janvier 814',
      description: "Fils de Pépin le Bref, il agrandit considérablement le royaume franc, devient empereur d’Occident en 800 et instaure un système administratif et éducatif avancé.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Louis_le_Pieux.png/490px-Louis_le_Pieux.png',
      name: 'Louis le Pieux (814 - 840)',
      dynasty: "Carolingiens",
      birthDate: 'vers avril 778',
      deathDate: '20 juin 840',
      description: "Fils de Charlemagne, il tente de maintenir l’unité de l’empire mais doit faire face aux révoltes de ses fils, ce qui conduit au partage de l’empire entre eux en 843 (Traité de Verdun).",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/01-charles-ii-le-chauve.jpg?fx=r_1200_800',
      name: ' Charles II le Chauve (843 - 877)',
      dynasty: "Carolingiens",
      birthDate: '13 juin 823',
      deathDate: '6 octobre 877',
      description: "Fils de Louis le Pieux, il reçoit la Francie occidentale lors du partage de Verdun et devient roi de France. Il est aussi couronné empereur en 875.",
    },
    {
      Image: 'https://www.histoiredefrance.net/wp-content/uploads/2020/03/Louis-II-le-begue.jpg',
      name: ' Louis II le Bègue (877 - 879)',
      dynasty: "Carolingiens",
      birthDate: '1er novembre 846',
      deathDate: '10 avril 879',
      description: "Fils de Charles le Chauve, son règne est bref et marqué par des conflits avec les nobles et les Normands.",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/louis-iii-et-carloman-ii.jpg',
      name: 'Louis III (879 - 882) et Carloman II (879 - 884)',
      dynasty: "Carolingiens",
      birthDate: 'Louis III est né vers 863 et Carloman II vers 866',
      deathDate: 'Louis III est mort le 5 août 882 et Carloman II le 12 décembre 884 ',
      description: "Ils règnent conjointement après la mort de leur père, Louis II le Bègue. Louis III meurt accidentellement en 882, laissant Carloman seul au pouvoir.",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/00-charles-iii-le-gros.jpg',
      name: 'Charles III le Gros (884-888)',
      dynasty: "Carolingiens",
      birthDate: 'vers 839',
      deathDate: '13 janvier 888 ',
      description: "Empereur d’Occident et roi de Francie occidentale, il est déposé en 888 pour son incapacité à défendre le royaume contre les invasions normandes.",
    },
    {
      Image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSadcjN9Zfw94Q-VIK5U2HG64EToyKPhdveJW_ueF1gpy9yScpQkpZju5GwbN96dGN3KUQsD4dp1qlRP-yAsjM0qA',
      name: 'Eudes (888 - 898) - Capétien, mais interlude important',
      dynasty: "Carolingiens",
      birthDate: 'vers 852',
      deathDate: '3 janvier 898',
      description: "Bien qu’Eudes soit un roi capétien, il est élu roi après la déposition de Charles le Gros pour repousser les Normands.",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/00-charles-iii-le-simple.jpg',
      name: 'Charles III le Simple (898 - 922)',
      dynasty: "Carolingiens",
      birthDate: '17 septembre 879',
      deathDate: '7 octobre 929',
      description: "Fils de Louis II le Bègue, il récupère la couronne après Eudes. Il accorde la Normandie aux Vikings en 911 (Traité de Saint-Clair-sur-Epte).",
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUDuZwrFYqxRNVu8sCPXvp3kLCfqFti13Og&s',
      name: 'Robert Ier (922 - 923) - Capétien',
      dynasty: "Carolingiens",
      birthDate: 'né vers 860',
      deathDate: 'le 15 juin 923 à Soissons',
      description: "Roi capétien, il renverse Charles le Simple.",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/00-raoul-de-bourgogne.jpg',
      name: 'Raoul de Bourgogne (923 - 936) - Non carolingien',
      dynasty: "Carolingiens",
      birthDate: 'vers 890',
      deathDate: '936 à Auxerre',
      description: "Raoul n’est pas un carolingien, mais il règne après Robert Ier.",
    },
    {
      Image: 'https://www.histoiredefrance.net/wp-content/uploads/2020/03/Louis-IV-outremer-1.jpg',
      name: 'Louis IV d’Outremer (936 - 954)',
      dynasty: "Carolingiens",
      birthDate: '10 septembre 920',
      deathDate: '10 septembre 954',
      description: "Fils de Charles le Simple, il revient de son exil en Angleterre pour reprendre la couronne, mais il lutte contre les grands féodaux.",
    },
    {
      Image: 'https://cassius.e-monsite.com/medias/images/00-lothaire-1.jpg',
      name: 'Lothaire (954 - 986)',
      dynasty: "Carolingiens",
      birthDate: 'vers 941',
      deathDate: '2 mars 986',
      description: "Fils de Louis IV, il tente de restaurer l’autorité royale face aux ducs puissants, notamment Hugues Capet.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amiel_-_Louis_V_of_France.jpg/220px-Amiel_-_Louis_V_of_France.jpg',
      name: 'Louis V le Fainéant (986 - 987)',
      dynasty: "Carolingiens",
      birthDate: 'vers 967',
      deathDate: '21 mai 987',
      description: "Dernier roi carolingien, son règne est marqué par une perte d’autorité au profit d’Hugues Capet, qui fonde la dynastie capétienne.",
    },

    // -----Capetien--------------------------------------------
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hugues_capet.jpg/170px-Hugues_capet.jpg',
      name: 'Hugues Capet (987 - 996)',
      dynasty: "Capétiens",
      birthDate: 'vers 940',
      deathDate: '24 octobre 996',
      description: "Fondateur de la dynastie capétienne. Il établit la transmission héréditaire du pouvoir.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Blondel_-_Robert_II_of_France.jpg',
      name: 'Robert II le Pieux (996 - 1031)',
      dynasty: "Capétiens",
      birthDate: 'vers 972',
      deathDate: '20 juillet 1031',
      description: "Fils de Hugues Capet, il renforce l’autorité royale et est connu pour sa piété.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Blondel_-_Henry_I_of_France.jpg',
      name: 'Henri Ier (1031 - 1060)',
      dynasty: "Capétiens",
      birthDate: '4 mai 1008',
      deathDate: '4 août 1060',
      description: "Continue la consolidation du pouvoir royal face aux grands seigneurs.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Saint-%C3%88vre_-_Philip_I_of_France.jpg',
      name: 'Philippe Ier (1060 - 1108)',
      dynasty: "Capétiens",
      birthDate: '23 mai 1052',
      deathDate: '29 juillet 1108',
      description: "Règne long, marqué par la montée en puissance des ducs de Normandie.",
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-9HtuaekTEUoXg4iObm_M7EsFI2QG-r1ew&s',
      name: 'Louis VI le Gros (1108 - 1137)',
      dynasty: "Capétiens",
      birthDate: '1er décembre 1081',
      deathDate: '1er août 1137',
      description: "Renforce l’autorité royale et combat les seigneurs rebelles.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Decaisne_-_Louis_VII_of_France.jpg',
      name: 'Louis VII le Jeune (1137 - 1180)',
      dynasty: "Capétiens",
      birthDate: 'vers 1120',
      deathDate: '18 septembre 1180',
      description: "Participe à la deuxième croisade. Son mariage avec Aliénor d'Aquitaine influence l’histoire de l’Angleterre.",
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTologkAzu91pQMEZMcum3QoMsVOtmN7fE6HA&s',
      name: 'Philippe II Auguste (1180 - 1223)',
      dynasty: "Capétiens",
      birthDate: '21 août 1165',
      deathDate: '14 juillet 1223',
      description: "Premier roi à porter le titre de \"Roi de France\". Agrandit le territoire et bat les Anglais à Bouvines (1214).",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Lehmann_-_Louis_VIII_of_France.jpg',
      name: 'Louis VIII le Lion (1223 - 1226)',
      dynasty: "Capétiens, ",
      birthDate: '5 septembre 1187',
      deathDate: '8 novembre 1226',
      description: "Conquiert une partie du sud de la France contre les Cathares.",
    },
    {
      Image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Decreuse_-_Louis_IX_of_France.jpg',
      name: 'Louis IX (Saint Louis) (1226 - 1270)',
      dynasty: "Capétiens",
      birthDate: '25 avril 1214',
      deathDate: '25 août 1270	',
      description: "Canonisé après sa mort. Il mène deux croisades et instaure une justice royale forte.",
    },
    {
      Image: 'https://www.alex-bernardini.fr/histoire/images/philippe-III-le-Hardi_Vig.jpg',
      name: 'Philippe III le Hardi (1270 - 1285)',
      dynasty: "Capétiens",
      birthDate: '1er mai 1245',
      deathDate: '5 octobre 1285	',
      description: "Continue l’expansion du royaume et combat en Aragon..",
    },
    {
      Image: 'https://www.meisterdrucke.fr/kunstwerke/1260px/Anonymous_Anonymous_-_Portrait_of_Philip_IV_the_Bel_%281268_-_1314%29_King_of_France_Anonymous_painting_of_-_%28MeisterDrucke-1000188%29.jpg',
      name: 'Philippe IV le Bel (1285 - 1314)',
      dynasty: "Capétiens",
      birthDate: 'vers 1268',
      deathDate: '29 novembre 1314	',
      description: "Connu pour son affrontement avec le pape et la suppression des Templiers.",
    },
    {
      Image: 'https://www.herodote.net/_image/louis10-hutin.jpg',
      name: 'Louis X le Hutin (1314 - 1316)',
      dynasty: "Capétiens",
      birthDate: '4 octobre 1289',
      deathDate: '5 juin 1316	',
      description: "Son règne est marqué par des tensions internes. Mort prématurée sans héritier direct.",
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0nKPaGz0WRTKpiuuSCKrqPteoDlfFUY3Ag&s',
      name: 'Jean Ier le Posthume (1316)',
      dynasty: "Capétiens",
      birthDate: '15 novembre 1316',
      deathDate: '20 novembre 1316',
      description: "Roi dès sa naissance, il meurt après 5 jours de règne.",
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DTLsX4aFBXu7BUeZrO31WufKa1GHOl-GBw&s',
      name: 'Philippe V le Long (1316 - 1322)',
      dynasty: "Capétiens",
      birthDate: 'vers 1293',
      deathDate: '3 janvier 1322',
      description: "Fait adopter la loi salique pour empêcher les femmes de régner..",
    },
    {
      Image: 'https://templiers.org/assets/images/roi-france-charles-IV-400x500.png',
      name: 'Charles IV le Bel (1322 - 1328)',
      dynasty: "Capétiens",
      birthDate: 'vers 1294',
      deathDate: '1er février 1328',
      description: "Dernier roi capétien direct. Sa mort sans héritier déclenche la guerre de Cent Ans.",
    },

//-------Valois--------------
{
  Image: 'https://templiers.org/assets/images/roi-france-charles-IV-400x500.png',
  name: 'Philippe VI de Valois (1328 - 1350)',
  dynasty: "Valois",
  birthDate: 'vers 1293',
  deathDate: '22 août 1350',
  description: "Premier roi de la dynastie des Valois. Il hérite du trône après la mort de Charles IV le Bel. Son règne est marqué par le début de la guerre de Cent Ans contre l'Angleterre.",
},
{
  Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-ZRAIdQqwN7ljASMyrH6QYFJrZKYpnH-BA&s',
  name: 'Jean II le Bon (1350 - 1364)',
  dynasty: "Valois",
  birthDate: '16 avril 1319',
  deathDate: '8 avril 1364',
  description: "Capturé par les Anglais lors de la bataille de Poitiers (1356), il meurt en captivité.",
},
{
  Image: 'https://touslesroisdefrance.fr/wp-content/uploads/TLRDF-CHARLESV.jpg',
  name: 'Charles V le Sage (1364 - 1380)',
  dynasty: "Valois",
  birthDate: '21 janvier 1338',
  deathDate: '16 septembre 1380',
  description: "Consolide le pouvoir royal, met en place une administration efficace et mène des négociations avec l'Angleterre.",
},
{
  Image: 'https://toysondor.blog/wp-content/uploads/2017/03/charles-vi-tableau.jpg',
  name: 'Charles VI le Fou (1380 - 1422)',
  dynasty: "Valois",
  birthDate: '3 décembre 1368',
  deathDate: '21 octobre 1422',
  description: "Son règne est marqué par la folie de Charles VI, créant des divisions internes et des luttes de pouvoir.",
},
{
  Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPHcDEHVQiSaw3GNe-G_mUrzdQdEqgvSbDw&s',
  name: 'Charles VII le Victorieux (1422 - 1461)',
  dynasty: "Valois",
  birthDate: '22 février 1403',
  deathDate: '22 juillet 1461',
  description: "Reprend la guerre de Cent Ans en main après les désastres de la régence, il est soutenu par Jeanne d'Arc.",
},
{
  Image: 'https://www.alex-bernardini.fr/histoire/images/Louis-XI.jpg',
  name: 'Louis XI le Prudent (1461 - 1483)',
  dynasty: "Valois",
  birthDate: '3 juillet 1423',
  deathDate: '30 août 1483',
  description: "Instaurateur de l’absolutisme royal, il combat les grandes familles nobles pour renforcer le pouvoir royal.",
},
{
  Image: 'https://kamelott.fr/wp-content/uploads/2020/04/Charles_VIII_Roi_de_France_1483-1498.jpg',
  name: 'Charles VIII l \'Affable (1483 - 1498)',
  dynasty: "Valois",
  birthDate: '30 juin 1470	',
  deathDate: '7 avril 1498',
  description: "Connu pour sa tentative d'invasion de l'Italie, il meurt prématurément après un accident.",
},
{
  Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgWsGdwQiYEnir_ssBeZPEiht_uZQC44EaQ&s',
  name: 'Louis XII le Père du Peuple (1498 - 1515)',
  dynasty: "Valois",
  birthDate: '27 juin 1462	',
  deathDate: '1er janvier 1515',
  description: "Son règne marque la consolidation du pouvoir royal et une série de réformes.",
},
{
  Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGfWCnth1-OzO9iXo9w4qOwdJmSJv6lN03w&s',
  name: 'François Ier (1515 - 1547)',
  dynasty: "Valois",
  birthDate: '12 septembre 1494',
  deathDate: '31 mars 1547',
  description: "L'un des rois les plus célèbres de la Renaissance, il mène une guerre contre Charles-Quint et favorise les arts.",
},
{
  Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Henry_II_of_France..jpg/800px-Henry_II_of_France..jpg',
  name: 'Henri II (1547 - 1559)',
  dynasty: "Valois",
  birthDate: '31 mars 1519',
  deathDate: '10 juillet 1559',
  description: "Son règne est marqué par une guerre contre l'Espagne et une politique de soutien aux arts.",
},
{
  Image: 'https://storage.canalblog.com/31/69/291893/129276578.jpg',
  name: 'François II (1559 - 1560)',
  dynasty: "Valois",
  birthDate: '19 janvier 1544',
  deathDate: '5 décembre 1560',
  description: "Son règne est extrêmement court en raison de sa mort prématurée.",
},
{
  Image: 'https://www.alex-bernardini.fr/histoire/images/charles-IX.jpg',
  name: 'Charles IX (1560 - 1574)',
  dynasty: "Valois",
  birthDate: '27 juin 1550',
  deathDate: '30 mai 1574',
  description: "Son règne est marqué par les guerres de religion et le massacre de la Saint-Barthélemy.",
},
{
  Image: 'https://www.histoire-pour-tous.fr/images/articles/dossiers/biographies/henriIII-jeune-louvre.jpg',
  name: 'Henri III (1574 - 1589)',
  dynasty: "Valois",
  birthDate: '19 septembre 1551',
  deathDate: '2 août 1589',
  description: "Dernier roi Valois, son règne est marqué par les guerres de religion et il meurt assassiné par un moine.",
},

//------ Bourbons-------
{
  Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Henri_IV_portant_la_croix_du_Saint-Esprit_-_Frans_Pourbus_le_Jeune.jpg/640px-Henri_IV_portant_la_croix_du_Saint-Esprit_-_Frans_Pourbus_le_Jeune.jpg',
  name: 'Henri IV (1589 - 1610)',
  dynasty: "Bourbons",
  birthDate: '13 décembre 1553',
  deathDate: '14 mai 1610',
  description: "Le premier roi Bourbon. Il met fin aux guerres de religion en France en se convertissant au catholicisme et en promulguant l'Édit de Nantes.",
},
{
  Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSqsJXcW0uK1M6HcXEmR2SnThq8ox0iZhkw&s',
  name: 'Louis XIII (1610 - 1643)',
  dynasty: "Bourbons",
  birthDate: '27 septembre 1601',
  deathDate: '14 mai 1643',
  description: "Règne marqué par la consolidation du pouvoir royal et les guerres contre l'Espagne. Il s'entoure du cardinal Richelieu, son ministre.",
},
{
  Image: 'https://musee-archeologienationale.fr/sites/archeonat/files/styles/thumbnail_w880/public/2021-08/louis_xiv_of_france_recadr%C3%A9_0.jpg?itok=wSJDeRkf',
  name: 'Louis XIV (Le Roi Soleil) (1643 - 1715)',
  dynasty: "Bourbons",
  birthDate: '5 septembre 1638',
  deathDate: '1er septembre 1715',
  description: "Le plus long règne de l’histoire de France, marquée par l’absolutisme royal, la centralisation du pouvoir et les guerres pour la grandeur de la France.",
},
{
  Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Louis15-1.jpg/1200px-Louis15-1.jpg',
  name: 'Louis XV (1715 - 1774)',
  dynasty: "Bourbons",
  birthDate: '15 février 1710',
  deathDate: '10 mai 1774',
  description: "Son règne, marqué par la guerre de Sept Ans, voit le déclin de l’autorité royale et une croissance de l’opposition à la monarchie.",
},
{
  Image: 'https://cdn.futura-sciences.com/sources/images/Louis%20XVI%20dauphin%20en%201769%20par%20Van%20Loo.jpg',
  name: 'Louis XVI (1774 - 1792)',
  dynasty: "Bourbons",
  birthDate: '23 août 1754',
  deathDate: '21 janvier 1793',
  description: "Dernier roi de la monarchie absolue. Son règne se termine par la Révolution française, et il est exécuté par guillotine.",
},
{
  Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfhBE67jBuHnBdULBdbm8IV7-w3OMTqGq1A&s',
  name: 'Louis XVIII (1814 - 1824)',
  dynasty: "Bourbons",
  birthDate: '17 novembre 1755',
  deathDate: '16 septembre 1824',
  description: "Frère de Louis XVI, il monte sur le trône après la chute de Napoléon Ier et rétablit la monarchie après la Révolution.",
},
{
  Image: 'https://www.meisterdrucke.lu/kunstwerke/1260px/Lon_Cogniet_-_Portrait_of_Charles_X_%281757-1836%29_c1824-30_-_%28MeisterDrucke-37917%29.jpg',
  name: 'Charles X (1824 - 1830)',
  dynasty: "Bourbons",
  birthDate: '9 octobre 1757',
  deathDate: '6 novembre 1836',
  description: "Dernier roi de la dynastie Bourbon. Son règne est marqué par des tentatives de retour à l’absolutisme, ce qui conduit à la Révolution de Juillet 1830 et à son abdication.",
},
  ];


 // Filtrage des rois selon la dynastie
 const filteredRois = cards.filter((card) => {
  return selectedDynasty ? card.dynasty === selectedDynasty : true;
});

// Fonction pour gérer le changement de filtre de dynastie
const handleDynastyFilter = (dynasty: string) => {
  setSelectedDynasty(dynasty);
};

return (
  <div className="container-rois">
    <div className="filter-container">
      <FilterButtons 
        onDynastyFilter={handleDynastyFilter} 
      />
    </div>
    <div className='rois'>
      {filteredRois.map((card, index) => (
        <Card
          key={index}
          image={card.Image}
          name={card.name}
          dynasty={card.dynasty}
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
