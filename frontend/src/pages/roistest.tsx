import React, { useEffect, useState } from "react";
import { fetchRois } from "..//api/fetch"; // Assurez-vous que le chemin vers votre fichier est correct

interface Roi {
  id: number;
  image?: string;
  name: string;
  dynastie: string;
  birthDate: string;
  deathDate: string | null;
  description: string;
}

const RoiComponent: React.FC = () => {
  const [rois, setRois] = useState<Roi[]>([]); // Tableau pour stocker les rois

  // Charger les rois au démarrage
  useEffect(() => {
    const loadRois = async () => {
      const roisData = await fetchRois(); // Récupérer les rois depuis l'API
      setRois(roisData); // Mettre à jour l'état avec les données des rois
    };
    loadRois();
  }, []); // Le tableau vide [] signifie que cela s'exécutera seulement une fois, au montage du composant

  return (
    <div>
      <h1>Liste des Rois</h1>
      {rois.length === 0 ? (
        <p>Aucun roi trouvé.</p> // Si la liste est vide, afficher ce message
      ) : (
        <ul>
          {rois.map((roi) => (
            <li key={roi.id}>
              <h2>{roi.name}</h2>
              <p><strong>Dynastie:</strong> {roi.dynastie}</p>
              <p><strong>Date de naissance:</strong> {roi.birthDate}</p>
              <p><strong>Date de décès:</strong> {roi.deathDate ? roi.deathDate : "En vie"}</p>
              <p><strong>Description:</strong> {roi.description}</p>
              {roi.image && <img src={roi.image} alt={roi.name} />} {/* Afficher l'image si disponible */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoiComponent;
