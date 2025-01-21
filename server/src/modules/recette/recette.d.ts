export interface Recette {
  id?: number; // ID unique (auto-généré lors de la création)
  titre: string; // Titre de la recette
  description: string; // Description courte
  date_publication: string; // Date de publication
  image_url: string; // URL de l'image
  saison: "printemps" | "été" | "automne" | "hiver" | "toutes saisons" | null; // Enum pour la saison
  type_id: number; // Clé étrangère vers type_recette
  difficulte_id: number; // Clé étrangère vers difficulte
  temps_id: number; // Clé étrangère vers temps_preparation
  utilisateur_id: number; // Clé étrangère vers utilisateur
}
