import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Resultado() {
  const { state } = useLocation();
  const { acertos, erros, answers, tema } = state || {}; // Recebe o tema do state
  const navigate = useNavigate();

  // Função para refazer o quiz
  const handleRetryQuiz = () => {
    if (tema) {
      navigate(`/quiz/${tema}`, { replace: true }); // Redireciona para o mesmo tema
    } else {
      navigate('/'); // Caso o tema não seja encontrado, redireciona para a página inicial
    }
  };

  return (
    <div className="container">
      <h2>Resultado do Quiz</h2>
      <p>Acertos: {acertos}</p>
      <p>Erros: {erros}</p>
      <p>Respostas:</p>
      <ul>
        {answers ? (
          answers.map((answer, index) => (
            <li key={index}>
              <strong>{answer.question}</strong>
              <br />
              Resposta dada: {answer.userAnswer} -{' '}
              {answer.correct ? 'Correto' : 'Errado'}
            </li>
          ))
        ) : (
          <p>Nenhuma resposta encontrada.</p>
        )}
      </ul>
      <button onClick={handleRetryQuiz}>Refazer Quiz</button>
      <button onClick={() => navigate('/')}>Voltar para a Página Inicial</button>
    </div>
  );
}

export default Resultado;
