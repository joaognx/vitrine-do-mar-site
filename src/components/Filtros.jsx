import './Filtros.css'

export default function Filtros() {
  return (
    <aside className="filtros">
      
      <select className="ordenar">
        <option>Ordenar</option>
        <option>Menor preço</option>
        <option>Maior preço</option>
      </select>

      <div className="filtro-grupo">
        <h3>Departamento</h3>
        <label><input type="checkbox" /> feminino</label>
        <label><input type="checkbox" /> masculino</label>
      </div>

      <div className="filtro-grupo">
        <h3>Estamparia</h3>
        <label><input type="checkbox" /> estampado</label>
        <label><input type="checkbox" /> liso</label>
      </div>

      <div className="filtro-grupo">
        <h3>Gênero</h3>
        <label><input type="checkbox" /> feminino</label>
        <label><input type="checkbox" /> masculino</label>
      </div>

    </aside>
  );
}
