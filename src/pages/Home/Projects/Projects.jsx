import "./projects.styles.scss";

export const Projects = () => {
  return (
    <section className="projects__container">
      <p className="projects__title">Projects</p>
      <div className="division"></div>
      <a
        href="https://need-coffee.netlify.app/"
        target="_blank"
        className="projects__oh-lol"
      >
        Need Coffee
      </a>
      <a href="https://ann-jrti.github.io/todo-with-redux/" target="blank">
        To-do app
      </a>

      <a
        href="https://ann-jrti.github.io/pug-card-memory-game-ts/"
        target="_blank"
      >
        Memory game
      </a>
      <a href="https://ann-jrti.github.io/kanban-board/" target="blank">
        Kanban board
      </a>
      <a href="https://github.com/ann-jrti/quiz-game-CMD" target="_blank">
        Game in cmd
      </a>
      <a href="https://ann-jrti.github.io/shopping-cart-ts/" target="_blank">
        Shopping cart
      </a>
    </section>
  );
};
