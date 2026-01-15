import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ListaProdutos from '../../components/ListaProdutos.jsx';
import Topo from '../../components/Topo.jsx';
import Rodape from '../../components/Rodapé.jsx';
import "./style.css"
export default function PaginaBusca() {
  const { termo } = useParams(); 
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {setProdutos(data); setLoading(false);})
      .catch((()=> setProdutos([])))
  }, []);

  
  const resultados = produtos.filter(p => 
    p.title.toLowerCase().includes(termo.toLowerCase())
  );

    useEffect(() => {
    document.title = `Resultado de buscas para ${termo}`;
  }, [termo]); 

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
  <>
    <Topo />
    <main className="container-busca">
      <h2>Resultados para: <span>"{termo}"</span></h2>
      
      {resultados.length > 0 ? (
        <ListaProdutos produtos={resultados} />
      ) : (
        <div className="sem-resultados">
          <p>Nenhum produto encontrado para esta busca.</p>
        </div>
      )}
    </main>
    <Rodape />
  </>
);
}