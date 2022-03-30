
import React from 'react';
import logo1 from '../../assets/images/logo.png';
import sep from '../../assets/images/sep.png';
import NavBar from '../../components/Navbar';

const About = () => {
    return (
        
        <div>
             
             <NavBar 
                    white={false}
                 />
        
               
            
            <div className="container">
            <div className="ml-44 p-10 mt-4 cursor-default
            laptop:block laptop:w-3/4 laptop:mx-40 laptop:my-0
            desktop:block desktop:w-2/3 desktop:mx-72 desktop:my-0
            tablet:block tablet:w-4/5 tablet:mx-20 tablet:my-20
            phone:block phone:w-full phone:mx-8 phone:-my-4">
           <h8 className="mb-1 font-sans text-3xl font-bold text-blue-900">Objetivos</h8>
           <p className="mb-1 mt-10 font-sans text-4x2 font-bold text-green-600">Enfoque y alcance</p>
           <p className=" mt-10 ">
           La Revista Digital Universitaria es una publicación electrónica bimestral de comunicación social de la ciencia, dirigida
           a la comunidad universitaria y al público interesado.Su principal objetivo es comunicar <br/>  temas relacionados con el
           desarrollo de las ciencias, las humanidades, las artes y la tecnología, con la finalidad de compartir el conocimiento 
            y despertar el interés e inquietud de sus lectores por las <br/> diversas áreas del saber
             </p>
             <p className="mb-1 mt-20 font-sans text-4x2 font-bold text-green-600">Objetivos especificos</p>
             <p className=" mt-5 ">
             Ser puente y espacio de comunicación horizontal entre los generadores del conocimiento, los comunicadores de la
              ciencia y el público lector.
             </p>
             <p className=" mt-5 ">
             Difundir investigaciones, evaluaciones, innovaciones y experiencias que coadyuven a la reflexión,<br/>  el debate y la
             discusión de los procesos educativos.
             </p>
             <p className=" mt-5 ">
             Crear un espacio de comunicación y visibilización de los docentes y de los estudiantes como sujetos fundamentales<br/>
              en el quehacer académico de la universidad.
             </p>
             <p className=" mt-5 ">
             Comunicar acontecimientos relevantes vinculados con el quehacer universitario.

             </p>
             </div>
             <div className=" absolute left-0 top-0 mt-9 ml-6 tablet:w-1/4">
           <img className="w-28 logocomi phone:hidden tablet:block laptop:block desktop:block" src={logo1} alt="logo" />
           </div>
           <div className=" absolute top-0 right-0 mr-20 mt-14">
           <img className="w-40 logosep phone:hidden tablet:block laptop:block desktop:block" src={sep} alt="sep" />
           </div>
                </div>
        </div>
    )
};

export default About;