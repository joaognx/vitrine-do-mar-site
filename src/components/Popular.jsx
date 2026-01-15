import "./Popular.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const categorias = [
  { id: 1, nome: "Biquínis", image: "logobege.jpeg", link: "/categoria/biquinis" },
  { id: 2, nome: "Maiôs", image: "logoazul.jpeg", link: "/categoria/maios" },
  { id: 3, nome: "Vestidos", image: "logobege.jpeg", link: "/categoria/vestidos" },
  { id: 4, nome: "Masculino", image: "logoazul.jpeg", link: "/categoria/masculino"}
];

export default function Popular() {

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=4')
            .then(res => res.json())
            .then(json => {
                setCategories(json)
                setLoading(false);
            })
            .catch(err => console.error("Erro ao carregar novidades:", err))
    }, [])

  return (
    <section className="popular-section">
      <h2 className="titulo-secao">POPULARES</h2>
      <div className="popular-grid">
        {categories.map((item) => (
          <article key={item.id} className="popular-card">
            <img src={item.image} alt={item.name} />
            <div className="overlay">
              <h3>{item.name}</h3>
              <button className="btn-ver-mais">
                <Link to={`/categoria/${item.name}`}>VER MAIS</Link></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}