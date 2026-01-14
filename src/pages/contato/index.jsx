import './style.css'
import Rodapé from '../../components/Rodapé.jsx'
import Topo from '../../components/Topo.jsx'
import { StrictMode } from 'react'

export default function Contato() {
    return (
        <StrictMode>
            <Topo />

            <div className="contato">
                <h2>Contato</h2>

                <div className="contato-container">

                    {/* COLUNA ESQUERDA */}
                    <div className="contato-info">
                        <p>📞 (99) 98457-9458</p>
                        <p>✉️ vitrinedomar@gmail.com</p>
                        <p>📍 Avenida Manoel Matias, Bernardo do Mearim</p>
                    </div>

                    {/* COLUNA DIREITA */}
                    <form className="contato-form">
                        <label>Nome completo</label>
                        <input type="text" />

                        <label>E-mail</label>
                        <input type="email" />

                        <label>Telefone</label>
                        <input type="tel" />

                        <label>Mensagem</label>
                        <textarea rows="5"></textarea>

                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </div>


            <Rodapé />
        </StrictMode>
    )
}
