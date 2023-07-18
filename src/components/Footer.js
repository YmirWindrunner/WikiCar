import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        {/* <p>footer</p> */}
        <li className="linkedin">
          <Link to={"https://www.linkedin.com/feed/"}>
            <img
              src="Linkedin.png"
              style={{ width: "64px", height: "64px" }}
              alt=""
            />
          </Link>
        </li>
        <li className="github">
          <Link to={"https://github.com/YmirWindrunner"}>
            <img
              src="git.png"
              style={{ width: "64px", height: "64px" }}
              alt=""
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
