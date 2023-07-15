import "./caroussel.css";

export default function Caroussel(carsPhoto) {
  const photos = carsPhoto.photos.results;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomInt3(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="carousel">
      <div className="carousel-item">
        <img
          className="images"
          src={photos[getRandomInt(2, 4)].urls.small}
          alt=""
        />

        <img
          className="images"
          src={photos[getRandomInt2(5, 7)].urls.small}
          alt=""
        />

        <img
          className="images"
          src={photos[getRandomInt3(8, 10)].urls.small}
          alt=""
        />
      </div>
    </div>
  );
}
