import React from 'react';
import BoasVindas from "./BoasVindas";
import Perguntas from "./Perguntas";
import './style.css';
import './reset.css';

export default function App() {
    const [isStarted, setIsStarted] = React.useState(false);
    
    return (
        <>
            {isStarted ? <Perguntas /> : <BoasVindas setIsStarted={setIsStarted}/>}
        </>
    );
}