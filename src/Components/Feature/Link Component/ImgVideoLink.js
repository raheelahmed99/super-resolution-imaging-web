import React from 'react';
import {Link} from 'react-router-dom';
const LinkComponent = () => {
  return (
    <>
      <div class='w-1/2 h-1/2 flex mt-40  rounded-lg justify-center items-center p-5 bg-cyan-400'>
        <Link to="/imginput">
          <i class="text-9xl text-blue-600 mr-20 p-5 fa-solid fa-image fa-2xl"></i>
          <h1 class='ml-10 font-bold text-indigo-900'>Upload Image</h1>
        </Link>
      <div class='bg-indigo-900 w-1 h-60 mr-20'></div>
      <Link to="videoinput">
      <i class="text-9xl text-blue-600  p-5 fa-solid fa-video fa-2xl"></i>
      <h1 class='ml-10 font-bold text-indigo-900'>Upload Video</h1>
      </Link> 

      </div>
    </>
  )
}

export default LinkComponent
;
