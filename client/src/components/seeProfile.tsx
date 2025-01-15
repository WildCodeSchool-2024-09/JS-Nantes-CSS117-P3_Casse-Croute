function SeeProfile() {
  const user = {
    pseudo: "Jean",
    email: "jean_moulin@ruisseau.fr",
    password: "MoulinI$DaBe$t",
    description: "Je suis un résistant",
    profilePic: "client/src/public/assets/images/favicon.png",
  };

  return (
    <>
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
export default SeeProfile;
