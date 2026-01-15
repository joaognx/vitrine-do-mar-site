import "./ListaProdutos.css"
import "./CardProduto.jsx"
import CardProduto from "./CardProduto.jsx"

export default function ListaProdutos({ produtos }){

    if(produtos.length === 0){
        return <p className="mensagem"> Nenhum produto encontrado. </p>
    }
    
    return(

        <section className="produtos">
            
            {produtos.map(produto => (
                <CardProduto key= {produto.id} produto ={produto}/>
            ))}
            
        </section>
    )
}