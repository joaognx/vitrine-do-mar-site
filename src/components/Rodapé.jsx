import "./Rodapé.css";
import { Link } from "react-router-dom";

export default function Rodape() {

    const ajuda = [
        {nome: "Sobre nós", link: "/sobre"},
        {nome: "Trocas e devoluções", link: "/troca"},
        {nome: "Entre em contato", link: "/ctt"},
        {nome: "Política de privacidade", link: "/priv"}
    ];

    const contatos = [
        { nome: "Whatsapp", link: "https://api.whatsapp.com/send/?phone=5599984579458&text=Ol%C3%A1%2C+Vitrine+do+Mar&type=phone_number&app_absent=0" },
        { nome: "Instagram", link: "https://www.instagram.com/lojavitrinedomar/" }
    ];

    return (
        <footer className="menu-ajuda">

            <h2>Dúvidas</h2>
            <ul>
                {ajuda.map((help, i) => (
                    <li key={i} className="tipo-ajuda">
                        <Link to={help.link} className="tipo">{help.nome}</Link>
                    </li>
                ))}
            </ul>

            <h2>Permaneça conectado</h2>
            <ul>
                {contatos.map((cont, i) => (
                    <li key={i} className="conexao">
                        <a 
                            href={cont.link} 
                            className="contato"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {cont.nome}
                        </a>
                    </li>
                ))}
            </ul>
            

        </footer>
    );
}
