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
      archivoNombre: e.target.files[0].name,
      titulo: e.target.files[0].titulo
    })
  }

  const onSubmit = e =>{

    e.preventDefault();
    const fd = new FormData();
    fd.append('file', archivo.archivo, archivo.archivoNombre);
    fd.append('titulo', archivo.titulo);
    axios.post("http://localhost:8000/api/upload", fd,{
      onUploadProgress: progressEvent => {
        console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ "%");
      }
    })
    .then(res=>{
      console.log(res);
    })
    .catch(err=>console.log(err));
  }

  return <div>
      <h1>Administrador Revista Digital</h1>
      <div className="container">
        <div className='input '>
          <input id ="titulo" type="text" className='border-2 b-1' onChange={fileSelectHandler} placeholder="Titulo del archivo"/>
          <input id ="archivo-input" type="file"  accept="application/pdf, application/vnd.ms-excel" onChange={fileSelectHandler} />
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
        </div>
        <div className='tabla'>
          <table className="min-w-full border-collapse block laptop:table">
            <thead className="block laptop:table-header-group">
              <tr className="border border-grey-500 laptop:border-none block laptop:table-row absolute -top-full laptop:top-auto -left-full laptop:left-auto  laptop:relative ">
                <th className="bg-gray-600 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">No</th>
                <th className="bg-gray-600 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">Título</th>
                <th className="bg-gray-600 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">Fecha</th>
                <th className="bg-gray-600 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">Actions</th>
              </tr>
            </thead>
            <tbody className="block laptop:table-row-group">
              <tr className="bg-gray-300 border border-grey-500 laptop:border-none block laptop:table-row">
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">Name</span>1</td>
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">User Name</span>Biología 2022 1a Edición</td>
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">Email Address</span>9/02/2022</td>
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell">
                  <span className="inline-block w-1/3 laptop:hidden font-bold">Actions</span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                </td>
              </tr>
              {/* <tr className="bg-white border border-grey-500 laptop:border-none block laptop:table-row">
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">Name</span>Erwin Campbell</td>
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">User Name</span>ecampbell088</td>
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">Mobile</span>318-685-X414</td>
                <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell">
                  <span className="inline-block w-1/3 laptop:hidden font-bold">Actions</span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
  </div>;
};

export default Administrator;