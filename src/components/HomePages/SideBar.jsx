import {GrHomeRounded} from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import image from "../../assets/image.png"
const SideBar = ({openSidebar,setOpenSidebar}) => {
  return (
    <div className={`z-50  h-full bg-slate-800 w-full lg:w-[15rem] lg:max-w-[15rem] p-5 rounded-lg text-gray-400 group ${openSidebar && "-translate-x-[100%] "} lg:translate-x-0 transition ease-in-out duration-300 fixed left-0 top-2 lg:static`} > 
        <div className="flex items-center justify-between lg:justify-center mx-5 md:mx-0 ">
          <img className='w-24 ' src={image} alt="" />
          <IoCloseSharp onClick={()=>{
            setOpenSidebar(!openSidebar)
          }} className="text-2xl block lg:hidden" />
        </div>
        <div className="m-4 ">
          <Link to={"/"} onClick={()=>{setOpenSidebar(!openSidebar)}}>
            <div className="flex items-center hover:text-white">
              <GrHomeRounded className="text-gray-400  text-2xl mt m-4" />
              <h2 className="font-[500] text-sm ml-4 ">Home</h2>
            </div>
          </Link>
          <Link to={"/search"} onClick={()=>{setOpenSidebar(!openSidebar)}}>
            <div className="flex items-center hover:text-white">
              <FiSearch className="text-gray-400  text-2xl mt m-4" />
              <h2 className="font-[500] text-sm ml-4 ">Search</h2>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default SideBar