import Swal from "sweetalert2";

const Imagen = ({genero,tipo,especie,estado,nombre,img}) => {
  const mostrar = () =>{
    Swal.fire({
      title: nombre,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: nombre,
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#3fb943ff"
    });
  }
  return (
    <div className="col-md-6 mb-3">
      <div className="card border-success">
        <div className="card-header text-center">
          <h2 className="text-success"><b>{nombre}</b></h2>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-5 align-self-center">
              <img onClick={() => mostrar()} src={img} alt={nombre} className="img-fluid mx-auto d-block rounded" />
            </div>
            <div className="col-7 align-self-center">
              <p className="lead">Especie: <b className="text-primary">{especie}</b></p> 
              <p className="lead">Estado: <b className="text-success">{estado}</b></p> 
              <p className="lead">Genero: <b className="text-warning">{genero}</b></p> 
              <p className="lead">Tipo: <b className="text-danger">{tipo == "" ? "Desconocido" : tipo}</b></p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Imagen;