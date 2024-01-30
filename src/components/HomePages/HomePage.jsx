import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer';
import Search from './Search/Search';
const getWindowWidth = ()=>{
  const innerWidth = window.innerWidth;
  return innerWidth;
}

const HomePage = () => {
  const [width,setWidth] = useState(getWindowWidth());
  const [openSidebar,setOpenSidebar] = useState(true);
  useEffect(()=>{
    function handleWindowResize(){
      setWidth(getWindowWidth());
    }
    window.addEventListener("resize",handleWindowResize);
    if(width<1024){
      setOpenSidebar(true);
    }else{
      setOpenSidebar(false)
    }
    return ()=>{
      window.removeEventListener("resize",handleWindowResize);
    }
  },[width]);
  return (
    <div className='h-screen p-2  bg-black text-white flex flex-col overflow-y-hidden justify-between '>
        <div className='max-w-full h-full flex gap-2 overflow-hidden mb-[5rem] '>
            <SideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <div className='w-full'>
                <NavBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
                <div className='overflow-auto h-full pb-[5rem] '>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                  </Routes>
                </div>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default HomePage