import "./Novidades.css";
import { useRef, useEffect, useState } from "react";

export default function Novidades() {
  const carrossel = useRef(null);

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/carrossel?populate=*")
      .then(res => res.json())
      .then(data => {
        console.log(data.data); 
        setFotos(data.data);
      });
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  return (
    <section className="nov">
      <h2 className="tit-nov">NOVIDADES</h2>

      <div className="container-carrossel">
        <button className="seta seta-esq" onClick={handleLeftClick}>
          &#10094;
        </button>

        <ul className="novidades" ref={carrossel}>
          {produtos.map((produto) => {
            const imagem = produto.foto?.[0]?.url;

            return (
              <li key={produto.id} className="itens">
                {imagem && (
                  <img
                    className="teste"
                    src={`http://localhost:1337${imagem}`}
                    alt={produto.nome}
                  />
                )}

                <div className="overlay-nov">
                  <h3>{produto.nome}</h3>
                  <h4>R$ {produto.preco}</h4>
                  <button className="btn-comprar">Comprar</button>
                </div>
              </li>
            );
          })}
        </ul>

        <button className="seta seta-dir" onClick={handleRightClick}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
