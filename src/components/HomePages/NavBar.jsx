import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Dropbox from "../Utilitys/Dropbox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../api_call/auth_api";
import { setUser } from "../../redux/slice/authSlice";

const NavBar = ({setOpenSidebar,openSidebar}) => {

  const dispatch = useDispatch();
  const {access_token,user} = useSelector(state => state.auth);
  const getUserLogin = async () => {
    const getUser = await getCurrentUser(access_token);
    dispatch(setUser(getUser));
  }
  useEffect(() => {
    getUserLogin();
  },[]);

  const [toggleDropBox,setToggleDropBox] = useState(false)
  return (
    <div className='relative bg-slate-800 w-full h-[5rem] rounded-lg justify-between flex items-center px-4 '>
      {toggleDropBox && <Dropbox />}
      <div className="flex items-center ">
        <RxHamburgerMenu className="text-2xl block lg:hidden" onClick={()=>setOpenSidebar(!openSidebar)}/>
        <FaChevronLeft className="bg-gray-800 rounded-full h-10 w-10 p-2 mx-4" />
        <FaChevronRight  className="bg-gray-800 rounded-full h-10 w-10 p-2  " />
      </div>
      <div className="flex items-center bg-black p-1 rounded-full cursor-pointer "  onClick={()=>{setToggleDropBox(!toggleDropBox)}}>
        <FaRegCircleUser className="bg-gray-400 p-1 rounded-full h-7 w-7 " />
        <h2 className="ml-4 font-bold ">{user?.display_name}</h2>
        <MdOutlineArrowDropDown className="ml-2 text-2xl" />
      </div>
    </div>
  )
}

export default NavBar