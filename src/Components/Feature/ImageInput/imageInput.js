import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const ImageInputPreview = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div class='text-indigo-600  bg-blue-300 flex flex-col space-y-3 rounded mt-5 p-3'>
        <div class='flex justify-between'>
            <h2 class='text-lg font-bold text-center'>Add Image:</h2>
            <Link  to="/"><i class="fa-solid fa-2xl fa-rectangle-xmark"></i></Link>
        </div>
        <div class='flex space-x-10'>
        <div>
            <p class='text-lg mb-5 text-center'>Before Resolution</p>
            <img class='border-white p-5 rounded' src={file} width={650} height={350} /> 

        </div>
        <div>
            <p class='text-lg mb-5 text-center'>After Resolutionn</p>
            <img class='border-black p-5 rounded' src={file} width={650} height={350} /> 

        </div>
        </div>
        <div>
            <input  type="file"  onChange={handleChange} />
        </div>         
    </div>
    )
}
export default ImageInputPreview;

