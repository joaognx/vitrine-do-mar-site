import "./Novidades.css";
import { useRef, useState, useEffect } from "react";

export default function Novidades() {
    const carrossel = useRef(null);
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
            .then(res => res.json())
            .then(json => {
                /*const ordenados = json.sort((a, b) => b.id - a.id);
                const novidades = ordenados.slice(0, 8);*/
                setProdutos(json)
                setLoading(false);
            })
            .catch(err => console.error("Erro ao carregar novidades:", err))
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    };

    if (loading) return <div className="loading">Carregando novidades...</div>;
    return (
        <section className="nov">
            <h2 className="tit-nov">NOVIDADES</h2>

            <div className="container-carrossel">
                {/* Botão Esquerdo */}
                <button className="seta seta-esq" onClick={handleLeftClick}>&#10094;</button>

                <ul className="novidades" ref={carrossel}>
                    {produtos.map((item) => (
                        <li key={item.id} className="itens">
                            <img src={item.images} alt={item.title} className='teste' />
                            <div className="overlay-nov">
                                <h3>{item.title}</h3>
                                <h4>R${item.price.toFixed(2)}</h4>
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