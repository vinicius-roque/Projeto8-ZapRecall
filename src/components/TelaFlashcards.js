import logoPequeno from '../assets/logo-pequeno.png';
import vetor from '../assets/Vector.png';

export default function TelaFlashcards() {
    return (
        <div>
            <div className="topo">
                <img src={logoPequeno} alt=""/>
                <h2>ZapRecall</h2>
            </div>
            <div className="perguntas">
                <p>Pergunta 1</p>            
                <img src={vetor} />
            </div>
            <div className="perguntas">
                <p>Pergunta 2</p>            
                <img src={vetor} />
            </div>
            <div className="perguntas">
                <p>Pergunta 3</p>            
                <img src={vetor} />
            </div>
            <div className="perguntas">
                <p>Pergunta 4</p>            
                <img src={vetor} />
            </div>
            <div className="borda">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    );
}