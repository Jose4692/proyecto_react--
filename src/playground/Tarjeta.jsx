export default function Tarjeta({ imagen, titulo, descripcion }) {
return ( <div className="col-md-4 mb-4"> <div className="card h-100 shadow-sm"> <img
       src={imagen}
       className="card-img-top foto"
       alt={titulo}
     />


    <div className="card-body">
      <h3 className="card-title">{titulo}</h3>
      <p className="card-text">{descripcion}</p>
    </div>
  </div>
</div>


);
}
