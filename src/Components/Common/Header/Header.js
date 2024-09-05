import React from 'react'

const Header = () => {
  return (
    <>
    <div class='flex flex-col items-center  space-y-10'>
    <div class='w-4/5 p-4 backdrop-blur-sm bg-white/60 rounded text-indigo-900'>
     <h1 class='text-xl  text-center font-bold'>Super-Resolution Imaging</h1>
     </div>
    <div class='w-3/4'>
    <p class='text-center text-style-arial text-blue-200'>Reconstructing high-resolution images from
    low-resolution inputs. AI based super-resolution imaging web app,
aimed at enhancing the resolution of low-quality images and videos, thereby improving their
clarity and detail.</p>
    </div>
    </div>
    </>
  )
}

export default Header;
