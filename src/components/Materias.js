import React from 'react';
import { useNavigate } from 'react-router-dom';
function Materias() {
  const navigate = useNavigate();

  // Lista das matérias de propedêutica disponíveis
  const materias = [
    "Tonus",
    "Motricidade",
    "Sensibilidade",
    "Reflexos",
    "Semiotécnica",
    "Marchas",
    "Principais Síndromes Neurológicas",
    "Avaliação Clínica da Dispnéia",
    "Abdominal",
    "Cardíaca",
    "Principais Doenças",
    "Atitudes em Decúbico"
  ];

  // Função chamada quando o usuário seleciona uma matéria
  const handleMateriaSelect = (materia) => {
    // Navegar para a página de questões, passando o nome da matéria
    navigate(`/questoes/${materia}`);
  };

  return (
    <div>
      <h2>Escolha uma Matéria</h2>
      <ul>
        {materias.map((materia, index) => (
          <li key={index}>
            <button onClick={() => handleMateriaSelect(materia)}>
              {materia}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materias;
