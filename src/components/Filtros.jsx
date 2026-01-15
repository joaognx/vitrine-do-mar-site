import './Filtros.css'

export default function Filtros({
  produtos,
  busca,
  setBusca,
  categoria,
  setCategoria,
  preco,
  setPreco
}) {

  const categorias = [...new Set(produtos.map(p => p.category))]
  return (
    <div className='controles' >

      <select value={categoria} onChange={e => setCategoria(e.target.value)}>

        <option value="">Todas as categorias</option>

        {categorias.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      
    </div>
  );
}
