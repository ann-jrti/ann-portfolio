import './description.styles.scss';

export const Description = () => {
  return (
    <div className="description__container">
      <div className="description-text__container">
        <h1 className="description__greet description__greet--yellow">Hey,</h1>
        <p>
          Mi nombre es Andrea y tengo 27 años. Empecé a estudiar fundamentos de
          ingeniería de software por mi cuenta en 2020. Comencé con pequeños
          scripts para mi uso personal y a veces laboral, como parsear paths de
          Windows para que fueran válidos en Mac o trastear la API de Spotify
          para hacer cambios en mis playlists.<br></br> <br></br>
        </p>
      </div>
    </div>
  );
};
