import './style.css'
import Rodapé from '../../components/Rodapé.jsx'
import Topo from '../../components/Topo.jsx'
import { StrictMode } from 'react'

export default function Privacidade() {
    return (
        <StrictMode>
            <Topo />

             <main className="politica">
        <h1>Política de Privacidade</h1>

        <p>
          A sua privacidade é importante para nós. É política da <strong>Vitrine do Mar</strong> respeitar
          a sua privacidade em relação a qualquer informação sua que possamos coletar no site
          Vitrine do Mar, e em outros sites que possuímos e operamos.
        </p>

        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer
          um serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento.
          Também informamos por que estamos coletando e como essas informações serão utilizadas.
        </p>

        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
          solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
          para evitar perdas, roubos ou acessos não autorizados.
        </p>

        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
          exceto quando exigido por lei.
        </p>

        <h2>Links Externos</h2>
        <p>
          Nosso site pode conter links para sites externos que não são operados por nós. Não temos
          controle sobre o conteúdo e práticas desses sites e não podemos assumir responsabilidade
          por suas políticas de privacidade.
        </p>

        <h2>Publicidade e Cookies</h2>
        <p>
          Utilizamos cookies para melhorar sua experiência. Alguns serviços de publicidade podem
          usar cookies para exibir anúncios mais relevantes, sempre respeitando sua privacidade.
        </p>

        <h2>Compromisso do Usuário</h2>
        <ul>
          <li>Não praticar atividades ilegais ou contrárias à boa-fé.</li>
          <li>Não divulgar conteúdo ofensivo, discriminatório ou ilegal.</li>
          <li>Não causar danos aos sistemas da Vitrine do Mar ou de terceiros.</li>
        </ul>

        <h2>Contato</h2>
        <p>
          Caso deseje exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados,
          entre em contato pelo e-mail:
          <strong> vitrinedomar@gmail.com</strong>
        </p>

        <p className="data">
          Esta política é efetiva a partir de <strong>08 de janeiro de 2026</strong>.
        </p>
      </main>


            <Rodapé />
        </StrictMode>
    )
}
