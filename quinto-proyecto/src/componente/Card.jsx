import React from 'react'

function Card({nombre, reinado, vacasComidas,img}) {
  return (
    <div className="caja" key={nombre}>
      <p><b style={{color:"orangered"}}>{nombre.toUpperCase()}</b> ha comido {vacasComidas} en sus {reinado} años de reinado.</p>
      <img src={img}/>
    </div>
  );
}

export default Card
