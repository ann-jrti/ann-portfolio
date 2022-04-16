import './headerabout.styles.scss';
import { useNavigate } from 'react-router-dom';

export const HeaderAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="header-about">
      {/* <Name></Name> */}
      {/* <div>
            <Sinopsis></Sinopsis>
          </div> */}
      <div onClick={() => navigate('/')}>
        <h1>Projects</h1>
      </div>

      <div>
        <h1>Me</h1>
      </div>

      <div onClick={() => navigate('/')}>
        <h1>Skills</h1>
      </div>
    </div>
  );
};
