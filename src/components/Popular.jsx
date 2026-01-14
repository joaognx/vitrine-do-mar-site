import "./Popular.css";

const categorias = [
  { id: 1, nome: "Biquínis", image: "logobege.jpeg" },
  { id: 2, nome: "Maiôs", image: "logoazul.jpeg" },
  { id: 3, nome: "Vestidos", image: "logobege.jpeg" },
  { id: 4, nome: "Masculino", image: "logoazul.jpeg" }
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
              <button className="btn-ver-mais">VER MAIS</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}