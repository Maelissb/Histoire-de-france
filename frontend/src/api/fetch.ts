interface Roi {
    id: number; // L'ID sera généré par la base de données
    image?: string;
    name: string;
    dynastie: string;
    birthDate: string;
    deathDate: string | null;
    description: string;
  }
  
  const API_URL = "http://localhost:3000/rois"; // URL de ton API
  
  // Fonction pour récupérer tous les rois (GET)
  export const fetchRois = async (): Promise<Roi[]> => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des rois');
      }
      const data: Roi[] = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur:", error);
      return [];
    }
  };
  
  // Fonction pour créer un roi (POST)
  // Modification ici pour accepter Omit<Roi, 'id'> si l'ID est généré par la base de données
  export const createRoi = async (roiData: Omit<Roi, 'id'>): Promise<Roi | null> => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roiData),
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de la création du roi');
      }
  
      const newRoi: Roi = await response.json();
      return newRoi; // Le backend génère l'ID automatiquement
    } catch (error) {
      console.error("Erreur:", error);
      return null;
    }
  };
  