import React from 'react';
import './Comments.css';
import logo from '../../assets/images/logo.png';

const Comments = () => {
    return (
        <div>
                 <div className="logoC">
                  <img src={logo}/>
                 </div>
                <div className="ContenedorComentarios">
                <div className="Comentarios">
                <h8>Comentarios</h8>
                
                </div>
                <div className="inputs">
                <input type="text" name="nombre" placeholder="Ingrese su nombre"></input>
                <input type="email" name= "email" placeholder="Ingrese su correo"></input>
                <div className="Textarea">
                <textarea type="text" name="Comentario" placeholder="Comentarios:"></textarea>
                </div>
                <br/>
                <button3>Enviar</button3>
                </div>
                
                    
                
                
                
                
                </div>

                
        </div>
    )
};

export default Comments;