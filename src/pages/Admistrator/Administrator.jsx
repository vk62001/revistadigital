import React from 'react';
import { useState } from 'react';
import {IconButton, Tooltip, Button} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AttactchFileIcon from '@material-ui/icons/AttachFile';
import axios from 'axios';

const initialValues = {
  archivo: null,
  archivoNombre: "",
  archivoURL:""
}
const Administrator = () => {

  const [archivo, setArchivo] = useState(initialValues);

  const fileSelectHandler = (e) => {
    setArchivo({
      archivo: e.target.files[0],
      archivoNombre: e.target.files[0].name
    })
  }

  const onSubmit = e =>{

    e.preventDefault();
    const fd = new FormData();
    fd.append('file', archivo.archivo, archivo.archivoNombre);
    axios.post("http://localhost:8000/api/upload", fd,{
      onUploadProgress: progressEvent => {
        console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ "%");


      } 
    })
    
  }

  return <div>
      <h1>Administrador Revista Digital</h1>
      <input id ="archivo-input" type="file" onChange={fileSelectHandler} />
      <label htmlFor='archivo-input'> 
        <Tooltip title="Adjuntar un archivo">
          <IconButton color="primary" component="span">
          <AttactchFileIcon fontSize="large"/>
          </IconButton>
        </Tooltip>
      </label>
      <Button 
       variant="contained" onClick={onSubmit}>
         Aceptar
         </Button>
      
  </div>;
};

export default Administrator;