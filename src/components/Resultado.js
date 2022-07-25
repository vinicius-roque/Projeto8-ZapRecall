export default function Resultado({ numeroCards, resultados }) {
    let resultadosCertos = 0;

    resultados.map(resultado => (resultado === "certo" || resultado === "quase") ? resultadosCertos ++ : null);

    return (
        <footer className="resultado">
            {(numeroCards === resultados.length)
              ? <MensagemResultado resultadosCertos={resultadosCertos} perguntasComResultado={numeroCards} />
              : null
            }
            <p>{resultados.length}/{numeroCards} CONCLUÍDOS</p>
            <div>
                {resultados.map((resultado) => {
                    if (resultado === "certo") {
                        return <ion-icon name="checkmark-circle" style={{ color: "#2FBE34"}}></ion-icon>
                    } else if (resultado === "quase") {
                        return <ion-icon name="help-circle" style={{ color: "#FF922E"}}></ion-icon>
                    } else if (resultado === "errado") {
                        return <ion-icon name="close-circle" style={{ color: "#FF3030"}}></ion-icon>
                    } else {
                        return null
                    }
                })}
            </div>
        </footer>
    )
}

function MensagemResultado({ resultadosCertos, perguntasComResultado }) {
    const sucesso = {
        elogio: "🥳 Parabéns!",
        mensagem: "Você não esqueceu de nenhum flashcard!"
    }
    const fracasso = {
        elogio: "😥 Putz...",
        mensagem: "Ainda faltam alguns... Mas não desanime!"
    }

    const mensagem = (resultadosCertos === perguntasComResultado) ? sucesso : fracasso;

    return (
        <div className="situacaoResultado">
            <b>{mensagem.elogio}</b>
            <p>{mensagem.mensagem}</p>
        </div>
    )
}