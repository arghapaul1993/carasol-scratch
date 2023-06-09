import { useState, useEffect } from "react";
import './mycss.css';
import pic1 from './img/img(1).webp';
import pic2 from './img/img(2).webp';
import pic3 from './img/img(15).webp';
import pic4 from './img/img(4).webp';
import pic5 from './img/img16.webp';
import pic6 from './img/img(6).webp';
import pic7 from './img/img(7).webp';
import pic8 from './img/img(8).webp';
import pic9 from './img/img(9).webp';

const images=[
    
  {
    src: pic1,
    alt: "mera naam aman hai",
    title: "Andhra Pradesh Tourism",
    description: "Get to know more about the “Kohinoor state” of India in terms of tourism",
    thumbnailSrc: pic1,
  },

  {
    src: pic2,
    alt: "Example image 2",
    title: "Bangalore Tourism, Karnataka",
    description: "The IT hub and Silicon Valley of India.",
    thumbnailSrc: pic2,
  },
  {
    src: pic3,
    alt: "Example image 2",
    title: "West Bengal Tourism",
    description: "The land of lush greenery and delectable cuisine beckons you.",
    thumbnailSrc: pic3,
  },
  {
    src: pic4,
    alt: "Example image 2",
    title: "Hampi Tourism",
    description: "The Mysterious charm of Hampi will bowl you over",
    thumbnailSrc: pic4,
  },
  {
    src: pic5,
    alt: "Example image 2",
    title: "Himachal Tourism",
    description: "A perfect travel guide crafted as per 2 Lakh+ experiences in Himachal.",
    thumbnailSrc: pic5,
  },
  {
    src: pic6,
    alt: "Example image 2",
    title: "India Tourism",
    description: "Craft an incredible holiday to this wonderland based on the firsthand experiences of 3 million+ travelers",
    thumbnailSrc: pic6,
  },
  {
    src: pic7,
    alt: "Example image 2",
    title: "Jammu and Kashmir Tourism",
    description: "Enjoy the picturesque beauty of Kashmir and its valleys.",
    thumbnailSrc: pic7,
  },
  {
    src: pic8,
    title: "Kerala Tourism",
    description: "Enjoy the picturesque beauty of Kashmir and its valleys.",
    thumbnailSrc: pic8,
  },

  {
    src: pic9,
    alt: "Example image 3",
    title: "Kovalam Tourism, Kerala",
    description: "Set off for a tour to this serene & most beautiful state of South India",
    thumbnailSrc: pic9,
  },
  
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((currentIndex + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="image-carousel">
      <div className="image-container">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="image-details">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
      <div className="indicators">
        {images.map((image, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailSrc}
            alt={image.alt}
            className={index === currentIndex ? "active" : "inactive"}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
