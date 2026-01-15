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
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')

        .then(res => res.json())
        .then(data => setProdutos(data))
        .catch((()=> setProdutos([])))
  }, [])

  const produtosFiltrados = produtos

  .filter(p => p.title.toLowerCase().includes(busca.toLowerCase()))
  .filter(p => (categoria ? p.category ===  categoria : true))

  const chave = nome.toLowerCase();
  const nomeFormatado =
    categorias[chave] ||
    nome.charAt(0).toUpperCase() + nome.slice(1);

  useEffect(() => {
    document.title = `Vitrine do Mar - ${nomeFormatado}`;
  }, [nomeFormatado]); 

  return (
    <div className="home">
    <Topo busca={busca} setBusca={setBusca}/>
      <main className='container-cat'>

        <Filtros
        
        produtos = {produtos}
        busca = {busca}
        setBusca= {setBusca}
        categoria = {categoria}
        setCategoria = {setCategoria}/>

        <ListaProdutos produtos = {produtosFiltrados}/>

      </main>

    <Rodape/>
      
    </div>
  );
}

export default Categoria;
