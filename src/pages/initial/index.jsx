import './style.css'
import Carousel from "../../components/Carousel.jsx";
import Popular from "../../components/Popular.jsx";
import Novidades from '../../components/Novidades.jsx';
import Rodapé from '../../components/Rodapé.jsx';
import Topo from '../../components/Topo.jsx';
import { StrictMode } from 'react';
import { useEffect } from 'react';

function Initial() {

  useEffect (() =>{
    document.title = "Vitrine do Mar - Início";}, []);
  return (
    <StrictMode>
      <Topo/>
      <Carousel/>
      <Popular/>
      <Novidades/>
      <Rodapé/>
    </StrictMode>
  )
}

export default Initial
