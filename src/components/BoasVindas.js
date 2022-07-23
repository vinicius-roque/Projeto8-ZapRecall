import logo from '../assets/logo.png';
import './style.css';

export default function BoasVindas({setIsStarted}) {
    
    return (
        <div className="boasVindas">
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={() => setIsStarted(true)}>Iniciar Recall!</button>
        </div>
    );
}