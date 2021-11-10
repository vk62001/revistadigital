import React from 'react';

const BackDroop = props => {
    if(props.menu){
        return(
            <div 
                className="w-full h-screen bg-black absolute left-0 top-0 z-20 opacity-70"
                onClick ={props.openMenu}
            >

            </div>
        )
    }else{
        return(<></>);
    }
};
export default BackDroop;