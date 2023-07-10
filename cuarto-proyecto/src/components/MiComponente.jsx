import React from 'react'

function MiComponente({nombre, codigo}) {
  return (
    <div>
      <h1>Hola mundo {nombre} este es tu codigo numero {codigo}</h1>
    </div>
  )
}

MiComponente.defaultProps={
    nombre:"anonimo",
    codigo:0
}

export default MiComponente
