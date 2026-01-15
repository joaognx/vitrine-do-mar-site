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

// ... seus imports

export default function Categoria() {
  const { nome } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(""); 
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

  const produtosFiltrados = produtos.filter(p => {
    return p.category && (
      p.category.name.toLowerCase() === nome.toLowerCase()
    );
  });

  if (loading) {
    return (
      <>
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
      </>
    );
  }

  return (
    <div className="home">
      <Topo />
      <main className='container-cat'>
        <Filtros
          produtos={produtos}
          categoria={typeof categoriaSelecionada === 'object' ? categoriaSelecionada.name : categoriaSelecionada}
          setCategoria={setCategoriaSelecionada}
        />
        
        <h1 className="titulo-categoria">{nomeExibicao}</h1>

        <ListaProdutos produtos={produtosFiltrados} />
      </main>
      <Rodape />
    </div>
  );
}