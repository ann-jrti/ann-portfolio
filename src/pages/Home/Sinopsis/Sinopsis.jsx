import './../../../scss/base/_variables.scss';
import './sinopsis.styles.scss';

export const Sinopsis = () => {
  return (
    <section className="info__container">
      <div className="info__text">
        <p>Andrea Masó</p>
        <p>Full Stack developer</p>
      </div>

      <div className="info__text">
        <a
          className="info__text-github"
          target="_blank"
          href="https://github.com/ann-jrti"
        >
          <p>github.com/ann-jrti</p>
        </a>

        <p>andreamaso.sm@gmail.com</p>
      </div>
    </section>
  );
};
