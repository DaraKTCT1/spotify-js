import React from 'react'

const Login = () => {

  const loginWithSpotify = () => {
    const clientId = "acb669a8f68a4999a573c46cf7bbc196";
    const redirectUri = "http://localhost:5173/";
    const scope = [
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-read-email",
      "user-read-private",
    ].join(" ");
    const spotifyURL = "https://accounts.spotify.com/authorize";
    window.location.href = `${spotifyURL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
  }
  return (
    <div className='w-full h-screen text-white flex justify-center bg-[rgb(33,33,33)] '>
      <button onClick={loginWithSpotify} className='absolute font-semibold top-32 border p-5 rounded-lg bg-black hover:bg-white hover:text-black'>Login With Spotify</button>
    </div>
  )
}

export default Login