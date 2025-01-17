import "../styles/cooking-time.css";

function CookingTime() {
  return (
    <>
      <section className="container-cooking-time">
        <section>
          <section>
            <label htmlFor="cooking-hours">Heures</label>
            <input id="cooking-hours" type="number" min="0" max="24" />
          </section>
          <section>
            <label htmlFor="cooking-minute">Minutes</label>
            <input id="cooking-hours" type="number" min="0" max="24" />
          </section>
        </section>
      </section>
    </>
  );
}

export default CookingTime;
