import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MateriaSelection from './pages/MateriaSelection';
import QuizPage from './pages/QuizPage';
import Resultado from './pages/Resultado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materia" element={<MateriaSelection />} />
        <Route path="/quiz/:tema" element={<QuizPage />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}

export default App;
