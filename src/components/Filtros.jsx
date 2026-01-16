import './Filtros.css'
import { useState } from 'react'

export default function Filtros({
  categoria, // No seu caso, você está usando para tamanho
  setCategoria,
  minPreco,
  setMinPreco,
  maxPreco,
  setMaxPreco
}) {

  
  return (
    <div className='controles'>
      <div className='tamanhos'>
        <p>Tamanhos</p>
        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option value="">Todos</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
        </select>
      </div>

      <div className='preco'>
        <p>Preço</p>
        <p>de</p> 
        <input 
          type="number" 
          value={minPreco} 
          onChange={e => setMinPreco(e.target.value)} 
          placeholder="0"
        />
        <p>até</p>
        <input 
          type="number" 
          value={maxPreco} 
          onChange={e => setMaxPreco(e.target.value)} 
          placeholder="999"
        />
      </div>
    </div>
  );
}