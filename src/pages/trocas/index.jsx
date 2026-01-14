import './style.css'
import Rodapé from '../../components/Rodapé.jsx'
import Topo from '../../components/Topo.jsx'
import { StrictMode } from 'react'

export default function Trocas() {
  return (
    <StrictMode>
      <Topo />

      <div className="troca">
        <h2>Trocas e Devoluções</h2>

        <p>
          A escolha do tamanho, modelo e estampa dos biquínis, maiôs e saídas de
          praia é de responsabilidade do cliente. Por se tratarem de produtos de
          uso íntimo, não realizamos trocas de peças que tenham sido usadas, por
          questões de higiene e segurança.
        </p>

        <p>
          Por isso, recomendamos atenção total às tabelas de medidas e descrições
          disponíveis na página de cada produto. Em caso de dúvidas sobre
          tamanho, modelagem ou ajuste, nossa equipe está disponível para
          atendimento via WhatsApp ou Instagram e ficará feliz em ajudar na
          escolha ideal.
        </p>

        <p className="alerta">
          Não realizamos trocas de brindes.
        </p>

        <p>
          O custo do frete para troca ou devolução é de responsabilidade do
          cliente, exceto em casos de defeito de fabricação ou erro de envio.
        </p>

        <p>
          O frete do novo envio, após o recebimento da troca, será de
          responsabilidade da Vitrine do Mar.
        </p>

        <p>
          Em caso de devolução e cancelamento de um pedido já enviado, o
          reembolso será referente apenas ao valor do produto, sendo descontado o
          valor do frete.
        </p>

        <p>
          Não nos responsabilizamos por danos causados por uso inadequado,
          lavagem incorreta ou manuseio indevido. Sempre consulte as instruções
          de cuidado descritas no produto.
        </p>

        <p className="contato">
          Caso sua solicitação esteja de acordo com nossa política, entre em
          contato com nosso suporte via WhatsApp: <strong>(99) 98457-9458</strong>,
          informando:
        </p>

        <ul className="lista-troca">
          <li>Nome completo</li>
          <li>Número do pedido</li>
          <li>Data da compra</li>
          <li>Nome do(s) produto(s)</li>
          <li>Fotos nítidas do produto</li>
          <li>Motivo da troca ou devolução</li>
        </ul>
      </div>

      <Rodapé />
    </StrictMode>
  )
}
