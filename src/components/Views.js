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
        <button className="phone:py-2 rounded-full bg-blue-900 text-white phone:text-2xl text-center
                                    bg-white p-4 hover:bg-blue-500 hover:text-white
                                    transform transition-all hover:-translate-y-1 hover:scale-110 duration-300l">
           Vistas: {files}
          </button>

        </div>
    )
}

export default Views;

