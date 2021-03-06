import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Navbar';
import { Alert } from 'bootstrap';
import { AuthContext } from '../../context/auth-context';


const Login = () => {
      let history = useHistory();
      let auth = useContext(AuthContext);
      const [session, setSession] = useState(true);
      const [register, setRegister] = useState(false);
      const [password2, setPassword2] = useState(false);
      const [msg,setMsg] = useState('');
      const [username, setUsername] = useState('');
      const [pass, setPass] = useState('');  
      const [errors,setErrors]= useState('');
      const [user, setUser]= useState({
            name:"",
            email:"",
            password:""     
         
      });
      const [mailLogin, setMailLogin] = useState('');
      const [passLogin,setPassLogin] = useState('');
      
      const recoveryPassword = () => {
        setSession(password2?true:false);
        setPassword2(!password2)
      };
      const enterRegister = () =>{
        setSession(!session);
        setRegister(!register);
      };
      const enterSession = (e) => {
        e.preventDefault();
        axios.post('/login')
        .then(e=>{
          console.log(e);
        })
        .catch(error=>{console.log(error)});
      };
       
         const handleInputChange = (e) => {
           if(e.target.name === 'email1'){
              setMailLogin(e.target.value)
           }else{
              setPassLogin(e.target.value);
           }
         }


        const signIn = e =>{
          e.preventDefault();
          let objLogin = {
            email : mailLogin,
            password : passLogin,
            
          }
          console.log(objLogin);
          axios.post("http://localhost:8000/api/auth/login", objLogin)
          .then(res => {
            console.log(res.data.success);
            if(res.data.success){
              auth.login(res.data.user);
              history.push("/editions");
            }else{
              alert("error en usuario o contrase??a")
            }
          })
          .catch(err=>{
            console.log(err);
          })
        };
      
      //Registro  
      

      const{name,email,password} = user;
      const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value});
      };
    

     async function newRegister(e){
      e.preventDefault(e);
      await axios.post("http://localhost:8000/api/register",user)
       .then(res=>{
            console.log(res.data.data.email);
            if(res.data.data.email){
              alert("El correo ya existe, favor de revisar");
            }else{
              alert("El usuario se ha registado con Exito");
              //logear
            }
       })
       .catch(err=>{alert("Porfavor Rellena todos los campos")});
       setErrors('El Usuario se ha Registrado con Exito')
       setUser({name:"",email:"",password:""})///Limpia los campos

     }
     let newPassword = user.password;

     
    return (
      <div className="login fixed">
        
        <NavBar 
          white={true}
        />
        <div className="container-form w-full h-screen">
          <div className="
                  w-1/2
                  phone:w-0
                "
          >
          </div>
          <div className="
            phone:w-11/12 phone:m-auto
            tablet:w-2/5  
            laptop:w-1/3 laptop:mr-16
            desktop:w-1/4 desktop:mr-44 desktop:mt-10"
          >
            {session &&
              <form className="py-8 px-5 pb-4  bg-white  rounded-xl ">
                <h2 className="w-full text-xl text-center mb-2 -mt-5 text-blue-600 font-black">Iniciar Sesi??n</h2>
                <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" name="email1" onChange={handleInputChange} placeholder="Correo Electronico"/>
                <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" name="password1" onChange={e => handleInputChange(e)} placeholder="Contrase??a"/>
                <p 
                  className="mt-9  hover:text-blue-600 cursor-pointer
                  transform transition-all hover:-translate-y-1 hover:scale-110duration-300"
                  onClick={recoveryPassword}
                  
                >Olvid?? mi contrase??a</p>
                <button type="submit" onClick={e => signIn(e)} 
                  className={('bg-blue-600')+` w-full py-2.5 px-10 mt-5 border-none text-sm cursor-pointer text-white outline-none rounded
                  transform transition-all hover:-translate-y-1 hover:scale-110duration-300`}
                  // disabled = {newPassword1.length<8?true : false}
                >Entrar</button>
                <button 
                  className="w-full py-2.5 px-8 mt-8 border-none text-sm bg-gray-600 cursor-pointer text-white outline-none rounded
                  transform transition-all hover:-translate-y-1 hover:scale-110duration-300"
                  onClick={enterRegister}  
                  type="submit"
                >Registrarse</button>
              </form>
            }
            {register &&
                <form className="py-8 px-5 pb-5 bg-white  rounded-xl ">
                  <h2 className="w-full text-xl text-center mb-2 -mt-6 text-blue-600 font-black">Registrar</h2>
                  <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" name='name' value={name} onChange={e => onInputChange(e)} placeholder="Nombre"/>
                  <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="email" name='email' value={email} onChange={e => onInputChange(e)}placeholder="Correo Electronico"/>
                  <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" name='password'value={password} onChange={e => onInputChange(e)} placeholder="Contrase??a"/>
                 
                  <button type='submit' onClick={e => newRegister(e)} 
                    className={(newPassword.length<8?'bg-gray-400':'bg-blue-600')+` w-full py-2.5 px-10 mt-5 border-none text-sm cursor-pointer text-white outline-none rounded
                    transform transition-all hover:-translate-y-1 hover:scale-110duration-300`}
                    disabled = {newPassword.length<8?true : false}
                  >Registrarse </button>
                  <button 
                    className="w-full py-2.5 px-10 mt-5 border-none text-sm bg-gray-600 cursor-pointer text-white outline-none rounded
                    transform transition-all hover:-translate-y-1 hover:scale-110duration-300"
                    onClick = {enterRegister}
                  >Iniciar sesi??n</button>
              </form>
            }
            {password2 &&
                <form className="py-10 px-5 bg-white  rounded-xl ">
                <h2 className="w-full text-xl text-center mb-2 -mt-5 text-blue-600 font-black">Recuperar contrase??a</h2>
                <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Correo Electronico"/>
                <button 
                  className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-blue-600 cursor-pointer text-white outline-none rounded
                  transform transition-all hover:-translate-y-1 hover:scale-110duration-300"
                  
                >Enviar</button>
                <button 
                  className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-gray-600 cursor-pointer text-white outline-none rounded
                  transform transition-all hover:-translate-y-1 hover:scale-110duration-300"
                  onClick = {recoveryPassword}
                >Iniciar sesi??n</button>
                </form>
            }
          </div>
        </div>
      </div>
   
    );
  }

  export default Login;
