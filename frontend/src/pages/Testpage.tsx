import React, { useEffect, useState } from "react";
import { fetchRois } from "../api/fetch"; // Assurez-vous que le chemin vers votre fichier est correct

interface Roi {
  id: number;
  image?: string;
  name: string;
  dynastie: string;
  birthDate: string;
  deathDate: string | null;
  description: string;
}

const TestPage: React.FC = () => {
  const [rois, setRois] = useState<Roi[]>([]); // Tableau pour stocker les rois
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement
  const [error, setError] = useState<string | null>(null); // Pour gérer les erreurs

  // Charger les rois au démarrage
  useEffect(() => {
    const loadRois = async () => {
      try {
        const roisData = await fetchRois(); // Récupérer les rois depuis l'API
        setRois(roisData); // Mettre à jour l'état avec les données des rois
        setIsLoading(false); // Fin du chargement
      } catch {
        setError("Erreur lors du chargement des rois.");
        setIsLoading(false); // Fin du chargement en cas d'erreur
      }
      
    };
    loadRois();
  }, []); // Le tableau vide [] signifie que cela s'exécutera seulement une fois, au montage du composant

  return (
    <div>
      <h1>Liste des Rois</h1>
      {isLoading ? (
        <p>Chargement des rois...</p> // Afficher un message de chargement
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p> // Afficher l'erreur s'il y en a
      ) : rois.length === 0 ? (
        <p>Aucun roi trouvé.</p> // Si la liste est vide, afficher ce message
      ) : (
        <ul>
          {rois.map((roi) => (
            <li key={roi.id}>
              {roi.image && <img src={roi.image} alt={roi.name} />} {/* Afficher l'image si disponible */}
              <h2>{roi.name}</h2>
              <p><strong>Dynastie:</strong> {roi.dynastie}</p>
              <p><strong>Date de naissance:</strong> {roi.birthDate}</p>
              <p><strong>Date de décès:</strong> {roi.deathDate ? roi.deathDate : "En vie"}</p>
              <p><strong>Description:</strong> {roi.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestPage;
