export function seeProfile() {
  const user = {
    pseudo: "Jean",
    email: "jean_moulin@ruisseau.fr",
    password: "MoulinI$DaBe$t",
    description: "Je suis un résistant",
    profilePic: "`${import.meta.env.VITE_API_URL}/assets/images/favicon.png`",
  };

  return (
    <>
      <nav>
        <button type="button">Modifier mon profil</button>
        <button type="button">Recettes</button>
      </nav>
      <figure>
        <img src={user.profilePic} alt="profile pic" />
        <figcaption>
          <p> {user.pseudo} </p>
          <br />
          <p> {user.description} </p>
        </figcaption>
      </figure>
    </>
  );
}
