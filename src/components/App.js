import React from 'react';
import BoasVindas from "./BoasVindas";
import Jogo from './Jogo';
import './style.css';
import './reset.css';

export default function App() {
    const [comeco, setComeco] = React.useState(false);
    
    return (
        <>
            {comeco ? <Jogo /> : <BoasVindas setComeco={setComeco}/>}
        </>
    );
}