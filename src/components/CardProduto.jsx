import './CardProduto.css';

export default function CardProduto({produto}) {
    return (


        <div className="card-produto">
            <img src={produto.image} alt ={produto.title}/>
            
            <h2>{produto.title}</h2>

            <span className='preco'>R$ {produto.price.toFixed(2)}</span>

            <button >Adicionar ao carirnho</button>
        </div>
              

 )
}