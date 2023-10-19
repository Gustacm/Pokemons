import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

const landing = () => {
  return (
    <div className='landing'>

      <div className='contenedor'>
      <h1 className='titulo' data-text="Welcome">Welcome</h1>
        <div className='botones'>
          <button className='Buton'>
            <Link to="/home" className="link">
              <span>Home</span>
            </Link>
          </button>
          <button className='Buton'>
            <Link to="/create" className="link">
              <span>Crear</span>
            </Link>
          </button>
          <button className='Buton'>
            <Link to="/about" className="link">
              <span>About</span>
            </Link>
          </button>
        </div>
      </div>
      <img src="/by.png" alt="by" className="by" />
    </div>
  );
}

export default landing;
