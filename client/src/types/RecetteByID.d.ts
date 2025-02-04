export interface EtapePreparation {
  id: number;
  ordre: number;
  description: string;
}

export interface Ingredient {
  id: number;
  nom: string;
  categorie?: string;
  saison: "printemps" | "été" | "automne" | "hiver" | "toutes saisons";
  icone_categorie?: string;
}

export interface IngredientRecette {
  ingredient: Ingredient;
  quantite: number;
  unite: string;
}

export interface Avis {
  id: number;
  utilisateur_id: number;
  note: number;
  commentaire?: string;
  date_avis: string;
}

export interface Recette {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_url?: string;
  saison: "printemps" | "été" | "automne" | "hiver" | "toutes saisons";
  categorie: string;
  etapes: EtapePreparation[];
  ingredients: IngredientRecette[];
  commentaires: Avis[];
}
