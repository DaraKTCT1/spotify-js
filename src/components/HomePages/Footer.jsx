import { MdOutlineShuffle } from "react-icons/md";
import { FaAnglesLeft,FaAnglesRight } from "react-icons/fa6";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdRepeat } from "react-icons/io";
import { RiVolumeUpFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const {playingSong,isPlaying} = useSelector(state => state.spotify);
  const playingRef = useRef();
  useEffect(()=>{
    if(isPlaying && playingSong){
      playingRef.current.src = playingSong?.preview_url
      playingRef.current.play();
    }
  },[isPlaying,playingSong]);
  console.log(playingSong)
  return (
    <div className='px-1 md:px-8 text-white h-[4rem] md:h-[5rem] flex justify-between items-center border-t border-slate-500  w-full absolute z-50 bottom-0 left-0'>
      <div className='flex items-center flex-1 justify-start h-full'>
        <img className='w-[3rem] hidden md:block lg:w-[5rem] rounded-sm' src={playingSong?.album?.images[0]?.url} alt="" />
        <div className="ml-1 md:ml-4">
          <h1 className="text-sm font-semibold md:font-bold ">{playingSong?.name}</h1>
          <p className="text-sm">{playingSong?.album?.artists[0]?.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 lg:gap-2 flex-1 justify-center h-full">
        {/* <MdOutlineShuffle className="text-sm lg:text-2xl" />
        <FaAnglesLeft className="text-sm lg:text-2xl"/>
        <BsFillPlayFill className="md:mx-2 text-2xl p-1 lg:text-4xl lg:p-2 rounded-full bg-green-500 " />
        <FaAnglesRight className="text-sm lg:text-2xl" />
        <IoMdRepeat className="text-sm lg:text-2xl"/> */}
        {
          playingSong ? <audio controls ref={playingRef} ></audio> : <p>No Song To Play</p>
        }
      </div>
      <div className="flex items-center flex-1 justify-end h-full">
        <RiVolumeUpFill className="text-2xl" />
      </div>
    </div>
  )
}

export default Footer
