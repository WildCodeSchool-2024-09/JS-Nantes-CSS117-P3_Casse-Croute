// import { useState } from "react";
// import type { ChangeEvent } from "react";

// function SearchFilter() {
//   const [letters, setLetters] = useState("");

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     setLetters(e.target.value);
//   }

//   const filteredArray =
//     letters !== ""
//       ? /*LIER LA DATA */ data?.filter((el) =>
//           el.recipe.name.toLowerCase().includes(letters),
//         )
//       : data;

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
//             {filteredArray.map((recipe) => (
//               <div key={recipe.name} className="recipe-card">
//                 {recipe.name}
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
