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
    // Definimos loading como true sempre que o termo muda
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
  }, [termo]); 


  const resultados = produtos.filter(p => 
    p.title.toLowerCase().includes(termo.toLowerCase()) ||
    p.category.name.toLowerCase().includes(termo.toLowerCase()) 
  );

  useEffect(() => {
    document.title = `Resultado de buscas para ${termo}`;
  }, [termo]); 

  if (loading) {
    return (
        <>
          <Topo />
          <section className="nov loading-container">
              <h2 className="tit-nov">BUSCANDO...</h2>
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
    <>
      <Topo />
      <main className="container-busca">
        <h2 className="titulo-busca">Resultados para: <span>"{termo}"</span></h2>
        
        {resultados.length > 0 ? (
          <ListaProdutos produtos={resultados} />
        ) : (
          <div className="sem-resultados">
            <p>Poxa, não encontramos nada para "<strong>{termo}</strong>".</p>
            <p>Tente usar palavras mais genéricas ou verifique a ortografia.</p>
          </div>
        )}
      </main>
      <Rodape />
    </>
  );
}