import { useNavigate } from 'react-router-dom';
import './App.css';  // Estilos globais

function Questoes({ questions }) {
  const navigate = useNavigate();
  
  const handleSubmit = (answers) => {
    // Redireciona para a página de resultados com as respostas
    navigate('/resultado', { state: { answers } });
  };

  return (
    <div className="container">
      <h2>Questões</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <label>{question.text}</label>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input type="radio" name={`question-${index}`} value={option} />
                <span>{option}</span>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Ver Resultados</button>
      </form>
    </div>
  );
}

export default Questoes;
