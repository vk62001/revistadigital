
import React from 'react';
import logo1 from '../../assets/images/logo.png';
import sep from '../../assets/images/sep.png';


const About = () => {
    return (
        
        <div>
            <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-0 phone:w-full cursor-pointer">
                <p className="desktop:hidden laptop:hidden tablet:hidden phone:block text-white
                 flex">
                      </p>
                    <div  className=" block desktop:hidden laptop:hidden tablet:hidden px-2 py-4">
                        <i className="fas fa-bars text-blue-900" id="mobile-menu"></i>
                    </div>
               
            </div>
            <div clasName="container mx-auto">
            <div className="ml-44 p-10 mt-4 cursor-default">
           <h8 class="mb-1 font-sans text-3xl font-bold text-blue-800">Objetivos</h8>
           <p class="mb-1 mt-10 font-sans text-4x2 font-bold text-green-600">Enfoque y alcance</p>
           <p className=" mt-10 ">
           La Revista Digital Universitaria es una publicación electrónica bimestral de comunicación social de la ciencia, dirigida <br/>
           a la comunidad universitaria y al público interesado. Su principal objetivo es comunicar temas relacionados con el<br/>
           desarrollo de las ciencias, las humanidades, las artes y la tecnología, con la finalidad de compartir el conocimiento <br/>
            y despertar el interés e inquietud de sus lectores por las diversas áreas del sabe
             </p>
             <p class="mb-1 mt-20 font-sans text-4x2 font-bold text-green-600">Objetivos especificos</p>
             <p className=" mt-5 ">
             Ser puente y espacio de comunicación horizontal entre los generadores del conocimiento, los comunicadores de la<br/>
              ciencia y el público lector.
             </p>
             <p className=" mt-5 ">
             Difundir investigaciones, evaluaciones, innovaciones y experiencias que coadyuven a la reflexión, el debate y la<br/>
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
             <div className=" absolute left-0 top-0 mt-5 ml-6">
           <img className="w-40 logocomi phone:block tablet:block laptop:block desktop:block" src={logo1} alt="logo" />
           </div>
           <div className=" absolute top-0 right-0 mr-20 mt-8">
           <img className="w-40 logosep phone:hidden tablet:block laptop:block desktop:block" src={sep} alt="sep" />
           </div>
                </div>
        </div>
    )
};

export default About;