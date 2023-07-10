import {useState} from 'react';
import "./App.css";
const App = () => {
  const [nombre, setNombre] = useState('Issei');

  const [contador, setContador] = useState(0);

  const [numero1,setNumero1 ] = useState();
  const [numero2,setNumero2 ] = useState();
  const [resultado,setResultado ] = useState();

  const reyesGodos = [
    {
      nombre:"Ataúlfo",
      aficion:"comer toros sin pelar"
    },
    {
      nombre:"Recesvinto",
      aficion:"leer a Hegel en arameo"
    },
    {
      nombre:"Teodorico",
      aficion:"la cría del escarabajo en almíbar"
    }
  ]

  const cambiar = () =>{
    setNombre("Yakumo");
  }

  const incrementar = () => {
    setContador(contador+1);
  }

  const decrementar = () => {
    setContador(contador-1);
  }

  const restablecer = () => {
    setContador(0);
  }

  const sumar = () =>{
    setResultado(Number(numero1) + Number(numero2));
  }

  const [texto, setTexto] = useState();
  const [posicion, setPosicion] = useState(0);

  const siguente = () => {
    setTexto(
      <p>La afición  principal de <span className="text-red">{reyesGodos[posicion].nombre}</span> es <span className="text-green">{reyesGodos[posicion].aficion}</span></p>
    );
    setPosicion(posicion+1);
    if(posicion == 2){
      setPosicion(0);
    }
  }

  const [moneda, setMoneda] = useState([0,0,0,0]);
  const [euro, setEuro] = useState();

  const cambio = (e) =>{
    setEuro(Number(e.target.value));
    setMoneda([e.target.value*118.6,e.target.value*4543.5,e.target.value*23.2,e.target.value*1.24]);
  }

  return (
    <>
      <div className="caja">
        <button onClick={siguente}>Siguiente</button>
        <div>{texto}</div>
      </div>
      
      <div className="caja">
        <input type="number" onChange={cambio}/>
        <input type="number" value={moneda[0]}/>
        <input type="number" value={moneda[1]}/>
        <input type="number" value={moneda[2]}/>
        <input type="number" value={moneda[3]}/>
      </div>
    </>
  );
}

export default App

/* <h1>Me llamo {nombre}</h1>
      <button onClick={cambiar}>Cambiar nombre</button>      
      <br/>
      <h1>Contador: {contador}</h1>
      <button onClick={decrementar}>decrementar</button>  
      <button onClick={restablecer}>restablecer</button>  
      <button onClick={incrementar}>incrementar</button>   */


      /* 
      <div className="caja">
      <input onChange={(e) => {setNumero1(e.target.value)}} type="number"/> +
      <input onChange={(e) => {setNumero2(e.target.value)}} type="number"/> =
      <input value={resultado} type="number" readOnly/>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
       */