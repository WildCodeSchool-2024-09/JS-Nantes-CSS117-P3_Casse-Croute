import { useState } from "react";
import "../styles/cooking-difficult.css";

const difficult = [
  {
    id: "1",
    label: "Facile",
    image: "assets/images/level-difficult/icon-easy.png",
    alt: "Facile",
  },
  {
    id: "2",
    label: "Moyen",
    image: "assets/images/level-difficult/icon-medium.png",
    alt: "Moyen",
  },
  {
    id: "3",
    label: "Difficile",
    image: "assets/images/level-difficult/icon-difficult.png",
    alt: "Difficile",
  },
];
function CookingDifficult() {
  const [active, setActive] = useState<string[]>([]);
  // Function to retrieve the id of the clicked button without impacting the others (we send the id of the clicked button in an empty array)
  const handleClick = (id: string) => {
    const copy = structuredClone(active);
    const index = copy.findIndex((el) => el === id);
    if (index === -1) {
      copy.push(id);
    } else {
      copy.splice(index, 1);
    }
    setActive(copy);
  };
  return (
    <form className="container-cooking-difficult">
      {difficult.map((el) => {
        return (
          <section key={el.id}>
            <button
              style={{
                backgroundColor: active.includes(el.id) ? "#FF9100" : "#FFF",
              }}
              onClick={() => handleClick(el.id)}
              type="button"
            >
              <img src={el.image} alt={el.alt} />
            </button>
            <label htmlFor="cooking-difficult">{el.label}</label>
          </section>
        );
      })}
    </form>
  );
}

export default CookingDifficult;
