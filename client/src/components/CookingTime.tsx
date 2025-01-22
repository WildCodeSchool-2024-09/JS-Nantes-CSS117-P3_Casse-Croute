import "../styles/cooking-time.css";

function CookingTime() {
  return (
    <form className="container-cooking-time">
      <section>
        <label htmlFor="cooking-hours">Heures</label>
        <input id="cooking-hours" type="number" min="0" max="24" />
      </section>
      <section>
        <label htmlFor="cooking-minutes">Minutes</label>
        <input id="cooking-minutes" type="number" min="0" max="59" />
      </section>
    </form>
  );
}

export default CookingTime;
