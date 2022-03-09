import React, { useEffect, useState } from 'react';
import './Comments.css';
import axios from 'axios';
import moment from 'moment';

import NavBar from '../../components/Navbar';
import { ProgressBar } from 'react-bootstrap';

const Comments = () => {
  const [nombre,setNombre] = useState('');
  const [comentario,setComentario] = useState('');
  const [archivo, setArchivo] = useState('');
  const [files, setFiles] = useState([]);


  const fileSelectHandler = (e) => {
    console.log(e.target.files)
     setArchivo({
       nombre: e.target.files[0],
       comentario: e.target.files[0].comentario
     })

  }

     useEffect(() =>{
       getFiles();
     },[])

     const handleChange = e =>{
       setNombre(e.target.value)
     }

     const handleInputChange = e => {
       setComentario(e.target.value)
     }

     const onSubmit = e => {
       e.preventDefault();
       const fd = new FormData();
       fd.append('name',nombre);
       fd.append('comments',comentario);

       axios.post("http://localhost:8000/api/uploaded",fd,{
          onUploadProgress: progressEvent => {
            console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ "%");
          alert('Gracias por comentar!!!');
          }
       })
       .then(res=>{
         if(res.data.file){
         getFiles();
        
         }else{
           alert("ha sucedido un error")
         }
       })
       .catch(err=>console.log(err));
     }

      const getFiles = () => {
        axios.get("http://localhost:8000/api/listc")
        .then(res=>{
          console.log(res.data, "ya");
          setFiles(res.data);
        })
        .catch(err=>console.log(err));
      }
      
      const renderFiles = () => {
        if(files)console.log('');
        return files.map((e, i) => {
            return(
              <tr key={e.id} className="bg-white border border-grey-500 laptop:border-none block laptop:table-row
              tablet:table-row tablet:border-none
              phone:table-row phone:text-sm">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
              <div className="text-left">{e.name}</div>
              </td>
              <td className="p-3 whitespace-nowrap">
              <div className="text-left font-medium text-blue-600">{e.comments}</div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
              <div className="text-lg text-center">{moment(e.created_at).format('DD/MM/YYYY')}</div>
              </td>
              </tr>
            )
        })
      }
    return (
      
        <div> 
          <NavBar 
                    white={false}
                 />
         
        
        
        
             
        <div className="absolute h-3/5 inset-y-7 left-48 
        bg-gray-100 p-16 rounded-xl justify-center shadow-2xl
        w-1/2
        laptop:block laptop:w-1/3 laptop:ml-20 laptop:my-10 laptop:h-1/2
        desktop:block desktop:w-1/4 desktop:mr-32 desktop:my-10 desktop:h-1/2
        tablet:block tablet:w-2/4 tablet:ml-10 tablet:my-8 tablet:h-3/5
        phone:block phone:w-11/12 phone:p-8 phone:left-6 phone:mt-8 phone:h-7/12">
        <h3 className="text-3xl font-sans font-bold uppercase text-blue-900 mb-3">Comentarios</h3>
        
        <form className="space-y-3">
          <div>
            <label className="block mb-1 font-bold text-blue-900" >Nombre</label>
            <input type="text" className="w-full border-gray-100
           rounded outline-none focus:ring-2 focus:ring-blue-600 py-1 p-2" 
           id="nombre"
           name="name"
           type= "text" onChange={ e => handleChange(e)}
           placeholder="Ingrese su nombre"/>

        </div>

       

        <div>
          <input className="w-full h-24 pb-16 placeholder-gray-400 border-2 border-gray-100
          rounded outline-none focus:ring-2 focus:ring-blue-600 p-2"
          type="text"
          id="comentario"
          name="comments"
          onChange={e => handleInputChange(e)}
          placeholder="Comentario"/>
        </div>

        <button className="py-2.5  px-10 mt-10 border-none text-sm bg-blue-900 font-semibold
         cursor-pointer text-white outline-none hover:bg-blue-500 w-full
         transform transition-all hover:-translate-y-1 hover:scale-110duration-300"
         variant="contained" onClick={onSubmit}
         >Publicar</button>


        </form>
        
        <div className='tabla desktop:px-80 desktop:-m-72 desktop:ml-20
        tablet:mt-8 tablet:-ml-20
        phone:mt-14 phone:-ml-11'>
          
        <header class="px-5 py-4 ">
                <h2 class="text-xl mb-2 text-gray-400 ">Comentarios</h2>
            </header>
            <div className=' desktop:block laptop:block
            tablet:text-sm tablet:tracking-wide tablet: text-center'>
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200 text-gray-400">
              <tr className=" bg-white">
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              <div className="">Usuario</div>
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
              <div className="">Comentario</div>
              </th>
              <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              <div className="">Fecha</div>
              </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
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
       
    </div>
      
  </div>
       

         


       
        
    )
};

export default Comments;