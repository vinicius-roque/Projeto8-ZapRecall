import React from "react";
import setinha from "../assets/setinha.png";

export default function Perguntas(
    {
        index,
        cardConteudo,
        setCardConteudo,
        cards,
        resultados,
        setResultados,
        cardSelecionado,
        setCardSelecionado
    }
) {

    const [virado, setVirado] = React.useState(true);

    return (
        <>
            {virado 
                ? <CardVirado index={index} resultados={resultados} setVirado={setVirado} cardSelecionado={cardSelecionado} setCardSelecionado={setCardSelecionado} /> 
                : <Card cards={cards} cardConteudo={cardConteudo} setCardConteudo={setCardConteudo} resultados={resultados} setResultados={setResultados} setVirado={setVirado} setCardSelecionado={setCardSelecionado} />
            }
        </>      
    )
}

function CardVirado({index, resultados, setVirado, cardSelecionado, setCardSelecionado}) {
    function definirIcone() {
        switch (resultados[index-1]) {
            case "certo":
                return "checkmark-circle";
            case "quase":
                return "help-circle";
            case "errado":
                return "close-circle";
            default:
                return "play-outline";
        }
    }
    const icone=definirIcone();

    function virarCard() {
        if (!cardSelecionado) {
            setVirado(false);
            setCardSelecionado(true);
        }
    }

    return (
        <li key={index} 
          className={`pergunta ${resultados[index-1]}`}
          onClick={() => resultados[index-1] ? null : virarCard() }
        >
            <h3>Pergunta {index}</h3>
            <ion-icon name={icone}></ion-icon>
        </li>
    )
}

function Card({
    cardConteudo,
    setCardConteudo,
    cards,
    resultados,
    setResultados,
    setVirado,
    setCardSelecionado
}) {
    const resposta = cards[cardConteudo].resposta;
    const pergunta = cards[cardConteudo].pergunta;
    const [mostrarResposta, setMostrarResposta] = React.useState(false);


    function respostaErrada () {
        const novosResultados = [...resultados];
        novosResultados.push("errado");
        setResultados(novosResultados);
    }

    function respostaQuase () {
        const novosResultados = [...resultados];
        novosResultados.push("quase");
        setResultados(novosResultados);
    }

    function respostaCerta () {
        const novosResultados = [...resultados];
        novosResultados.push("certo");
        setResultados(novosResultados);
    }

    function virarCard() {
        setVirado(true);
        setCardSelecionado(false);
        setCardConteudo(cardConteudo + 1);
    }

    const zaps = (
        <>
            <div className="botoesZap">
                <button name="certo" 
                        onClick={() => {respostaCerta(); virarCard()}}
                >Zap!</button>
                <button name="quase" 
                    onClick={() => {respostaQuase(); virarCard()}}
                >Quase não lembrei</button>
                <button name="errado" 
                    onClick={() => {respostaErrada(); virarCard()}}
                >Não lembrei</button>
            </div>
        </>
    );

    return (
        <div className="card">
            <p>{mostrarResposta ? resposta : pergunta}</p>
            {mostrarResposta
                ? zaps
                : <img src={setinha} alt="arrow to flip cards" onClick={() => setMostrarResposta(true)} />
            }
        </div>
    )
}