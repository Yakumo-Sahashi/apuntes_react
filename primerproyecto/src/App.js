import './App.css';
import img1 from "./img/videl01.jpg";
import img2 from "./img/videl02.png";
import img3 from "./img/videl03.png";

function App() {
  let persona = [
    {name: "Videl control de ki",img:img1},
    {name:"Videl post entrenamiento",img:img2},
    {name:"Videl kawai",img:img3}
  ];
  return (
    <div className="App">
      {persona.map(({name,img} = persona) => {
        return <div className="content">
          <img className="img-marco" src={img}/>
          <p>{name}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
