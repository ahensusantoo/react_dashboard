import React from 'react';
import './Sidebar.css';
import './Sidebar.scss';
import logo from '../../assets/Logo.jpg';
import { IoMdSpeedometer } from 'react-icons/io';
import { CiCircleQuestion } from "react-icons/ci";


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

      <div className='sidebarCard'>
        <CiCircleQuestion  className='icon'/>
        <div className="cardContent">
          <div className="cicrle1"></div>
          <div className="cicrle2"></div>
          <h3>Help Center</h3>
          <p>jika ada permasalahan dapat hubungi kontak</p>
          <button className='btn'>
            hub helper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
