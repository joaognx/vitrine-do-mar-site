import './style.css'
import Rodapé from '../../components/Rodapé.jsx'
import Topo from '../../components/Topo.jsx'
import Filtros from '../../components/Filtros.jsx'
import { StrictMode } from 'react'

export default function Biquinis() {
    return (
        <StrictMode>
            <Topo />
            <main className="camisas-page">

                <div className="breadcrumb">
                    início • masculino • <strong>camisas masculinas</strong>
                </div>

                <h1 className="titulo">Camisas Masculinas</h1>

                <section className="conteudo">
                    <Filtros />
                </section>

            </main>
            <Rodapé />
        </StrictMode>
    )
}
