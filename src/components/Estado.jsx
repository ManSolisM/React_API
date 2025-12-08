import { useState } from "react";
const Estado = () => {
    const [contador,setContador] = useState(0);
     return (
        <div className="col">
            <h2>Componente de Estado</h2>   
            <p>Contador: {contador} </p>   
            <button onClick={() => setContador( contador >= 10 ? 0 : contador +1)} className="btn btn-primary">Incrementar</button>
            <button onClick={() => setContador( contador <= 0 ? 10 : contador - 1)} className="btn btn-primary">Decrementar</button>
        </div>
    )
}
export default Estado
