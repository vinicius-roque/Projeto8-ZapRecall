import React from 'react';
import BoasVindas from "./BoasVindas";
import TelaFlashcards from "./TelaFlashcards";
import './style.css';
import './reset.css';

export default function App() {
    const [tela, setTela] = React.useState(true);
    
    return (
        <>
            <div>
                {tela ? (
                    <div className="centralizar">
                        <BoasVindas />
                        <div className="botao" onClick={() => setTela(!tela)}>Iniciar Recall!</div>
                    </div>
                ) : (
                    <TelaFlashcards />
                )}
            </div>
        </>
    );
}