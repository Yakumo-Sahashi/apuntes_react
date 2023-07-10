import img1 from './img/videl01.jpg';
import img2 from './img/videl02.png';
import img3 from './img/videl03.png';
import img4 from './img/asuna01.jpg';
import {useRef} from 'react';
import './App.css';

function App() {
  const refCaja = useRef();
  const cambio = 23.16;
  const incrementar = (e) =>{
    e.target.innerHTML++;
    if(e.target.innerHTML > 9){
      e.target.innerHTML=1;
      e.target.style.backgroundColor = " ";
    }

    if(e.target.innerHTML > 7){
      e.target.style.backgroundColor = "red";
    }
  }

  const convertir = () =>{
    refCaja.current.innerHTML = refCaja.current.innerHTML*cambio;
  }

  const cambiar = (e) =>{
    e.target.src = e.target.src.includes(img4) ? "" : img4;
    e.target.parentNode.style.backgroundColor = "white";
  }

  const lectura = (e) =>{
    refCaja.current.innerHTML = e.target.value;
  }

  const texto = (e) =>{
    e.target.innerHTML = e.target.innerHTML== "Visto" ? "" : "Visto";
  }

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img onClick={cambiar} src={img1} />
        <h3 className="texto" onClick={texto}>Videl 1</h3>
      </div>
      <div className='caja'>
        <img onClick={cambiar} src={img2} />
        <h3 className="texto" onClick={texto}>Videl 2</h3>
      </div>
      <div className='caja'>
        <img onClick={cambiar} src={img3} />
        <h3 className="texto" onClick={texto}>Videl 3</h3>
      </div>
    </div>
  );
}

export default App;

/* <>
      <div ref={refCaja} className="texto" onClick={incrementar}>1</div> 
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={img1} />
      </div>
      <input onChange={lectura} className="campo"/>
    </> */