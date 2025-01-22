import { useState } from "react";
import VerticalRecipeCard from "../../components/VerticalRecipeCard";
import "./RecipePage.css";

function RecipePage() {
  const recipesData = [
    {
      id: 1,
      name: "Salade César",
      time: "court",
      type: "entrée",
      difficulty: "facile",
    },
    {
      id: 2,
      name: "Bœuf Bourguignon",
      time: "long",
      type: "plat",
      difficulty: "difficile",
    },
    {
      id: 3,
      name: "Mousse au chocolat",
      time: "moyen",
      type: "dessert",
      difficulty: "moyen",
    },
    {
      id: 4,
      name: "Soupe de légumes",
      time: "moyen",
      type: "entrée",
      difficulty: "facile",
    },
    {
      id: 5,
      name: "Quiche Lorraine",
      time: "moyen",
      type: "plat",
      difficulty: "moyen",
    },
    {
      id: 6,
      name: "Smoothie aux fruits",
      time: "court",
      type: "boisson",
      difficulty: "facile",
    },
    {
      id: 7,
      name: "Gratin Dauphinois",
      time: "long",
      type: "accompagnement",
      difficulty: "moyen",
    },
    {
      id: 8,
      name: "Tiramisu",
      time: "moyen",
      type: "dessert",
      difficulty: "difficile",
    },
    {
      id: 9,
      name: "Poulet Rôti",
      time: "long",
      type: "plat",
      difficulty: "facile",
    },
    {
      id: 10,
      name: "Cocktail Mojito",
      time: "court",
      type: "boisson",
      difficulty: "facile",
    },
  ];

  const [selectedTime, setSelectedTime] = useState("Toutes");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Toutes");
  const [selectedType, setSelectedType] = useState("Tous");

  function handleTimeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedTime(e.target.value);
  }

  function handleDifficultySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDifficulty(e.target.value);
  }

  function handleTypeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedType(e.target.value);
  }

  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesTime =
      selectedTime === "Toutes" || recipe.time === selectedTime;
    const matchesDifficulty =
      selectedDifficulty === "Toutes" ||
      recipe.difficulty === selectedDifficulty;
    const matchesType = selectedType === "Tous" || recipe.type === selectedType;
    return matchesTime && matchesDifficulty && matchesType;
  });

  return (
    <div>
      <div className="main-page-recipe-filter-container">
        <select onChange={handleTimeSelect}>
          <option value="Temps">Temps</option>
          <option value="court">Court</option>
          <option value="moyen">Moyen</option>
          <option value="long">Long</option>
        </select>

        <select onChange={handleDifficultySelect}>
          <option value="Difficulté">Difficulté</option>
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
        </select>

        <select onChange={handleTypeSelect}>
          <option value="Type">Type</option>
          <option value="entrée">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
          <option value="accompagnement">Accompagnement</option>
          <option value="boisson">Boisson</option>
        </select>
      </div>

      <div className="main-page-recipe-container">
        {filteredRecipes.map((recipe) => (
          <VerticalRecipeCard
            key={recipe.id}
            name={recipe.name}
            time={recipe.time}
            difficulty={recipe.difficulty}
            type={recipe.type}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipePage;
