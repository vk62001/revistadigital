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
      <button className="w-40  flex justify-center items-center rounded-full bg-blue-900 text-white hover:bg-blue-500 hover:text-white phone:text-2xl 
        transform transition-all hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 
          115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
         </svg>
          {counter}
        
      </button>
    </div>

  )
}

export default SocialCount;