import './style.css'
import Rodapé from '../../components/Rodapé.jsx'
import Topo from '../../components/Topo.jsx'
import { StrictMode } from 'react'

export default function Contato() {
  return (
    <StrictMode>
      <Topo />

      <div className="sobre">
        <h2>Sobre nós</h2>

        <p>
          A Vitrine do Mar nasceu em 2021, inicialmente como uma loja online,
          movida pelo desejo de levar estilo, conforto e a essência do verão para
          o dia a dia das pessoas. Desde o começo, nosso propósito sempre foi
          oferecer peças que valorizam a beleza, a liberdade e a autenticidade
          de cada cliente.
        </p>

        <p>
          Com o crescimento da marca e a confiança conquistada ao longo do tempo,
          em 2023 demos um passo muito importante: a inauguração da nossa loja
          física, aproximando ainda mais a Vitrine do Mar de quem sempre acreditou
          no nosso trabalho.
        </p>

        <p>
          Hoje, somos muito mais do que uma loja de biquínis. Trabalhamos com uma
          variedade de produtos que vão além da moda praia, como acessórios de
          praia, vestidos, peças casuais e outros itens, sempre escolhidos com
          cuidado, qualidade e atenção às tendências.
        </p>

        <p>
          A Vitrine do Mar é feita para quem ama o clima do mar, do sol e da
          liberdade — seja na praia ou na cidade. Nosso compromisso é oferecer
          uma experiência acolhedora, produtos de qualidade e um atendimento que
          faça você se sentir em casa.
        </p>
      </div>

      <Rodapé />
    </StrictMode>
  )
}
