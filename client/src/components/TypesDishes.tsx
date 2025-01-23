import { useState } from "react";
import "../styles/cooking-difficult.css";

const difficult = [
  {
    id: "1",
    label: "Entrée",
    image: "assets/images/types-dishes/entrance.png",
    alt: "Entrée",
  },
  {
    id: "2",
    label: "Plat",
    image: "assets/images/types-dishes/dishes.png",
    alt: "Plat",
  },
  {
    id: "3",
    label: "Dessert",
    image: "assets/images/types-dishes/dessert.png",
    alt: "Dessert",
  },
  {
    id: "4",
    label: "Boisson",
    image: "assets/images/types-dishes/drinks.png",
    alt: "Boisson",
  },
];
function TypesDishes() {
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

export default TypesDishes;
