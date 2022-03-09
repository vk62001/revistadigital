import React, {useState} from 'react';



const SocialCount = () => {

  const [counter,setCounter] = useState(0);

  return  (
    <div> 
      <button className="w-40 rounded-full bg-blue-900 text-white phone:text-2xl 
    transform transition-all hover:-translate-y-1 hover:scale-110 duration-300"
    onClick={() => setCounter(counter+1)}>Me Gusta: {counter}
  </button>
    </div>

  )
}

export default SocialCount;