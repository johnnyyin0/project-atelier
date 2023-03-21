import SingleImage from './SingleImage.jsx';

const ImageGallery = ({styleSelected, setPhoto, photo}) => {
  console.log(photo)
  return (
    <div>
      {styleSelected.photos.map(image => {
        return <SingleImage image={image} setPhoto={setPhoto} photo={photo}/>
      })}
    </div>
  );
}

export default ImageGallery;