import React from 'react';
import './Sidebar.css';
import './Sidebar.scss';
import logo from '../../assets/Logo.jpg';
import { IoMdSpeedometer } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='Logo' />
        <h2>Todolist</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='titleDiv'>Quick Menu</h3>
        <ul className='menulists grid'>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>

      <div className='settingDiv'>
        <h3 className='titleDiv'>SETTING</h3>
        <ul className='menulists grid'>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
