const Personaje = ({img,nombre,precio,color,setTotal}) => {

    const agregar_compra = (caja) =>{
        setTotal((e) => e+precio);
        caja.target.parentNode.style.display = "none";
    }

    return (
        <div className='caja' style={{ background: color}}>
            <h1>{nombre}</h1>
            <img src={img}/>
            <span>Precio: ${precio}</span>
            <button onClick={agregar_compra}>Comprar</button>
        </div>
    );
}

export default Personaje;