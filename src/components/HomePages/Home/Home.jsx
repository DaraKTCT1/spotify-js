import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../../../redux/slice/spotifySlice";
import { getAllPlayList } from "../../../api_call/spotify_api";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const getPlaylist = async () => {
    const playlist = await getAllPlayList(access_token);
    dispatch(setPlaylist(playlist));
  };
  useEffect(() => {
    getPlaylist();
  }, []);
  const { access_token } = useSelector((state) => state.auth);
  const { playlists } = useSelector((state) => state.spotify);
  console.log(playlists);
  return (
    <div className="overflow-auto">
      <h1 className="mt-4 text-lg lg:text-2xl font-bold ">Good Morning</h1>
      <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3 ">
        {playlists &&
          playlists?.items.map((playlist,index) => (
            <div key={index} className="h-20 lg:h-28 bg-gray-600 overflow-hidden rounded-lg flex items-center justify-between group ">
              <div className="flex items-center ">
                <img
                  className="w-20 lg:w-32 object-cover "
                  src={playlist.images[0]?.url}
                  alt=""
                />
                <h1 className="ml-4 text-lg lg:text-xl font-semibold ">{playlist.name}</h1>
              </div>
              <div className="bg-green-500 h-16 w-16 rounded-full justify-center items-center  mr-4 shadow-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 hidden lg:flex">
                <FaPlay className="text-3xl " />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
