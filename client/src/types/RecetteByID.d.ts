export interface EtapePreparation {
  id: number;
  ordre: number;
  description: string;
}

export interface IngredientRecette {
  id: number;
  nom: string;
  unite: string;
  saison: "printemps" | "été" | "automne" | "hiver" | "toutes saisons";
  quantite: number;
  categorie?: string;
  icone_categorie?: string;
}

export interface Avis {
  id: number;
  utilisateur: string;
  photo_profil?: string;
  note: number;
  commentaire: string;
  date_avis: string;
}

export interface TempsPreparation {
  heure: number;
  minute: number;
}

export interface Recette {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_url?: string;
  saison: "printemps" | "été" | "automne" | "hiver" | "toutes saisons";
  typeRecette: string;
  difficulte: string;
  tempsPreparation: TempsPreparation;
  etapes: EtapePreparation[];
  ingredients: IngredientRecette[];
  commentaires: Avis[];
}

export interface RecipePrepaProps {
  steps: EtapePreparation[];
  tempsPreparation: TempsPreparation;
  difficulte: string;
  typeRecette: string;
}
