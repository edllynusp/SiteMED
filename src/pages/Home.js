import { Link } from 'react-router-dom';
import './Home.css';  // Importando o CSS

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo (a) ao site de estudo!</h1>
      <Link to="/materia">
        <button className="materia-button">Propedêutica</button>
      </Link>
    </div>
  );
}

export default Home;
