export interface StepsToRecipe {
  recette_ref: string;
  preparation: [{ ordre: number; description: string }];
}
