import React, { useEffect, useState } from 'react';
import './Editions.css';
import logo from '../../assets/images/Revista.png';
import NavBar from '../../components/Navbar';
import axios from 'axios';
import moment from 'moment';
const Editions = () => {

    const [files, setFiles] = useState([]);


    useEffect(()=>{
        getFiles();
    },[])
    
    
    const getFiles = ()=>{
        axios.get("http://localhost:8000/api/list")
        .then(res=>{
            setFiles(res.data);
        })
        .catch(err=>console.log(err));
    };

    const redirection = file =>{
        const tempUrl = file.replace("/var/www/html/revista_digital_server/public/", "")
        const url =  `http://localhost:8000/${tempUrl}`;
        window.open(url);
    }
    const renderFiles = () => {
        return files.map(e=>{
            console.log(e, 'revistas');
            const image = e.image_path.replace('/var/www/html/revista_digital_server/public/', '');
            return(
                <div key={e.id} className="mb-72 cursor-pointer" onClick={()=>redirection(e.file_path)}>
                    <p className="mb-1 mt-10 font-sans text-4x2 font-bold text-blue-600 text-center">{moment(e.created_ad).format('DD/MM/YYYY')}</p>
                    <p className=" font-sans mt-4 text-center text-gray-600 text-2xl ">{e.name}</p>

                        <p className=" text-center text-green-500 font-semibold">TECCOMITANCILLO</p>
                        <p className=" mt-6 text-center text-gray-500 ">
                        El cambio del aprendizaje de <br/> manera presencial a la era digital <br/> ha generado y propiciado un grado <br/> de responsabilidad y compromiso<br/> de todos...
                    </p>
                    <img className=" left-24  desktop:block laptop:block ml-72
                    laptop:block laptop:w-1/4 laptop:mx-20 laptop:-my-60
                    desktop:block desktop:w-1/6 desktop:mx-72 desktop:-my-60
                    tablet:block tablet:w-1/4 tablet:mx-8 tablet:-my-60
                    phone:block phone:w-1/2 phone:mx-20 phone:my-4" src={`http://localhost:8000/${image}`} alt="logo"/>
               </div>
            )
        })
    }

    return (
        <div   >
            <NavBar 
                white={false}
            />  
           <div className="container">
                <h1 className="mb-1 font-sans text-3xl font-bold text-blue-900 text-center">Ediciones</h1>
               {renderFiles()}
           </div>
        </div>
    )
};

export default Editions;
