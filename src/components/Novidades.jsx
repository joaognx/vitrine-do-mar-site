import "./Novidades.css";
import { useRef } from "react";

export default function Novidades() {
    const carrossel = useRef(null); 

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    };

    const categorias = [
        { id: 1, nome: "Biquínis", image: "logobege.jpeg", preco: "R$50" },
        { id: 2, nome: "Maiôs", image: "logoazul.jpeg", preco: "R$50" },
        { id: 3, nome: "Fitness", image: "logobege.jpeg", preco: "R$50" },
        { id: 4, nome: "Masculino", image: "logoazul.jpeg", preco: "R$50" },
        { id: 5, nome: "Biquínis", image: "logobege.jpeg", preco: "R$50" },
        { id: 6, nome: "Maiôs", image: "logoazul.jpeg", preco: "R$50" },
        { id: 7, nome: "Fitness", image: "logobege.jpeg", preco: "R$50" },
        { id: 8, nome: "Masculino", image: "logoazul.jpeg", preco: "R$50" }
    ];


    return (
        <section className="nov">
            <h2 className="tit-nov">NOVIDADES</h2>
            
            <div className="container-carrossel">
                {/* Botão Esquerdo */}
                <button className="seta seta-esq" onClick={handleLeftClick}>&#10094;</button>

                <ul className="novidades" ref={carrossel}>
                    {categorias.map((item) => (
                        <li key={item.id} className="itens">
                            <img src={item.image} alt={item.nome} className='teste' />
                            <div className="overlay-nov">
                                <h3>{item.nome}</h3>
                                <h4>{item.preco}</h4>
                                <button className="btn-comprar">Comprar</button>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Botão Direito */}
                <button className="seta seta-dir" onClick={handleRightClick}>&#10095;</button>
            </div>
        </section>
    );

}