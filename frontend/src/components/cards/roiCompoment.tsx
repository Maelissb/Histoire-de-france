import React, { useEffect, useState } from "react";
import { fetchRois, createRoi } from "../../api/fetch"; // Import du service

interface Roi {
  id: number;
  name: string;
  dynastie: string;
  birthDate: string;
  deathDate: string | null;
  description: string;
  image?: string;
}

const RoiComponent: React.FC = () => {
  const [rois, setRois] = useState<Roi[]>([]);

  const [newRoi, setNewRoi] = useState<Omit<Roi, 'id'>>({
    name: "",
    dynastie: "",
    birthDate: "",
    deathDate: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const loadRois = async () => {
      const roisData = await fetchRois();
      setRois(roisData);
    };
    loadRois();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdRoi = await createRoi(newRoi); // On passe un objet sans id
    if (createdRoi) {
      setRois([...rois, createdRoi]);
    }
  };

  return (
    <div>
      <h1>Liste des Rois</h1>
      <ul>
        {rois.map((roi) => (
          <li key={roi.id}>{roi.name} - {roi.dynastie}</li>
        ))}
      </ul>

      <h2>Créer un Nouveau Roi</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={newRoi.name}
          onChange={(e) => setNewRoi({ ...newRoi, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dynastie"
          value={newRoi.dynastie}
          onChange={(e) => setNewRoi({ ...newRoi, dynastie: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date de naissance"
          value={newRoi.birthDate}
          onChange={(e) => setNewRoi({ ...newRoi, birthDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date de décès"
          value={newRoi.deathDate || ""}  // Si newRoi.deathDate est null, il passera à une chaîne vide
          onChange={(e) => setNewRoi({ ...newRoi, deathDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newRoi.description}
          onChange={(e) => setNewRoi({ ...newRoi, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          value={newRoi.image}
          onChange={(e) => setNewRoi({ ...newRoi, image: e.target.value })}
        />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default RoiComponent;
