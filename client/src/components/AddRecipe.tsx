import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../pages/CreateRecipe/CreateRecipe.css";

interface RecipeData {
  titre: string;
  image_url: string;
  description: string;
  temps: string;
  difficulté: string;
  type: string;
  ingredients: [Ingredient];
  preparation: string;
}

interface Ingredient {
  nom: string;
  id: string;
  icone_categorie: string;
  unite: string;
}

interface IngredientData {
  nom: string;
  id: string;
  quantity: number;
  unite: string;
  icone_categorie: string;
}

function AddRecipe() {
  //declaration of states
  const [recipeData, setRecipeData] = useState<RecipeData>({
    titre: "",
    image_url: "",
    description: "",
    temps: "",
    difficulté: "",
    type: "",
    ingredients: [{ nom: "", id: "", unite: "", icone_categorie: "" }],
    preparation: "",
  });
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [ingredientData, setIngredientData] = useState<IngredientData[]>([]);

  const handleInputRecipe = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleInputIngredients = (ingredient: Ingredient) => {
    const foundIngredientInData = ingredientData.find(
      (existingIngredient) => existingIngredient.nom === ingredient.nom,
    );

    if (foundIngredientInData) {
      setIngredientData((prevIngredientData) =>
        prevIngredientData.map((existingIngredient) =>
          existingIngredient.nom === ingredient.nom
            ? {
                ...existingIngredient,
                quantity: existingIngredient.quantity + 1,
              }
            : existingIngredient,
        ),
      );
    } else {
      setIngredientData([
        ...ingredientData,
        {
          ...ingredient,
          quantity: 1,
          unite: "00 g",
        },
      ]);
    }
  };

  const handleInputUnits = (
    e: React.ChangeEvent<HTMLSelectElement>,
    ingredientName: string,
  ) => {
    const unite = e.target.value;

    setIngredientData((prevIngredientData) =>
      prevIngredientData.map((ingredient) =>
        ingredient.nom === ingredientName
          ? { ...ingredient, unite }
          : ingredient,
      ),
    );
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/ingredient`)
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);

  const handlePlus = (ingredientName: string) => {
    setIngredientData((prevIngredientData) =>
      prevIngredientData.map((ingredient) =>
        ingredient.nom === ingredientName
          ? { ...ingredient, quantity: ingredient.quantity + 1 }
          : ingredient,
      ),
    );
  };

  const handleMinus = (ingredientName: string) => {
    setIngredientData((prevIngredientData) =>
      prevIngredientData.map((ingredient) =>
        ingredient.nom === ingredientName && ingredient.quantity > 1
          ? { ...ingredient, quantity: ingredient.quantity - 1 }
          : ingredient,
      ),
    );
  };

  const handleDelete = (ingredientName: string) => {
    setIngredientData((prevIngredientData) =>
      prevIngredientData.filter(
        (ingredient) => ingredient.nom !== ingredientName,
      ),
    );
  };

  //submit the form
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const {
      titre,
      description,
      temps,
      difficulté,
      type,
      ingredients,
      preparation,
    } = recipeData;
    if (
      !titre ||
      !description ||
      !temps ||
      !difficulté ||
      !type ||
      !ingredients ||
      !preparation
    ) {
      toast.error("Veuillez remplir tous les champs 🤦‍♀️");
    } else {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/receipe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeData),
        },
      );
      if (response.ok) {
        toast.success("Recette crée ! 👨‍🍳");
        navigate("/view-profile");
      } else if (response.status === 409) {
        toast.error("cette recette existe déjà 🤷‍♀️");
      } else {
        toast.error("Demande crammée 🤦‍♀️");
      }
    }
  }

  //DISPLAY THE FORM

  return (
    <form onSubmit={handleSubmit} className="create-recipe-form">
      <label htmlFor="titre">Titre:</label>
      <input
        required
        type="text"
        id="title"
        name="titre"
        onChange={handleInputRecipe}
        className="generic-input"
      />
      <label htmlFor="description">Description:</label>
      <input
        required
        type="text"
        id="description"
        name="description"
        onChange={handleInputRecipe}
        className="generic-input"
      />
      <label htmlFor="time">Temps: {recipeData.temps} minutes</label>
      <input type="range" id="time" name="temps" onChange={handleInputRecipe} />
      <label htmlFor="difficulty">Difficulté:</label>
      <select
        required
        id="difficulty"
        name="difficulté"
        onChange={handleInputRecipe}
        className="generic-input"
      >
        <option value="1">debutant</option>
        <option value="2">habitué</option>
        <option value="3">top chef</option>
      </select>

      <label htmlFor="type">Type de plat:</label>
      <select
        required
        id="type"
        name="type"
        onChange={handleInputRecipe}
        className="generic-input"
      >
        <option value="plat">plat principal</option>
        <option value="entree">entrée</option>
        <option value="dessert">dessert</option>
        <option value="boisson">boisson</option>
      </select>
      <label htmlFor="ingredients">Ingredients:</label>
      <section className="container-ingredients-season">
        {ingredientData.map((ingredient) => (
          <div key={ingredient.id}>
            <input
              type="button"
              name={ingredient.nom}
              aria-label="delete"
              className="delete-button"
              onClick={() => handleDelete(ingredient.nom)}
              value="X"
            />
            <figure>
              <img src={ingredient.icone_categorie} alt={ingredient.nom} />
              <figcaption>
                {ingredient.quantity}
                <select
                  name={ingredient.nom}
                  onChange={(e) => handleInputUnits(e, ingredient.nom)} // Pass ingredient name
                  value={ingredient.unite}
                  className="unit-selector"
                >
                  <option value="g">g</option>
                  <option value="00 g">00 g</option>
                  <option value="kg">kg</option>
                  <option value="ml">ml</option>
                  <option value="cl">cl</option>
                  <option value="l">l</option>
                </select>
                {ingredient.nom}
              </figcaption>
            </figure>
            <section>
              <input
                type="button"
                aria-label="minus"
                className="minus-button"
                onClick={() => handleMinus(ingredient.nom)} // Pass ingredient name
                value="-"
              />
              <input
                type="button"
                aria-label="add"
                className="add-button"
                onClick={() => handlePlus(ingredient.nom)} // Pass ingredient name
                value="+"
              />
            </section>
          </div>
        ))}
      </section>

      <section className="container-ingredients-season">
        <ul>
          {ingredients.map((ingredient) => (
            <div key={ingredient.id}>
              <input
                type="button"
                onClick={() => handleInputIngredients(ingredient)}
                value="+"
                className="add-button"
              />
              <label htmlFor={ingredient.nom}>
                <img
                  src={ingredient.icone_categorie}
                  alt={`${ingredient.nom} icon`}
                />
                {ingredient.nom}
              </label>
            </div>
          ))}
        </ul>
      </section>

      <label htmlFor="instructions">Instructions:</label>
      <textarea
        id="instructions"
        name="preparation"
        onChange={handleInputRecipe}
        className="generic-input"
      />
      <button
        type="submit"
        id="submit"
        aria-label="submit"
        className="submit-button"
      >
        Submit
      </button>
    </form>
  );
}
export default AddRecipe;
