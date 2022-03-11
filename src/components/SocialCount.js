import React, {useState, useEffect} from 'react';
import axios from 'axios';


const SocialCount = () => {

  useEffect(()=>{
    getLikes();
  }, []);

  const getLikes = async ()=> {
    await axios.get('http://localhost:8000/api/listlike') //jalas de una ruta el total de likes
    .then(res=> {
      setCounter(res.data); //
    })
    .catch(err=>console.log(err));
  }

  const [counter,setCounter] = useState(0);

  const handleClick = async () => {
    const obj={
      count: 1
    };
    await axios.post('http://localhost:8000/api/like',obj )//guarda un like --insert
    .then(res =>{ //si se guarda en la base de datos retunr true
      if(res.data.count)
        setCounter(counter+1);
        alert("Gracias por tu Like!!!");
        getLikes();
    })
    .catch(error=>console.log(error));
  }

  return  (
    <div> 
      <button className="w-40 rounded-full bg-blue-900 text-white phone:text-2xl 
        transform transition-all hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={handleClick}>Me Gusta: {counter}
      </button>
    </div>

  )
}

export default SocialCount;