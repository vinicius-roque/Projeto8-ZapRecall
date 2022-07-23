import logoPequeno from './assets/logo-pequeno.png';

export default function Topo() {
    return (
        <div className="topo">
            <img src={logoPequeno} alt="logoPequeno" />
            <h1>ZapRecall</h1>
        </div>
    );
}