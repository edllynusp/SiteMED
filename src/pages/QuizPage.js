import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import { materiaData } from '../data/materiaData.js';

function QuizPage() {
  const { tema } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answered, setAnswered] = useState(false); // Controle de perguntas respondidas

  useEffect(() => {
    const temaData = materiaData.propedeutica.temas.find(
      (item) => item.nome.toLowerCase() === tema.toLowerCase()
    );

    if (temaData) {
      setQuestions(temaData.questoes);
      setLoading(false);
    } else {
      setError('Tema não encontrado');
      setLoading(false);
    }
  }, [tema]);

  const handleAcertou = () => {
    if (!answered) {
      setAcertos((prev) => prev + 1);
      registrarResposta(true);
      setAnswered(true); 
    }
  };

  const handleErrou = () => {
    if (!answered) {
      setErros((prev) => prev + 1);
      registrarResposta(false);
      setAnswered(true); 
    }
  };

  const registrarResposta = (isCorrect) => {
    const currentAnswer = questions[currentQuestion];
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: currentAnswer.enunciado,
        correctAnswer: currentAnswer.resposta,
        correct: isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (answered) { 
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false); 
        setShowAnswer(false);
      } else {
        // Aqui passamos apenas dados serializáveis
        navigate('/resultado', {
          state: {
            acertos,     // Apenas números e dados simples
            erros,       // Não passamos funções ou objetos complexos
            answers: answers.map(answer => ({ 
              question: answer.question, 
              correctAnswer: answer.correctAnswer, 
              correct: answer.correct 
            })),  // Garantir que apenas dados simples sejam passados
            tema,        // Passamos apenas strings simples
          },
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswered(false);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true); 
  };

  if (loading) {
    return <p>Carregando questões...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="quiz-page">
      <h2>Flashcard de {tema}</h2>
      <div className="quiz-info">
        <p>
          Pergunta {currentQuestion + 1} de {questions.length}
        </p>
      </div>

      <div className="question-container">
        <p><strong>Pergunta:</strong> {questions[currentQuestion].enunciado}</p>

        {questions[currentQuestion].imagem && (
          <img
            src={questions[currentQuestion].imagem[0].src}
            alt={questions[currentQuestion].imagem[0].alt}
            style={{ width: '300px', height: 'auto', marginTop: '10px' }}
          />
        )}

        {/* Botão para mostrar a resposta */}
        <button onClick={handleShowAnswer}>Ver Resposta</button>

        {showAnswer && (
          <div className="answer-container">
            <p><strong>Resposta:</strong> {questions[currentQuestion].resposta}</p>
            <div className="result-buttons">
              <button onClick={handleAcertou} disabled={answered}>Acertou</button>
              <button onClick={handleErrou} disabled={answered}>Errou</button>
            </div>
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Voltar
        </button>
        <button onClick={handleNext} disabled={!answered}>
          {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
