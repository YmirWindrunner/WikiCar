import { useLocation } from "react-router-dom";
import MyCaroussel from "../components/caroussel";
import "./Cars.css";
import CarsDetails from "../components/CarsDetails";

export default function Cars() {
  const location = useLocation();
  const cars = location.state.apiResponses;
  const carsPhoto = location.state.apiResponsePhoto;
  return (
    <>
      <div className="my-carousel">
        <div className="photos">
          <MyCaroussel photos={carsPhoto} />
        </div>
        <CarsDetails cars={cars} />
      </div>
    </>
  );
}
