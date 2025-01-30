export interface RecipeI {
  id?: number;
  titre: string;
  temps_id: string;
  type_id: string;
  difficulte_id: string;
  description: string;
  image_url: string;
}

export interface ingredientI {
  id: number;
  nom: string;
  icone_categorie: string;
}
