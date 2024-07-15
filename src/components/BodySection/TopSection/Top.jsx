import React from 'react'
import './Top.css'

import users from '../../../assets/user.jpg';
import video from '../../../assets/Avicii.mp4';

import { CiSearch } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRight, BsArrowRightShort } from 'react-icons/bs';


const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className='title'>
          <h1>Selamat Datang Di Todolist</h1>
          <p>selamat datang username, welcome back!</p>  
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search'/>
          <CiSearch className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessage className='icon'/>
          <IoNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src={users} alt="Admin"/>

          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Todolist APP</h1>
          <p>Mencatat semua kegiatan tanpa kelewatan</p>

          <div className="buttons flex">
            <button className='btn'>Explore more</button>
            <button className='btn transparent'>Top Sel</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Todolist</h1>

              <div className="flex">
                <span>
                  hari ini <br/> <small>4 todolist</small>
                </span>
                <span>
                  bulan ini <br/>  <small>4 todolist</small>
                </span>
              </div>

              <div className="flex link">
                lihat semua
                <BsArrowRightShort className='icon'/>
              </div>

            </div>

            <div className="imgDiv">
              <img src={users} alt="users" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Top