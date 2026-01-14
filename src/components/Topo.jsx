
import { Link } from "react-router-dom";
import './Topo.css'


function Topo() {
  
  const menu = [
    {nome:"Início", link: "/"},
    {nome:"Biquínis", link: "/biquinis"},
    {nome:"Maiôs", link: "/maios"},
    {nome:"Vestidos", link: "/vestidos"},
    {nome:"Masculino", link: "/masculino"},
    {nome:"Acessórios", link: "/acessorios"},
    {nome:"Infantil", link: "/infantil"}
  ]
  

  return (
      <header className='header'>

        <div className='topbar'>

          <div className='left'>
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
            <a href='#'>Meu Carrinho</a>
            <a href='#'>Minha Conta</a>
          </div>
        </div>

        <nav className='menu'>
          {menu.map((tipo, i) => (
          <Link to={tipo.link} key={i}>{tipo.nome}</Link>
          ))}
        </nav>

      </header>

    
  )
}

export default Topo
