import './Filtros.css'

export default function Filtros({
  produtos,
  categoria,
  setCategoria,
}) {
  const categoriasUnicas = [...new Set(produtos.map(p => p.category?.name))].filter(Boolean);

  return (
    <div className='controles'>
      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value="">Todas as categorias</option>

        {categoriasUnicas.map(catNome => (
          <option key={catNome} value={catNome}>
            {catNome} 
          </option>
        ))}
      </select>
    </div>
  );
}