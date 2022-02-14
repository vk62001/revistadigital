import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop2.css';

const Backdrop2 = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop2;
