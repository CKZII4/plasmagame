import { useEffect, useState } from'react';

constGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Appeler l'API pour obtenir la liste des imagesfetch('/api/images')
      .then(res => res.json())
      .then(data =>setImages(data));
  }, []);

  return (
    <div><h1>Gallery</h1><div>
        {images.map((image, index) => (
          <imgkey={index}src={image.filePath}alt={`Uploaded ${index}`} style={{maxWidth: '100%', height: 'auto'}} />
        ))}
      </div></div>
  );
};

exportdefaultGallery;
