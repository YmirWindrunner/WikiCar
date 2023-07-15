import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to={"/"}>
            <img
              src="koe.png"
              style={{ width: "64px", height: "64px" }}
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <p className="navbar-p">About </p>
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <p className="navbar-p">Contact </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
