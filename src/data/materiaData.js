// src/data/materiaData.js

export const materiaData = {
  propedeutica: {
    temas: [
      {
        nome: "Tonus",
        questoes: [
          {
            id: 1,
            enunciado: "Descreva o exame para avaliação do Tônus muscular.",
            resposta: "A resposta pode incluir a observação de movimentos naturais nos membros.",
            correta: true,
          },
          {
            id: 2,
            enunciado: "Quais são os achados de um exame de tônus muscular?",
            resposta: "Normotônico, Hipotônico, Hipertônico.",
            correta: true,
          },
          {
            id: 3,
            enunciado: "Qual é o sinal?",
            imagem: [
              {
                src: "/images/SinalRodaDenteada.png",
                alt: "Imagem do sinal da Roda Denteada",
              },
            ],
            resposta: "O sinal da Roda Denteada está presente no Parkinsonismo.",
            correta: true,
          },
          {
            id: 4,
            enunciado: "Qual é o sinal?",
            imagem: [
              {
                src: "/images/SinalDoCanivete.png",
                alt: "Imagem do sinal Canivete",
              },
            ],
            resposta: "Sinal Canivete",
            correta: true,
          },
        ],
      },
      {
        nome: "Motricidade",
        questoes: [
          {
            id: 1,
            enunciado: "Quais são os exames de déficit de força sutil?",
            resposta: "Prova de Barre e Prova de Mingazzini.",
            correta: true,
          },
          {
            id: 2,
            enunciado: "Qual é essa prova e o seu achado?",
            imagem: [
              {
                src: "/images/BARRE.png",
                alt: "Imagem da Prova de Barre",
              },
            ],
            resposta: "O exame de eletroneuromiografia na Síndrome de Guillain-Barré pode evidenciar alterações do tipo: Desmielinização (lesão na capa que envolve os nervos periféricos) Lesão axonal (lesão direta aos prolongamentos dos neurônios dos nervos periféricos)",
            correta: true,
          },
          {
            id: 3,
            enunciado: "Qual é essa prova e o seu achado?",
            imagem: [
              {
                src: "/images/MINGAZZINI.png",
                alt: "Imagem Da Prova de Mingazzini",
              },
            ],
            resposta: "Prova de Mingazzini: queda proximal (perna dobrar) / queda distal ( pé cair) - não tem como avaliar um grupo específico.",
            correta: true,
          },
          {
            id: 4,
            enunciado: "Qual é essa prova e o seu achado?",
            imagem: [
              {
                src: "/images/ManobraMaoExtendida.png",
                alt: "Imagem Da Prova dos bracos estendidos",
              },
            ],
            resposta: "Prova dos braços estendidos: os olhos devem estar fechados.Pronação: fraqueza distal - Sinal de barreQueda total do braço: fraqueza próxima",
            correta: true,
          },
        ],
      },
      {
        nome: "Sensibilidade",
        questoes: [
          {
            id: 1,
            enunciado: "Quais são os principais tratos abordados no exame de sensibilidade?",
            resposta: (
              <>
                <strong>Trato Proprioceptivo</strong>: Decussam no bulbo
                <br />
                <strong>Trato Espinotalâmico</strong>: Decussam na medula - função tátil, térmica e dolorosa
              </>
            ),
            correta: true,
          },
          {
            id: 2,
            enunciado: "Como é feito o teste de sensibilidade profunda?",
            resposta: "A avaliação da sensibilidade superficial é feita utilizando estímulos como toque leve, calor e dor.",
            correta: true,
          },
          {
            id: 2,
            enunciado: "Como é feito o teste de sensibilidade profunda?",
            resposta: (
              <>
                <strong>Hipopalestesia</strong>: diminuição da capacidade de perceber as vibrações.
                <br />
                <strong>Hipoestesia</strong>: diminuição da sensibilidade.
                <br />
                <strong>Anestesia</strong>: abolição da sensibilidade.
                <br />
                <strong>Hiperestesia</strong>: aumento da sensibilidade.
              </>
            ),
            correta: true,
          },
          {
            id: 3,
            enunciado: "Descreva o teste de arteesia e seus achados.",
            resposta: (
              <>
                Movimente o dedo do paciente, mostrando para o paciente, quando está para cima ou para baixo. Após explicação, oriente o paciente que feche os olhos e faça os movimentos, indagando ao paciente em qual posição parou.
                <br />
                Faça pelo menos 3 vezes.
                <br />
                Não conseguir fazer o teste indica lesão das vias profundas periféricas ou na região de interpretação.
              </>
            ),
            correta: true,
          },
          {
            id: 4,
            enunciado: "Descreva o teste Romberg.",
            resposta: (
              <>
                Solicite ao paciente que, na posição vertical com os pés juntos, permaneça parado alguns segundos. Em seguida, ordena-se a ele que feche os olhos durante alguns segundos.
              </>
            ),
            correta: true,
          },
          {
            id: 5,
            enunciado: "Quais são os achados no teste Romberg e o que eles indicam?",
            resposta: (
              <>
                <strong>Prova de Romberg positiva</strong>: ao cerrar os olhos, o paciente apresenta oscilações do corpo, com desequilíbrio e forte tendência à queda.
                <br />
                <strong>Com latência</strong>: após transcorrer alguns segundos, sempre cai para o mesmo lado → lesão labiríntica.
                <br />
                <strong>Sem latência</strong>: imediatamente após cerrar os olhos, cai para qualquer lado → lesão na coluna dorsal ou cerebelar.
              </>
            ),
            correta: true,
          },
          {
            id: 6,
            enunciado: "Descreva a marcha de Fukuda e o que ela significa?",
            resposta: (
              <>
                Teste vestibular que avalia a disfunção vestibular unilateral.
                <br />
                Executar 60 passos por segundo, com os braços estendidos e os olhos fechados.
                <br />
                Se a marcha lateralizar, é indicativo de lesão labiríntica.
              </>
            ),
            correta: true,
          },
        ],
      },
      {
        nome: "Reflexos",
        questoes: [
          {
            id: 1,
            enunciado: "Quais são os tipos de reflexos?",
            resposta: (
              <>
                <strong>Reflexo cutâneo</strong> e <strong>reflexo profundo</strong>.
              </>
            ),
            correta: true,
          },
          {
            id: 2,
            enunciado: "Quais são e como são feitos os reflexos cutâneos?",
            resposta: (
              <>
                <strong>Reflexo cutâneo plantar</strong>: A resposta normal é representada pela flexão dos dedos. A extensão do hálux constitui o sinal de <strong>Babinsk</strong>, indicando lesão na via piramidal ou corticoespinhal.
                <br />
                <strong>Reflexo cutâneo abdominal</strong>: Linha média abdominal, faça movimentos de retirada (do meio para a lateral). O reflexo normal é a contração abdominal.
              </>
            ),
            correta: true,
          },
          {
            id: 3,
            enunciado: "Quais os sinais patológicos encontrados?",
            resposta: (
              <>
                <strong>Sinais de Babinsk</strong>: Indicativo de lesão na via piramidal ou corticoespinhal.
                <br />
                <strong>Abolição de reflexo abdominal</strong>: Lesão na via piramidal.
              </>
            ),
            correta: true,
          },
          {
            id: 4,
            enunciado: "Quais são os reflexos profundos e qual o centro medular correspondente?",
            resposta: (
              <>
                <strong>Aquileu</strong> L5-S1
                <br />
                <strong>Patelar</strong> L2-L4
                <br />
                <strong>Tricipital</strong> C6-C7-C8
                <br />
                <strong>Bicipital</strong> C5-C6
              </>
            ),
            correta: true,
          },
          {
            id: 5,
            enunciado: "Quais são os achados?",
            resposta: (
              <>
                <strong>Arreflexia</strong> e <strong>Hiporreflexia</strong>: Normalmente encontrados em lesões que interrompem o arco reflexo, como em poliomielite e miopatia.
                <br />
                <strong>Hiperreflexia</strong>: Ocorre nas lesões na via piramidal.
              </>
            ),
            correta: true,
          },
        ],
      },
      {
        nome: "Marchas",
        questoes: [
          {
            id: 1,
            enunciado: (
              <div>
                <p>Qual é a marcha e o que ela sugere?</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/1C3hvOyPB9A?modestbranding=1&rel=0&showinfo=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "A marcha atáxica é caracterizada por passos largos e instáveis, com falta de coordenação, frequentemente associada a lesões cerebelares.",
            correta: true,
          },
          {
            id: 2,
            enunciado: (
              <div>
                <p>Qual é a marcha e o que ela sugere?</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/EvFQHTucCz0?si=-fjGL4EMM8gU9itq" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "A marcha ceifante é caracterizada por mão fechada em leve pronação, MI ipsilateral é espástico, joelho não flexiona obrigando o paciente e arrastar a perna. As causas mais comuns são AVE",
            correta: true,
          },
          {
            id: 3,
            enunciado: (
              <div>
                <p>Qual é a marcha e o que ela sugere?</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/qMUUPwXLJBU?si=scynA9NkT6z6t0ki" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "Paciente acentua lordose lombar inclinando o tronco pra para direita e para a esquerda.Doenças musculares com diminuição da força dos Mm pélvicos e das coxas",
            correta: true,
          },
          {
            id: 4,
            enunciado: (
              <div>
                <p>Qual é a marcha e o que ela sugere?</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/Pv5VwI5GGMw?si=fm6LG-UqC4OZ9blk" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "Paciente anda como um bloco, enrijecido, sem movimentos automáticos dos braços. A cabeça permanece inclinada para frente e os passos são miúdos e rápidos.",
            correta: true,
          },
          {
            id: 5,
            enunciado: (
              <div>
                <p>Qual é a marcha e o que ela sugere?</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="ttps://www.youtube.com/embed/-Dusn7cSh0U?si=iLSQ5oflT0Wv5_kO" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "paralisia do movimento de flexão doral do pé ao tentar caminhar toca com a ponta do pé no solo. Lembra o passo de ganso Lesão em nervo periférico",
            correta: true,
          }
        ],
      },
      {
        nome: "Avaliação Clínica da Dispneia",
        questoes: [
          {
            id: 1,
            enunciado: "Quais são os principais sons da percussão pulmonar e suas causas?",
            resposta: "Os sons de percussão pulmonar incluem: (a) Hipersonoridade, associada a enfisema e asma, onde há mais ar nos alvéolos, produzindo um som mais claro e intenso; (b) Submacicez e macicez, associadas a derrame pleural e condensação pulmonar (pneumonia, neoplasia, TB), onde há pouco ar nos alvéolos, produzindo um som mais abafado; (c) Timpânico, associado a pneumotórax, caverna tuberculosa e hérnia diafragmática, quando há ar preso no espaço pleural.",
            correta: true,
          },
          {
            id: 2,
            enunciado: "Quais são os sinais de esforço respiratório?",
            resposta: "Os sinais de esforço respiratório incluem: tiragem intercostal (IC), retração de fúrcula, batimento de asa de nariz, uso de musculatura acessória (escaleno, ECM e abdominal), e balanço da cabeça.",
            correta: true,
          },
          {
            id: 3,
            enunciado: "Quais são os ruídos pulmonares contínuos, descontínuos e pleurais?",
            resposta: "Os ruídos pulmonares contínuos incluem: ronco, sibilo e estridor. Os ruídos descontínuos incluem: estertor fino/crepitante e estertor grosso/bolhoso. O ruído pleural é o atrito pleural, característico de pleurite.",
            correta: true,
          },
          {
            id: 4,
            enunciado: "Descreva os ruídos pulmonares contínuos: sibilo, estridor e roncos.",
            resposta: "Sibilo: Obstrução das vias aéreas inferiores, som agudo, auscultado nas vias centrais na inspiração e expiração, característico de crises asmáticas, DPOC e enfisema. Estridor: Obstrução das vias aéreas superiores, som agudo, auscultado na inspiração e expiração, característico de obstrução da laringe ou traqueia. Roncos: Obstrução das vias aéreas inferiores, som grave, auscultado nas vias centrais, especialmente na expiração, associado a asma brônquica, bronquites e DPOC.",
            correta: true,
          },
          {
            id: 5,
            enunciado: "Descreva os ruídos pulmonares descontínuos: estertores finos/crepitante e estertores grossos/bolhosos.",
            resposta: "Estertores finos/crepitantes: Som agudo no final da inspiração, não se modifica com a tosse, pode sumir com mudança de posição, e está relacionado a edema pulmonar, fibrose pulmonar, pneumonia e bronquite aguda. Estertores grossos/bolhosos: Som grave em todas as fases respiratórias, some com a tosse, não se modifica com a mudança de posição, e está relacionado a bronquite crônica, bronquiectasia e pneumonia brônquica.",
            correta: true,
          },
          {
            id: 6,
            enunciado: "O que são os sinais de Lemos Torres e Ramond?",
            resposta: "Lemos Torres: Abaulamento expiratório intercostal localizado nas bases pulmonares e na face lateral do hemitórax. Ramond: Contratura da musculatura paravertebral.",
            correta: true,
          },
          {
            id: 7,
            enunciado: "Quando o frêmito toracovocal está aumentado e diminuído?",
            resposta: "O frêmito toracovocal está aumentado em casos de condensação pulmonar, como pneumonia e infarto pulmonar, e diminuído em atelectasia.",
            correta: true,
          },
          {
            id: 8,
            enunciado: "Quais doenças apresentam estertor fino/crepitante, estertor grosso/bolhoso, sibilo e estridor?",
            resposta: "Estertor fino/crepitante: Pneumonia (febre por 3 dias), TB (febre por 2 semanas) e insuficiência cardíaca (sem febre). Estertor grosso/bolhoso: Bronquite, bronquiectasia. Sibilo: Asma, DPOC, traqueobronquite aguda. Estridor: Semiobstrução da laringe ou traqueia.",
            correta: true,
          },
          {
            id: 9,
            enunciado: "Qual é o padrão respiratorio? Cite uma doença",
            imagem: [
              {
                src: "/images/Heyne-Stokes.png",
                alt: "Imagem Da Heyne-Stokes",
              },
            ],
            resposta: "heyne-Stokes. IC, AVC, hipertensão intracraniana. O aumento do CO2 em apneia gera estimulo respiratorio",
            correta: true,
          },
          {
            id: 10,
            enunciado: "Qual é o padrão respiratorio? Cite uma doença",
            imagem: [
              {
                src: "/images/Kussmaul.png",
                alt: "Imagem Kussmaul",
              },
            ],
            resposta: "Kussmaul; Acido diabética; Inspira-apneia-expira-apneia",
            correta: true,
          },
          {
            id: 11,
            enunciado: "Qual é o padrão respiratorio? Cite uma doença",
            imagem: [
              {
                src: "/images/Biot.png",
                alt: "Imagem Biot",
              },
            ],
            resposta: "Biot. IC, AVC, hipertensão intracraniana. Anarquico",
            correta: true,
          },
          {
            id: 12,
            enunciado: "Qual é o padrão respiratorio? Cite uma doença",
            resposta: "Suspirosa. Emocao e ansiedade",
            correta: true,
          },
          {
            id: 13,
            enunciado: "Descreva o padrão respiratório de Gasping e cite uma doença",
            resposta: "Pré-parada respiratória ou pacientes terminais antes do óbito Resp. superficial sem troca gasosa, mov. apenas; Musc. do pescoço e alta do tórax",
            correta: true,
          },
          {
            id: 14,
            enunciado: "Nomeie os tipos de tórax e cite uma doença para cada",
            imagem: [
              {
                src: "/images/Torax, Cifose.png",
                alt: "Imagem Torax, Cifose",
              },
            ],
            resposta: "Normal; Torax em barril: idoso, enfisema, asma; Cifose; Escarvado/ infundibuliforme/sapateiro: congênito; Cariniforme/peito de pombo: raquitismo",
            correta: true,
          },
          {
            id: 15,
            enunciado: "Quando estes estereótipos são encontrados? descreva-os",
            imagem: [
              {
                src: "/images/DPOC.png",
                alt: "Imagem DPOC",
              },
            ],
            resposta: "Imagem à Esq: Pink Puffer: Enfisematoso; Imagem a Dir: Blue Bloater: Bronquíticos crônicos",
            correta: true,
          },
        ],
      },
      {
        nome: "Abdominal",
        questoes: [
          {
            id: 1,
            enunciado: "Qual o nome desse achado?",
            imagem: [
              {
                src: "/images/ARANHAS VASCULAR.png",
                alt: "Imagem ARANHAS VASCULAR",
              },
            ],
            resposta: "ARANHAS VASCULAR / TELEANGIECTASIAS",
            correta: true,
          },
          {
            id: 2,
            enunciado: "Qual o nome desse achado?",
            imagem: [
              {
                src: "/images/CABECA MEDUZA.png",
                alt: "Imagem CABECA MEDUZA",
              },
            ],
            resposta: "Tipo porta : cabeça de medusa ;Causas: cirrose, IC, síndrome nefrótica, tuberculose, tumores",
            correta: true,
          },
          {
            id: 3,
            enunciado: "Qual o nome desse achado?",
            imagem: [
              {
                src: "/images/INFERIOR.png",
                alt: "Imagem INFERIOR",
              },
            ],
            resposta: "Cava inferior: fluxo ascendente; Causas: cirrose, IC, síndrome nefrótica, tuberculose, tumores",
            correta: true,
          },
          {
            id: 4,
            enunciado: "Qual o nome desse achado?",
            imagem: [
              {
                src: "/images/SUPERIOR.png",
                alt: "Imagem SUPERIOR",
              },
            ],
            resposta: "Cava superior: fluxo descendente; Causas: cirrose, IC, síndrome nefrótica, tuberculose, tumores",
            correta: true,
          },
          {
            id: 5,
            enunciado: "Qual o nome desse achado?",
            imagem: [
              {
                src: "/images/SINAL CULLEN.png",
                alt: "Imagem SINAL CULLEN",
              },
            ],
            resposta: "Sinal de cullen: equimose periumbilical, resultante de hemorragia retroperitoneal → pancreatite aguda e gravidez ectópica",
            correta: true,
          },
          {
            id: 6,
            enunciado: "Qual o nome desse achado?",
            imagem: [
              {
                src: "/images/SINAL GREY.png",
                alt: "Imagem SINAL GREY",
              },
            ],
            resposta: "Sinal de Grey-Turner: equimose nos flancos → pancreatite necro-hemorrágica",
            correta: true,
          },
          {
            id: 7,
            enunciado: "O que é esse achado é o que ele significa?",
            resposta: "Nódulo da irmã Maria-José: nódulo umbilical metastático. Sinal de alerta para tumoração maligna intra-abdominal",
            correta: true,
          },
          {
            id: 8,
            enunciado: "DESCREVA OS SINAIS DA SÍNDROME DE CUSHING",
            imagem: [
              {
                src: "/images/SindromeCusting.png",
                alt: "Imagem SindromeCusting",
              },
            ],
            correta: true,
          },
          {
            id: 9,
            enunciado: "Descrevas quais são os ruídos hidroaéreos e seus significados",
            resposta: "Ruidos hidroaéreos: OK.<br/>Silencio abdominal: íleo paralítico; pós-operatório; infecção peritoneal; desequilíbrio hidroeletrolítico.<br/>Sopros (aneurisma): compressões; fístulas arteriovenosas - pontos: aorta, a. renal, a. ilíaca, a. femoral.",
            correta: true,
          },
          {
            id: 10,
            enunciado: "Qual o nome do local e qual percussão esperada?",
            imagem: [
              {
                src: "/images/ESPACO TRAUBE.png",
                alt: "Imagem ESPACO TRAUBE",
              },
            ],
            resposta: "Espaço de traube; Percussao esperada: timpanismo; Percussao macicez ou submacicez indica esplenomegalia",
            correta: true,
          },
          {
            id: 11,
            enunciado: "Qual manobra é usada para evidenciar hérnias?",
            resposta: "A manobra de Valsalva é utilizada para evidenciar hérnias, pois aumenta a pressão intra-abdominal e pode fazer com que a hérnia se projete.",
            correta: true
          },
          {
            id: 12,
            enunciado: "Quais sinais ou manobras são usados para diagnosticar doenças como ascite, pielonefrite, hérnias, peritonite, apendicite, colecistite e pancreatite aguda?",
            resposta: "Para ascite, usamos macicez móvel, semicírculo de Skoda e sinal de piparote (cirrose como principal causa); para pielonefrite, o sinal de Giordano; para hérnias, a manobra de Valsalva; para peritonite, descompressão brusca; para apendicite, sinais de Blumberg, Rovsing, Psoas, Obturador; para colecistite, o sinal de Murphy; e para pancreatite aguda, os sinais de Cullen e Grey-Turner.",
            correta: true
          },
          {
            id: 13,
            enunciado: "Quais manobras são utilizadas para examinar o fígado? Descreva cada uma delas.",
            resposta: "As manobras utilizadas para examinar o fígado incluem: Bimanual (palpação de fígado através de duas mãos, uma na região abdominal superior e outra nas costas para avaliar o tamanho e a consistência); Lemos-Torres (examinar o fígado com um toque mais suave para avaliar dor ou crescimento); Mathie (método de palpação para avaliar a borda do fígado); e o sinal de Torres-Homem (significa abcesso hepático).",
            correta: true
          },
          {
            id: 14,
            enunciado: "Como podemos palpar a esplenomegalia e quais são algumas das suas causas?",
            resposta: "A esplenomegalia pode ser palpada utilizando a manobra de Schuster. O sinal do espaço de Traube pode ser maciço ou submaciço, dependendo do grau de aumento do baço. As causas incluem infecções, parasitoses, doenças hematológicas, metabólicas, colagenoses e cistos.",
            correta: true
          },
          {
            id: 15,
            enunciado: "Quais são os sinais de apendicite?",
            resposta: "Os sinais de apendicite incluem: Blumberg (sensibilidade na descompressão brusca), Rovsing (dor no quadrante inferior direito ao pressionar o quadrante inferior esquerdo), Psoas (dor na flexão da perna direita), Obturador (dor ao rotacionar a perna direita), e Silêncio abdominal (ausência de sons intestinais).",
            correta: true
          },
          {
            id: 16,
            enunciado: "Para que serve cada uma das seguintes manobras: Sinal de Torres-Homem, Sinal de Giordano, Sinal de Jobert, Sinal de Murphy, Sinal de Courvoisier-Terrier, Triade de Charcot?",
            resposta: "Sinal de Torres-Homem: abscesso hepático; Sinal de Giordano: pielonefrite e inflamação retroperitoneal (dor renal ou ureteral); Sinal de Jobert: pneumoperitônio ou perfuração de vísceras; Sinal de Murphy: colecistite aguda; Sinal de Courvoisier-Terrier: neoplasia obstrutiva das vias biliares; Triade de Charcot: colangite.",
            correta: true
          },
          {
            id: 17,
            enunciado: "Explique o que é o Sinal de Rechaço Hepático, Manobra de Mathieu, Manobra de Lemos-Torres e a Posição de Schuster, além do DB (descompressão brusca) em caso de peritonite.",
            resposta: "O Sinal de Rechaço Hepático é utilizado para identificar abcessos hepáticos inflamados. A Manobra de Mathieu ou mão em garra ajuda a identificar a dor associada ao fígado ou a órgãos vizinhos. A Manobra de Lemos-Torres é usada para verificar dor no fígado ou sinais de hepatomegalia. A Posição de Schuster é uma técnica de palpação para detectar esplenomegalia. A DB (descompressão brusca) é usada para avaliar peritonite ao verificar a dor na descompressão súbita.",
            correta: true
          },
          {
            id: 18,
            enunciado: "Descreva os achados do Sinal de Courvoisier-Terrier.",
            resposta: "O Sinal de Courvoisier-Terrier é caracterizado por icterícia, vesícula biliar palpável e indolor, sem irritação peritoneal, o que sugere neoplasia obstrutiva das vias biliares.",
            correta: true
          },
          {
            id: 19,
            enunciado: "Quais órgãos podem ser palpados em situações patológicas?",
            resposta: "Os órgãos que podem ser palpados em situações patológicas incluem a bexiga, apêndice cecal, flexuras do cólon, vesícula biliar e baço.",
            correta: true
          },
          {
            id: 20,
            enunciado: "O que é a Pentade de Reynold? Descreva seus componentes.",
            resposta: "A Pentade de Reynold inclui a tríade de Charcot (febre, icterícia e dor abdominal), além de hipotensão e confusão mental, que são indicativos de colangite grave.",
            correta: true
          },
          {
            id: 21,
            enunciado: "QUAL É ESSE ACHADO? E O QUE ELE INDICA?",
            imagem: [
              {
                src: "/images/PRESENCA DE ABAULAMENTOS.png",
                alt: "Imagem PRESENCA DE ABAULAMENTOS",
              },
            ],
            resposta: " Presença de abaulamentos: indica presença de aneurisma da aorta, cadiomegalia,derrame pericárdio.",
            correta: true,
          },
        ],
      },
      {
        nome: "Cardíaca",
        questoes: [
          {
            id: 1,
            enunciado: "Explique a Turgência Jugular",
            resposta: "Mau funcionamento do átrio direito devido uma dificuldade da passagem do sangue",
            correta: true,
          },
          {
            id: 2,
            enunciado: (
              <div>
                <p>Explique o sinal de Kussmaul e o que indica</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/VvzK6AZIsFw?si=fg1m0DJNruoOVMV-" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "Turgência no momento da inspiração; Pericardite constritiva, insuf. VD, pneumotórax",
            correta: true,
          },
          {
            id: 3,
            enunciado: (
              <div>
                <p>Explique o Sinal de Corrigan e o que indica</p>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/87OuNH6HP04?si=YxF897uhEyG2JI7M" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ),
            resposta: "Também chamado de pulso em martelo d/água; Pulsação visível das A. carótidas Insuf. aórtica grave",
            correta: true,
          },
          {
            id: 4,
            enunciado: "Qual é o achado que ele indica?",
            imagem: [
              {
                src: "/images/XANTOMAS.png",
                alt: "Imagem XANTOMAS",
              },
            ],
            resposta: "Xantomas; Massas de gorduras pelo corpo (dedos, pálpebras, solas dos pés)Indicativos de doença cardiovascular (qnd os níveis de colesterol estão ↑)",
            correta: true,
          },
          {
            id: 5,
            enunciado: "Qual é o achado que ele indica?",
            imagem: [
              {
                src: "/images/BAQUEAMENTO.png",
                alt: "Imagem BAQUEAMENTO",
              },
            ],
            resposta: "Baqueteamento digital / Dedos hipocráticos; condição de troca de O2 ↓↓ DPOC, abcesso pulmonar, IC grave, fibrose pulmonar",
            correta: true,
          },
          {
            id: 6,
            enunciado: "Qual é o achado que ele indica?",
            imagem: [
              {
                src: "/images/SINAL LEVINE.png",
                alt: "Imagem SINAL LEVINE",
              },
            ],
            resposta: "SINAL LEVINE",
            correta: true,
          },
          {
            id: 7,
            enunciado: "Quais são os focos de ausculta cardíaca?",
            imagem: [
              {
                src: "/images/ASCULTA CARDIACA.png",
                alt: "Imagem ASCULTA CARDIACA",
              },
            ],
            resposta: (
              <>
                <strong>Foco pulmonar</strong>: É neste foco em que se têm as condições ideais para a análise dos
                desdobramentos da 2a bulha pulmonar, pois os fenômenos acústicos originados
                pela válvula pulmonar, pouco ou nada se irradiam para os demais focos.
                <br />
                <strong>Foco tricúspide</strong>:  Os fenômenos acústicos dessa valva costumam ser mais bem
                percebidos próximo à área mitral. Na ausculta do coração durante inspiração profunda, obtém-se a intensificação do sopro de origem tricúspide.
                <br />
                <strong>Foco aórtico acessório</strong>:  Muitas vezes é o melhor local para perceber os fenômenos provenientes da valva aórtica
                <br />
              </>
            ),
            correta: true,
          },
          {
            id: 8,
            enunciado: "Qual posição utiliza-se para melhorar a ausculta cardíaca?",
            resposta: "Posição de pachon(Foco mitral)",
            imagem: [
              {
                src: "/images/FOCO MITRAL.png",
                alt: "Imagem FOCO MITRAL"
              },
              {
                src: "/images/HIPOFONETICO.png",
                alt: "Imagem HIPOFONETICO"
              },
            ],
            correta: true,
          },
          {
            "id": 9,
            "enunciado": "Quais são os sopros em sístole? E entre quais bulhas eles ocorrem?",
            "resposta": "Os sopros em sístole incluem insuficiência mitral, insuficiência tricúspide, estenose aórtica e estenose pulmonar. Eles ocorrem entre as bulhas B1 e B2, onde a válvula mitral e tricúspide se fecham (insuficiência), e as válvulas aórtica e pulmonar se abrem (estenose).",
            "correta": true
          },
          {
            "id": 10,
            "enunciado": "Quais são os sopros em diástole? E entre quais bulhas eles ocorrem?",
            "resposta": "Os sopros em diástole incluem insuficiência aórtica, insuficiência pulmonar, estenose mitral e estenose tricúspide. Eles ocorrem entre as bulhas B2 e B1, onde as válvulas aórtica e pulmonar se fecham (insuficiência), e as válvulas mitral e tricúspide se abrem (estenose).",
            "correta": true
          },
          {
            "id": 11,
            "enunciado": "Qual é o sopro abaixo e cite características dele?",
            imagem: [
              {
                src: "/images/INSUFICIENCIA MITRAL.png",
                alt: "Imagem INSUFICIENCIA MITRAL",
              },
            ],
            "resposta": " Insuficiência mitral/tricúspide.O sopro é holossistólico, regurgitante, e é caracterizado pelo som 'TUFFFF TA'.",
            "correta": true
          },
          {
            "id": 12,
            "enunciado": "Qual é o sopro abaixo e cite características dele?",
            imagem: [
              {
                src: "/images/ESTENOSE AORTICA.png",
                alt: "Imagem ESTENOSE AORTICA",
              },
            ],
            "resposta": "Estenose aórtica/pulmonar. O sopro é em diamante, ejetivo, e é caracterizado pelo som 'TUFFF TA'.",
            "correta": true
          },
          {
            "id": 13,
            "enunciado": "Qual é o sopro abaixo e cite características dele?",
            imagem: [
              {
                src: "/images/ESTENOSE MITRAL.png",
                alt: "Imagem ESTENOSE MITRAL",
              },
            ],
            "resposta": "Estenose mitral/tricúspide. O sopro é em ruflar, e é caracterizado pelo som 'FUUU TA'.",
            "correta": true
          },
          {
            "id": 14,
            "enunciado": "Qual é o sopro abaixo e cite características dele?",
            imagem: [
              {
                src: "/images/INSUFICIENCIA AORTICA.png",
                alt: "Imagem INSUFICIENCIA AORTICA",
              },
            ],
            "resposta": "Insuficiencia aórtica/pulmonar. O sopro é regurgitante, aspirativo, decrescente, e é caracterizado pelo som 'TUM TAAFFFF'.",
            "correta": true
          },
          {
            "id": 15,
            "enunciado": "Qual achado patológico vemos na imagem?",
            imagem: [
              {
                src: "/images/TURGENCIA JUGULAR.png",
                alt: "Imagem TURGENCIA JUGULAR",
              },
            ],
            "resposta": "TURGENCIA JUGULAR",
            "correta": true
          },
          {
            "id": 16,
            "enunciado": "QUAL MANOBRA DIFERENCIA ESTENOSE AÓRTICA DA INSUFICIÊNCIA MITRAL?",
            "resposta": "A manobra de handgrip é útil para diferenciar estenose aórtica de insuficiência mitral. Na Estenose aórtica, a manobra de handgrip reduz a intensidade do sopro, enquanto na insuficiência mitral a intensidade aumenta.",
            "correta": true
          },
          {
            "id": 17,
            "enunciado": "Qual é essa manobra e para que serve?",
            imagem: [
              {
                src: "/images/HANDGRIP.png",
                alt: "Imagem HANDGRIP",
              },
            ],
            "resposta": "HANDGRIP",
            "correta": true
          },
          {
            "id": 18,
            "enunciado": "Qual o pulso abaixo?",
            imagem: [
              {
                src: "/images/PULSO ALTERNANTE.png",
                alt: "Imagem PULSO ALTERNANTE",
              },
            ],
            "resposta": "PULSO ALTERNANTE",
            "correta": true
          },
          {
            "id": 19,
            "enunciado": "Qual o pulso abaixo?",
            imagem: [
              {
                src: "/images/BISFERIENS.png",
                alt: "Imagem BISFERIENS",
              },
            ],
            "resposta": "BISFERIENS",
            "correta": true
          },
        ],
      },
    ],
  },
};
