import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 20)));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Image Gallery</span>
      </nav>

      <div className="container mt-4">
        <div className="row">
          {photos.map(photo => (
            <div key={photo.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img src={photo.url} alt={photo.title} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"><span style={{fontFamily:"-moz-initial", fontWeight:"bold"}}>TITLE</span>: <span style={{color:"RED"}}>{photo.title}</span></h5>
                  <h6 className="card-title"><span style={{fontFamily:"-moz-initial", fontWeight:"bold"}}>URL</span>:{photo.url}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
