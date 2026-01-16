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


export default function Categoria() {
  const { nome } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(""); 
  const [minPreco, setMinPreco] = useState("");
  const [maxPreco, setMaxPreco] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(() => {
        setProdutos([]);
        setLoading(false);
      });
  }, [nome]); 

  const chave = nome ? nome.toLowerCase() : "";
  const nomeExibicao = categorias[chave] || nome;

  const produtosExibidos = produtos.filter(p => {
    const matchCategoria = p.category && (
      p.category.id.toString() === nome || 
      p.category.name.toLowerCase() === nome.toLowerCase()
    );

    const matchMin = minPreco === "" || p.price >= parseFloat(minPreco);

    
    const matchMax = maxPreco === "" || p.price <= parseFloat(maxPreco);

    return matchCategoria && matchMin && matchMax;
  });

  if (loading) {
    return (
      <div className="home">
        <Topo /> 
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
        <Rodape />
      </div>
    );
  }

  return (
    <div className="home">
      <Topo />
      <main className='container-cat'>
        <Filtros
          produtos={produtos}
          categoria={categoriaSelecionada}
          setCategoria={setCategoriaSelecionada}
          minPreco={minPreco}  
          setMinPreco={setMinPreco}
          maxPreco={maxPreco}
          setMaxPreco={setMaxPreco}
        />
        
        <h1 className="titulo-categoria">{nomeExibicao}</h1>

        {/* Usamos a lista que passou por todos os filtros */}
        <ListaProdutos produtos={produtosExibidos} />
      </main>
      <Rodape />
    </div>
  );
}