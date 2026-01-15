import "./Popular.css";
import { Link } from "react-router-dom";

const categorias = [
  { id: 1, nome: "Biquínis", image: "logobege.jpeg", link: "/categoria/biquinis" },
  { id: 2, nome: "Maiôs", image: "logoazul.jpeg", link: "/categoria/maios" },
  { id: 3, nome: "Vestidos", image: "logobege.jpeg", link: "/categoria/vestidos" },
  { id: 4, nome: "Masculino", image: "logoazul.jpeg", link: "/categoria/masculino"}
];

export default function Popular() {
  return (
    <section className="popular-section">
      <h2 className="titulo-secao">POPULARES</h2>
      <div className="popular-grid">
        {categorias.map((item) => (
          <article key={item.id} className="popular-card">
            <img src={item.image} alt={item.nome} />
            <div className="overlay">
              <h3>{item.nome}</h3>
              <button className="btn-ver-mais">
                <Link to={item.link}>VER MAIS</Link></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}