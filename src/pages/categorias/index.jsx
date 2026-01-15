import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Topo from '../../components/Topo';
import Rodape from '../../components/Rodapé';
import ListaProdutos from '../../components/ListaProdutos.jsx';
import Filtros from '../../components/Filtros.jsx';
import './style.css';
const categorias = {
  biquinis: "Biquínis",
  maios: "Maiôs",
  acessorios: "Acessórios",
  infantil: "Infantil",
  vestidos: "Vestidos",
  masculino: "Masculino",
};

function Categoria() {
  const { nome } = useParams();
  
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')

        .then(res => res.json())
        .then(data => {setProdutos(data); setLoading(false);})
        .catch((()=> setProdutos([])))
  }, [])

  const produtosFiltrados = produtos

  .filter(p => (categoria ? p.category ===  categoria : true))

  const chave = nome.toLowerCase();
  const nomeFormatado =
    categorias[chave] ||
    nome.charAt(0).toUpperCase() + nome.slice(1);

  useEffect(() => {
    document.title = `Vitrine do Mar - ${nomeFormatado}`;
  }, [nomeFormatado]); 
  
if (loading) {
    return (
        <section className="nov loading-container">
            <h2 className="tit-nov">CARREGANDO...</h2>
            <div className="skeleton-wrapper">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-btn"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

  return (
    <div className="home">
    <Topo/>
      <main className='container-cat'>

        <Filtros
        
        produtos = {produtos}
        categoria = {categoria}
        setCategoria = {setCategoria}/>

        <ListaProdutos produtos = {produtosFiltrados}/>

      </main>

    <Rodape/>
      
    </div>
  );
}

export default Categoria;
