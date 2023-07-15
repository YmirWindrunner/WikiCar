import "./CarsDetails.css";
export default function CarsDetailps(cars) {
  console.log(cars);
  return (
    <div className="Tout">
      <div className="title">
        {cars.cars[0].make} {cars.cars[0].model}{" "}
      </div>
      <div className="details">
        <p>
          <span className="text_brut"> Year of release </span>{" "}
          {cars.cars[0].year}
        </p>
        <p>
          <span className="text_brut">Transmission</span>{" "}
          {cars.cars[0].transmission}
        </p>
        <p>
          <span className="text_brut">Cylinders</span> {cars.cars[0].cylinders}
        </p>
        <p>
          <span className="text_brut">Displacement</span>{" "}
          {cars.cars[0].displacement}
        </p>
        <p>
          <span className="text_brut">City mpg</span> {cars.cars[0].city_mpg}
        </p>
        {/* <p>
          <span className="text_brut">Highway mpg</span>{" "}
          {cars.cars[0].highway_mpg}
        </p> */}
        <p>
          <span className="text_brut">Combination_mpg</span>{" "}
          {cars.cars[0].combination_mpg}
        </p>
        <p>
          <span className="text_brut">Fuel type</span> {cars.cars[0].fuel_type}
        </p>
        <p>
          <span className="text_brut">Class</span> {cars.cars[0].class}
        </p>
      </div>
    </div>
  );
}
