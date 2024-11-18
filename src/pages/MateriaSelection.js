import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MateriaSelection.css'; // Certifique-se de que o CSS foi criado

function MateriaSelection() {
  const navigate = useNavigate();

  // Lista das matérias
  const materias = [
    "Tonus",
    "Motricidade",
    "Sensibilidade",
    "Reflexos",
    "Marchas",
    "Principais Síndromes Neurológicas",
    "Avaliação Clínica da Dispnéia",
    "Abdominal",
    "Cardíaca",
    "Facies",
    "Atitudes em Decúbico",
    "Avaliação de Nervos Cranianos",
    "Casos Clínicos",
  ];

  // Função chamada quando o usuário seleciona uma matéria
  const handleMateriaSelect = (materia) => {
    navigate(`/quiz/${materia}`);
  };

  return (
    <div className="materia-selection">
      <h2>Escolha um Assunto</h2>
      <ul className="materia-list">
        {materias.map((materia, index) => (
          <li key={index}>
            <button className="materia-button" onClick={() => handleMateriaSelect(materia)}>
              {materia}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MateriaSelection;
