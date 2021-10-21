import React , {Fragment, useState} from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Formulario = () => {
    const [datos, setDatos]=useState({
        nombre:  '',
        apellido: '',
        correo: '',
        contraseña: ''

    })
    const handleInputChange =(event) => {
        //console.log(event.target.value)
        setDatos({
             ...datos,
        [event.target.name] : event.target.value
        })

    }
    const enviarDatos = (event) =>{
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido + ' ' + datos.correo)

    }

    return (
        
        <Fragment>
        <h1>Crear Cuenta</h1>
        <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
            <input
            placeholder="Ingrese su nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
            ></input>
            </div>
            <div className="col-md-3">
            <input 
            placeholder="Ingrese apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
            ></input>
            </div>
            <div className="col-md-3">
            <input
            placeholder="Ingrese su correo"
            className="form-control"
            type="email"
            name="correo"
            onChange={handleInputChange}
            ></input>
            </div>
            <div className="col-md-3">
            <input type="password"
            placeholder="Ingrese su contraseña"
            className="form-control"
            name="contraseña"
            onChange={handleInputChange}
            ></input>
            </div>
            <div className="col-md-3">
            <input/>
            </div>
            <div className="col-md-3">
            <button className="btn btn-primary hover: bg-blue-500 font-bold" type ="submit">Enviar</button>

            </div>
            
            
        </form>

        </Fragment>
        
    );
}

export default Formulario;