import './style.css'
import Carousel from "../../components/Carousel.jsx";
import Popular from "../../components/Popular.jsx";
import Novidades from '../../components/Novidades.jsx';
import Rodapé from '../../components/Rodapé.jsx';
import Topo from '../../components/Topo.jsx';
import { StrictMode } from 'react';

function Initial() {
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
