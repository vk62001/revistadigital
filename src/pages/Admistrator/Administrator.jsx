import React from 'react';
import { useState } from 'react';
import {IconButton, Tooltip, Button} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AttactchFileIcon from '@material-ui/icons/AttachFile';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';
import NavBar from '../../components/Navbar';
import ModalPortal from '../../components/Modal';
import logo from '../../assets/images/logo.png';

const initialValues = {
  archivo: null,
  archivoURL:""
}
const initial = {
  imagen: null,
  imagenURL:""
}
const Administrator = () => {

  const [imagen, setSelectedFile] = useState(initial);
  const [archivo, setArchivo] = useState(initialValues);
  const [titulo, setTitulo] = useState('');
  const [descripcion,setDescripcion] = useState(''); 
  const [files, setFiles] = useState([]);
  const [newTitle, setNewTitle] =useState('');
  const [show, setShow] = useState(false);
  const [idUpdate, setIdUpdate] = useState();
  
  const fileSelectHandler = (e) => {
    console.log(e.target.files)
    setArchivo({
      archivo: e.target.files[0],
      titulo: e.target.files[0],
      descripcion: e.target.files[0].descripcion,
    })
  
   
  };
  const changeHandler = (e) => {
    console.log(e.target.files)
   setSelectedFile({
     imagen: e.target.files[0]
   })
   }


  useEffect(()=>{
    getFiles();
  },[])
 
  

  const handleChange = e =>{
    setTitulo(e.target.value);
  };

  const handleInputChange = e =>{
    setDescripcion(e.target.value)
  }

  const onSubmit = e =>{

    e.preventDefault();
    const fd = new FormData();
    fd.append('file', archivo.archivo, archivo.archivoNombre);
    fd.append("image", imagen.imagen, imagen.archivoNombre);
    fd.append('titulo', titulo);
    fd.append('description', descripcion);
    
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
    axios.post('http://localhost:8000/api/update', objUpdate);
    alert("se ha actualizado tu archivo");
    getFiles()
    openModal();
  }

  const deleteFiles = (id) =>{
    if  ( window.confirm("esta seguro que deseas eliminar")){
         axios.delete(`http://localhost:8000/api/delete/${id}`,id);
         alert("Se ha eliminado correctamente");
         getFiles()
        
    }
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
            <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell"><span className="inline-block w-1/3 laptop:hidden font-bold">Fecha</span>{moment(e.created_at).format('DD/MM/YYYY')}</td>
            <td className="p-2 laptop:border laptop:border-grey-500 text-left block laptop:table-cell">
              <span className="inline-block w-1/3 laptop:hidden font-bold">Actions</span>
              <button 
                onClick={()=>prepareModal(e)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded
                  transform transition-all hover:-translate-y-1 hover:scale-110 duration-300">Editar</button>
              <button 
                onClick={()=>deleteFiles(e.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded
                transform transition-all hover:-translate-y-1 hover:scale-110 duration-300">Borrar</button>
            </td>
          </tr>
        )
    })
  }


  return <div>

         <NavBar 
                    white={false}
                     />
       
    <h1 className='font-mono text-2xl font-bold uppercase text-center ml-8 text-blue-900 
    '>ADMINISTRADOR REVISTA DIGITAL<br/> TECNOLOGICO DE COMITANCILLO <br/>OAXACA</h1>
    <div className='-mt-36 ml-28'> 
      <img className="w-40" src={logo}/></div>
    
      <div className="container mt-4 flex justify-center">
        <div className='input w-5/12 bg-gray-200 px-8 shadow-2xl
        rounded-xl'>
          <label className="w-full text-2xl ml-44 mb-2 uppercase -mt-9 text-blue-900 font-black">Revista </label>
          <br/>
          <input className='w-3/4 mt-1 ml-8 p-2.5 border-2 border-gray-400
           bg-white text-base outline-none focus:ring-2 focus:ring-blue-600' id ="titulo" name="titulo" type="text" onChange={e => handleChange(e)} placeholder="Titulo del archivo" />
           <br/>
           <input className='w-3/4 pb-16 h-24 mt-5 ml-8 p-2.5 border-2 border-gray-400
           bg-white text-base outline-none focus:ring-2 focus:ring-blue-600' id ="description" name="name" type="text" onChange={e => handleInputChange(e)} placeholder="Descripcion" />
          <br/>
          <label className='ml-8'> PDF/File:</label>
          <br/>
          <input className="ml-8" id ="archivo-input" type="file" name="file" accept="application/pdf, application/vnd.ms-excel" onChange={fileSelectHandler} />
          <label htmlFor='archivo-input'> 
            <Tooltip title="Adjuntar un archivo">
              <IconButton color="primary" component="span">
              <AttactchFileIcon fontSize="large"/>
              </IconButton>
            </Tooltip>
          </label>
           <br/>
           <label className="ml-8">Image/File:</label>
           <br/>
          <i className='icon icon-upload ml-8 mt-8'></i>
          <input  id = "image-input" type="file" name="image"
          accept="image/jpg" onChange={changeHandler}
          /> 
          <Button
            variant="contained" onClick={onSubmit}>
            Aceptar
          </Button>
        </div>
        <div className='tabla mt-2'>
          <table className="border-separate min-w-full block laptop:table ml-8">
            <thead className="block laptop:table-header-group">
              <tr className="border border-grey-500 laptop:border-none block laptop:table-row absolute -top-full laptop:top-auto -left-full laptop:left-auto  laptop:relative ">
                <th className="bg-blue-900 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">No.</th>
                <th className="bg-blue-900 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">Título</th>
                <th className="bg-blue-900 p-2 text-white font-bold laptop:border laptop:border-grey-500 text-left block laptop:table-cell">Fecha</th>
                <th className="bg-blue-900 p-2 text-white font-bold laptop:border laptop:bordiver-grey-500 text-left block laptop:table-cell">Acciones</th>
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
                <div className='grid justify-items-center py-8 px-5 pb-4 rounded-xl'>
                <h3 className="w-full text-xl text-center mb-2 -mt-5 text-blue-900 font-black" >Actualizar</h3>
                <input className="w-2/3 border border-gray-500 p-2 bg-white text-base outline-none focus:ring-2 focus:ring-blue-600" type="text" value={newTitle}  onChange={e=>setNewTitle(e.target.value)} placeholder="Nuevo Titulo" />
                  <div className='flex flex-col'>
                    <button 
                      className="w-full py-2.5 px-10 mt-5 border-none text-sm bg-blue-900 cursor-pointer text-white outline-none rounded
                      transform transition-all hover:-translate-y-1 hover:scale-110 duration-300"
                      onClick={e=>(updateFiles(e))}
                    >Actualizar</button>
                    <br/>
                    <button className='w-full py-2.5 px-10 mt-0 border-none text-sm bg-red-600 cursor-pointer text-white outline-none rounded
                      transform transition-all hover:-translate-y-1 hover:scale-110 duration-300'
                      onClick={e=>{
                        e.preventDefault();
                        openModal();
                      }}
                    >Cancelar</button>
                  </div>
                </div>
                
              </ModalPortal>
  </div>;
};

export default Administrator;