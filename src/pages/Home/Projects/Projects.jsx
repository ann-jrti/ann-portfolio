import './projects.styles.scss';

export const Projects = () => {
  return (
    <section className="projects__container">
      <p className="projects__title">Projects</p>
      <div className="division"></div>
      <a
        href="https://github.com/ann-jrti/final-project-frontend"
        target="_blank"
        className="projects__oh-lol"
      >
        Oh lol
      </a>
      <a href="https://ann-jrti.github.io/kanban-board/" target="blank">
        Kanban board
      </a>
      <a
        href="https://ann-jrti.github.io/pug-card-memory-game-ts/"
        target="_blank"
      >
        Memory game
      </a>
      <a href="https://ann-jrti.github.io/weather-app/" target="_blank">
        Weather app
      </a>
      <a href="https://github.com/ann-jrti/quiz-game-CMD" target="_blank">
        Game in cmd
      </a>
      <a href="https://ann-jrti.github.io/ann-pokedex/" target="_blank">
        Pokédex
      </a>
      <a
        href="https://ann-jrti.github.io/shopping-cart-ts/"
        target="_blank"
        className="sss projects__kanban-board"
      >
        Shopping cart
      </a>
    </section>
  );
};
