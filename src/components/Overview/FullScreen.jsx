import {useState} from 'react';
import ImageGallery from './imageGallery.jsx';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useImageSize } from 'react-image-size';

const FullScreen = ({setFullScreen, styleSelected, setIndex, index, setPhoto, photo}) => {


  const [dimensions, { loading, error }] = useImageSize(styleSelected.photos[index].thumbnail_url);
  // let [size, setSize] = useState({height: 100, width: 100})

  let handleFullScreen = () => {
    setFullScreen(false);
  };

  const nextButton = () => {
    let lastButton = index === styleSelected.photos.length - 1;
    let newIndex = lastButton ? 0 : index + 1;
    setIndex(newIndex);
    setPhoto(styleSelected.photos[newIndex].url)
  }

  const backButton = () => {
    let firstButton = index === 0;
    let newIndex = firstButton ? styleSelected.photos.length - 1 : index - 1;
    setIndex(newIndex);
    setPhoto(styleSelected.photos[newIndex].url)
  }


  return (
    <>
    <div className="flex justify-center">
      {/* <img src={styleSelected.photos[index].thumbnail_url} className="w-full max-h-[40%] max-w-[40%] rounded-2xl bg-center bg-cover duration-500 flex-1"></img> */}
      <div className="flex mb-6">

      <InnerImageZoom
            src = {styleSelected.photos[index].url}
            zoomSrc= {styleSelected.photos[index].url}
            width = {dimensions?.width * 1.5}
            zoomScale = {1}
            fullscreenOnMobile={true}
            hideHint={false} // default false
            // zoomType="hover"
            className="cursor-crosshair"
            />
            </div>
      </div>
          <div className="flex flex-row justify-center">
            <ImageGallery className="flex-1 mb-6" styleSelected={styleSelected} setPhoto={setPhoto} photo={photo} setIndex={setIndex} index={index}/>
          </div>
      <div className="absolute top-[10%] left-[30%] rounded-full p-2 bg-black/20">
        <button onClick={backButton}>🢀</button>
        </div>
        <div className="absolute top-[10%] right-[30%] rounded-full p-2 bg-black/20">
          <button onClick={nextButton}>🢂</button>
          </div>
    <div className="flex justify-center">
      <button className='btn flex-1 mb-6' onClick={() => handleFullScreen()}>Exit Full Screen</button>
      </div>
    </>
    )
  }
  export default FullScreen;