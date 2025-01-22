export interface Recette {
  id?: number;
  titre: string;
  description: string;
  date_publication: string;
  image_url: string;
  saison: "printemps" | "été" | "automne" | "hiver" | "toutes saisons" | null;
  type_id: number;
  difficulte_id: number;
  temps_id: number;
  utilisateur_id: number;
}
