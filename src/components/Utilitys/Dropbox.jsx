import React from 'react'

const Dropbox = () => {
  return (
    <div className='absolute trasitio ease-in-out duration-300 py-4 px-4 top-[4rem] right-[1rem] rounded-lg bg-slate-700 border w-40 h-40'>
      <p className='py-2 px-4 hover:bg-slate-500 rounded-lg cursor-pointer'>Profile</p>
      <p className='py-2 px-4 hover:bg-slate-500 rounded-lg cursor-pointer'>Setting</p>
      <p className='py-2 px-4 hover:bg-slate-500 rounded-lg cursor-pointer'>Logout</p>
    </div>
  )
}

export default Dropbox
