import MiComponente from './components/MiComponente.jsx';
import './App.css';
import { useState } from 'react';
import Personaje from './components/Personaje.jsx';
import img01 from './img/img01.png';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';
import img04 from './img/img04.jpg';
import img05 from './img/img05.jpg';
import img06 from './img/img06.jpg';
import img07 from './img/img07.jpg';
import img08 from './img/img08.png';

const App = () => {
  const [total,setTotal] = useState(0);
  const waifu = [
    {
      img:img01,
      nombre:"Videl",
      precio:1000,
      color:"#007423"
    },
    {
      img:img02,
      nombre:"Fubuki",
      precio:2000,
      color:"#1b2769"
    },
    {
      img:img03,
      nombre:"Sinon",
      precio:1100,
      color:"#02789c"
    },
    {
      img:img04,
      nombre:"Asuna",
      precio:1300,
      color:"#57029c"
    },
    {
      img:img05,
      nombre:"Uraraka",
      precio:1100,
      color:"pink"
    },
    {
      img:img06,
      nombre:"Anzu",
      precio:1500,
      color:"violet"
    },
    {
      img:img07,
      nombre:"Miku",
      precio:2100,
      color:"#00c0a6"
    },
    {
      img:img08,
      nombre:"Mikasa",
      precio:2350,
      color:"#680303"
    }
  ];

  return (
    <div>
      <div className='contenedor'>
        <h1>Total a pagar: ${total}</h1>
      </div>
      <div className='contenedor'>
        {waifu.map(({img,nombre,precio,color} = waifu) => {
          return <Personaje img={img} nombre={nombre} precio={precio} color={color} setTotal={setTotal}/>;
        })}
      </div>
    </div>
  )
}

export default App