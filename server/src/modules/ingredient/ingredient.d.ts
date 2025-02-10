export interface Ingredient {
  id?: number;
  nom: string;
  categorie: string;
  saison: string;
  icone_categorie: string;
}
export interface IngredientToRecette {
  recette_ref: string;
  id: number;
  quantite: number;
  unite: string;
}
