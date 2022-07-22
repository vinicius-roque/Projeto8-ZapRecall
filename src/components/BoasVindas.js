import logo from '../assets/logo.png';
import './style.css';

export default function BoasVindas() {
    return (
        <div className="boasVindas">
            <img src={logo} alt=""/>
            <h1>ZapRecall</h1>
            <div className="botao">Iniciar Recall!</div>
        </div>
    );
}