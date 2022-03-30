import React, {useState, useEffect} from 'react';
import axios from 'axios';



const Views = () => {

    const [files,setFiles] = useState([]);

    useEffect(()=> {
       getViews();
    }, []);

    const getViews = async () => {
      await axios.get('http://localhost:8000/api/vistas')
      .then(res => {
         setFiles(res.data);
         console.log(res.data);
      })
      .catch(err=>console.log(err));


    };

    return (
        <div>
        <button className=" flex justify-center items-center phone:py-2 rounded-full bg-blue-900 text-white phone:text-2xl text-center
        bg-white p-4 hover:bg-blue-500 hover:text-white
        transform transition-all hover:-translate-y-1 hover:scale-110 duration-300l">
            <svg  className='inline-block'
            xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 
              8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
           {files}
          
          </button>

        </div>
    )
}

export default Views;

