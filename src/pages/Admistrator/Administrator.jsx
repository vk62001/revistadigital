import React from 'react';
import { useState } from 'react';
import {IconButton, Tooltip, Button} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AttactchFileIcon from '@material-ui/icons/AttachFile';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';
import ModalPortal from '../../components/Modal';

const initialValues = {
  archivo: null,
  archivoURL:""
}
const Administrator = () => {

  const [archivo, setArchivo] = useState(initialValues);
  const [titulo, setTitulo] = useState('');
  const [files, setFiles] = useState([]);
  const [newTitle, setNewTitle] =useState('');
  const [show, setShow] = useState(false);
  const [idUpdate, setIdUpdate] = useState();
  
  const fileSelectHandler = (e) => {
    setArchivo({
      archivo: e.target.files[0],
      titulo: e.target.files[0].titulo
    })
  };

  useEffect(()=>{
    getFiles();
  },[])

  const handleChange = e =>{
    setTitulo(e.target.value);
  };

  const onSubmit = e =>{

    e.preventDefault();
    const fd = new FormData();
    fd.append('file', archivo.archivo, archivo.archivoNombre);
    fd.append('titulo', titulo);
    axios.post("http://localhost:8000/api/upload", fd,{
      onUploadProgress: progressEvent => {
        console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ "%");
      }
    })
    .then(res=>{
      if(res.data.file){
        //tenemos que recargar el get
        //jalar todos los campos de la tabla titulos
        //editar el nombre del titulo con otro end point
        //eliminar archivo con optro endpoint enviando el id de la revista
        getFiles();
      }else{
        alert("ha sucedido un error")
      }
    })
    .catch(err=>console.log(err));
  }
  const getFiles = ()=> {
    axios.get("http://localhost:8000/api/list")
    .then(res=>{
      console.log(res.data, 'aqui');
      setFiles(res.data);
    })
    .catch(err=>console.log(err));
  };

  const prepareModal = e =>{
    openModal();
    setNewTitle(e.name);
    setIdUpdate(e.id);
  }

  const updateFiles = (e) => {
    e.preventDefault();
    const objUpdate = {
      name:newTitle,
      id: idUpdate
    }
    //axios.post('ruta'. objUpdat);
    alert("se hace actualizado tu archivo");
    openModal();
  }

  const deleteFiles = (id) =>{
    alert("esta seguro que deseas eliminar");
  
  }

  
  const openModal = () =>{
    setShow(!show);
  }


  const renderFiles = () => {
    if(files)console.log('');
    return files.map((e, i) => {
        return(
          <tr key={e.id} className="bg-gray-300 border border-grey-500 laptop:border-none block laptop:table-row">
            <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">No.</span>{i+1}</td>
            <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell">
              <span className="inline-block w-1/3 laptop:hidden font-bold">Título</span>
              <span>{e.name}</span>
              </td>
            <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">Fecha</span>{moment(e.created_ad).format('DD/MM/YYYY')}</td>
            <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell">
              <span className="inline-block w-1/3 laptop:hidden font-bold">Actions</span>
              <button 
                onClick={()=>prepareModal(e)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
              <button 
                onClick={()=>deleteFiles(e.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
            </td>
          </tr>
        )
    })
  }


  return <div>
      <h1>Administrador Revista Digital</h1>
      <div className="container">
        <div className='input '>
          <input id ="titulo" name="name" type="text" className='border-2 b-1' onChange={e => handleChange(e)} placeholder="Titulo del archivo"/>
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
              {renderFiles()}
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
              <ModalPortal 
                show={show}
                onCancel = {openModal}
                headerClass=''
                contentClass = ''
              >
                <div className='container'>
                <h3>Inserte el nuevo nombre</h3>
                <input type="text" value={newTitle}  onChange={e=>setNewTitle(e.target.value)} />
                  <div className='flex'>
                    <button className='bg-red-500'
                      onClick={e=>{
                        e.preventDefault();
                        openModal();
                      }}
                    >Cancelar</button>
                    <button 
                      className="bg-blue-600"
                      onClick={e=>(updateFiles(e))}
                    >Actualizar</button>
                  </div>
                </div>
                
              </ModalPortal>
  </div>;
};

export default Administrator;