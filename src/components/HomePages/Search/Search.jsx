import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { getSearchSong } from "../../../api_call/spotify_api";
import { useEffect, useState } from "react";
import { setPlayingSong, setSong } from "../../../redux/slice/spotifySlice";
const Search = () => {
  const dispatch = useDispatch();
  const {access_token} = useSelector(state => state.auth);
  const [searchKey,setSearchKey] = useState("");
  const searchSong = async (e) => {
    e.preventDefault();
    const search = await getSearchSong(access_token,searchKey);
    dispatch(setSong(search));
    setSearchKey("");
  }
  useEffect(()=>{
    searchSong();
  },[]);
  const {songs,playingSong} = useSelector(state => state.spotify);
  console.log(songs);
  const convertMinute = (ms) => {
    const minute = Math.floor(ms/60000);
    const second = ((ms%60000)/1000).toFixed(0);
    return minute+":"+(second<10?'0':'')+second;
  }
  const ClickPlaySong = (eachSong) => {
    dispatch(setPlayingSong(eachSong));
    dispatch(setIsPlaying());
  }
  return (
    <div className="mt-4 ">
      <div>
        <form onSubmit={searchSong} className="flex items-center gap-2 justify-center md:justify-start sticky top-2" >
          <input
            className="border px-4 py-2 bg-transparent md:ml-4 rounded-lg placeholder:font-bold
        w-[85%] md:w-1/2 lg:w-1/3"
            type="text"
            placeholder="Search song you want." value={searchKey} onChange={(e) => setSearchKey(e.target.value)}
          />
          <LuSearch className="text-3xl lg:ml-7 hover:scale-125" onClick={searchSong} />
        </form>
      </div>
      <div className="mt-7">
        <table className="w-full mx-1 md:mx-4 p-7">
          {
            songs && (
              songs.tracks.items.map((eachSong,index) => (
                <tr onClick={() => ClickPlaySong(eachSong)} key={index} className="hover:bg-gray-500 mx-1 md:mx-4 rounded-lg flex flex-row items-center justify-between">
                  <td className="flex items-center gap-1 md:gap-7 p-1 w-[60%]">
                    <p className="ml-1 md:ml-4">{index+1}</p>
                    <img className="w-16 md:w-20" src={eachSong.album.images[0].url} alt="" />
                    <div>
                      <p className={`ml-1 md:ml-4 ${playingSong?.name === eachSong?.name && "text-gray-400"}`}>{eachSong.name}</p>
                      <p className="ml-1 md:ml-4 text-gray-400">{eachSong.album.artists[0].name}</p>
                    </div>
                  </td>
                  <td className="hidden md:block">{eachSong.album.release_date}</td>
                  <td className="md:mr-4">{convertMinute(eachSong.duration_ms)}</td>
                </tr>
              ))
            )
          }
        </table>
      </div>
    </div>
  );
};

export default Search;
