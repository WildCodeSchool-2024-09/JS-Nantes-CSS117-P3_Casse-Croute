import "../styles/recipe-description.css";

interface DescriptionProps {
  description: string;
}

const RecipeDescription: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <section className="container-description">
      <h2>Description</h2>
      <p>{description}</p>
    </section>
  );
};

export default RecipeDescription;
