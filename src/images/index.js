import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';
import image8 from './8.jpg';
import image9 from './9.jpg';
import image10 from './10.jpg';
import image11 from './11.jpg';
import image12 from './12.jpg';
import image13 from './13.jpg';
import image14 from './14.jpg';
import image15 from './15.jpg';
import image16 from './16.jpg';
import image17 from './17.jpg';
import image18 from './18.jpg';
import image19 from './19.jpg';
import image20 from './20.jpg';

const IMAGES = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
  { src: image10 },
  { src: image11 },
  { src: image13 },
  { src: image12, contain: true },
  { src: image14 },
  { src: image15 },
  { src: image16 },
  { src: image17 },
  { src: image18 },
  { src: image18 },
  { src: image19 },
  { src: image20 },
];

function shuffleArray(array) {
  const toShuffle = [...array];
  const shuffled = [];

  while (toShuffle.length > 0) {
    const [toAdd] = toShuffle.splice(Math.floor(toShuffle.length * Math.random()), 1);
    shuffled.push(toAdd);
  }

  return shuffled;
}

export function shuffledImages() {
  return shuffleArray(IMAGES);
}
