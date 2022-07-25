import logo from "../assets/logo.png";

export default function BoasVindas({ setComeco }) {
    return (
        <div className="boasVindas">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setComeco(true)}>Iniciar Recall!</button>
        </div>
    )
}