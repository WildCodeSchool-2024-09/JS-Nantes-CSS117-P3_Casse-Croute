// import { useState, useEffect } from "react";
// import type { ChangeEvent } from "react";
// import type { RecipeI } from "../types/RecipeValues";

// function SearchFilter() {
//   const [letters, setLetters] = useState("");
//   const [recipes, setRecipes] = useState<RecipeI[]>([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/api/recette`);
//         if (!response.ok) throw new Error('Failed to fetch recipes');
//         const data = await response.json();
//         setRecipes(data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des recettes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     setLetters(e.target.value);
//   }

//   const filteredArray = letters !== ""
//     ? recipes?.filter((el) =>
//         el.titre.toLowerCase().includes(letters.toLowerCase())
//       )
//     : recipes;

//   return (
//     <div className="search-container">
//       <div className="search-wrapper">
//         <input
//           type="text"
//           placeholder="Recherchez votre recette"
//           onChange={handleChange}
//           value={letters}
//           className="search-input"
//         />
//       </div>
//       <section className="results-section">
//         {filteredArray && filteredArray.length > 0 ? (
//           <div className="results">
//             {filteredArray.map((recipe: RecipeI) => (
//               <div key={recipe.id} className="recipe-card">
//                 {recipe.titre}
//               </div>
//             ))}
//           </div>
//         ) : (
//           letters !== "" && (
//             <figure className="no-result">
//               <p>Aucune recette trouvée pour "{letters}"</p>
//             </figure>
//           )
//         )}
//       </section>
//     </div>
//   );
// }

// export default SearchFilter;
