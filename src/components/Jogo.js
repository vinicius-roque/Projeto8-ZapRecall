import React from "react";
import Topo from "./Topo";
import Perguntas from "./Perguntas";
import Resultados from "./Resultados";

export default function Jogo() {
    const cards = [
        {
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta: "O React é:",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta: "Componentes devem iniciar com:",
            resposta: "letra maiúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressões"
        },
        {
            pergunta: "O ReactDOM nos ajuda:",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta: "Usamos o npm para:",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            pergunta: "Usamos props para:",
            resposta: "passar diferentes informações para componentes"
        },
        {
            pergunta: "Usamos estado(state) para:",
            resposta: "dizer para o React quais informações, quando atualizadas, devem renderizar a tela novamente"
        }
    ];

    function embaralharPerguntas(array) {
        array.sort(() => Math.random() - 0.5);
    }

    embaralharPerguntas(cards)

    const [resultados, setResultados] = React.useState([]);
    const [cardSelecionado, setCardSelecionado] = React.useState(false);

    return (
        <div className="jogo">
            <Topo />
            <ul>
                {cards.map((card, index) => {
                    return <Perguntas
                        index={index + 1}
                        pergunta={card.pergunta}
                        resposta={card.resposta}
                        resultados={resultados}
                        setResultados={setResultados}
                        cardSelecionado={cardSelecionado}
                        setCardSelecionado={setCardSelecionado}
                    />
                })}
            </ul>

            <Resultados numeroCards={cards.length} resultados={resultados} />
        </div>
    );
}