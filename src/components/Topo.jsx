import { useState } from "react";
import { useEffect } from "react";
import { ShoppingBag } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Link } from "react-router-dom";
import './Topo.css'


function Topo() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const menu = [
    { nome: "Início", link: "/" },
    { nome: "Biquínis", link: "/biquinis" },
    { nome: "Maiôs", link: "/maios" },
    { nome: "Vestidos", link: "/vestidos" },
    { nome: "Masculino", link: "/masculino" },
    { nome: "Acessórios", link: "/acessorios" },
    { nome: "Infantil", link: "/infantil" }

  ]


  useEffect(() => {
    if (menuAberto) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [menuAberto]);
  return (
    <header className='header'>

      <div className='topbar'>

        <div className='left'>
          <div
            className={`hamburger ${menuAberto ? 'aberto' : ''}`}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            ☰
          </div>

          <input
            className="search"
            type="text"
            placeholder="O que você está buscando?"
          />


        </div>

        <Link to="/" className='center'>
          <img src="logospng.png" alt="Vitrine do Mar" className='logo' />
        </Link>


        <div className="right">

          <a href='#' className={`carrinho ${carrinhoAberto ? 'aberto' : ''}`}
            onClick={() => setCarrinhoAberto(!carrinhoAberto)}>
            <ShoppingBag size={40} color="#1a365d" strokeWidth={1.5} />
          </a>

          <a href='#'><CircleUser size={40} color="#1a365d" strokeWidth={1.5} /></a>
        </div>
      </div>



      
        <nav className={`menu ${menuAberto ? 'ativo' : ''}`}>

          {menu.map((tipo, i) => (
            <Link
              to={tipo.link}
              key={i}
              onClick={() => setMenuAberto(false)}
            >
              {tipo.nome}
            </Link>
          ))}

          <div className="search-container-mobile">
            <input className="search-mobile" type="text" placeholder="Buscar produtos..." />
          </div>
        </nav>
     

      {menuAberto && (
        <div
          className="overlay-menu"
          onClick={() => setMenuAberto(false)}
        ></div>
      )}

      {menuAberto && <div className="overlay" onClick={() => setMenuAberto(false)}></div>}
    </header>


  )
}

export default Topo
