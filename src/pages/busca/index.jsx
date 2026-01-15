import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ListaProdutos from '../../components/ListaProdutos.jsx';
import Topo from '../../components/Topo.jsx';
import Rodape from '../../components/Rodapé.jsx';
import "./style.css"
export default function PaginaBusca() {
  const { termo } = useParams(); 
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch((()=> setProdutos([])))
  }, []);

  
  const resultados = produtos.filter(p => 
    p.title.toLowerCase().includes(termo.toLowerCase())
  );

    useEffect(() => {
    document.title = `Resultado de buscas para ${termo}`;
  }, [termo]); 
  
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