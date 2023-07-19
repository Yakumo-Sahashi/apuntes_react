import './App.css';
import Card from './componente/Card.jsx';
import img01 from './img/img01.png';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';
import img04 from './img/img04.jpg';
import img05 from './img/img05.jpg';
import img06 from './img/img06.jpg';
import img07 from './img/img07.jpg';
function App() {
  const reyes =[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9,
        img:img01
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3,
        img:img02
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16,
        img:img03
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3,
        img:img04
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13,
        img:img05
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11,
        img:img06
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12,
        img:img07
    }
  ];

  return (
    <div className='contenedor'>
     { reyes.map(({nombre, reinado, vacasComidas,img} = reyes) => {
        return <Card nombre={nombre} reinado={reinado} vacasComidas={vacasComidas} img={img}/>
      })}
    </div>
  );
}

export default App;
