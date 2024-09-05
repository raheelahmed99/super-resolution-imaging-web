import { BrowserRouter, Routes, Route } from "react-router-dom";
 import './App.css';
import Header from "./Components/Common/Header/Header";
import LinkComponent from './Components/Feature/Link Component/ImgVideoLink';
import ImageInputPreview from './Components/Feature/ImageInput/imageInput';
import VideoInputPreview from './Components/Feature/VideoInput/videoInput'; 

function App() {
  return (
    <div  class='flex flex-col h-screen items-center pt-2 pb-20 bg-indigo-900'>
        <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkComponent/>} />
          <Route path="imginput" element={<ImageInputPreview/>} />
          <Route path="videoinput" element={<VideoInputPreview/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
