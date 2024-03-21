import { Link } from "react-router-dom";
import { FiHome, FiCode, FiInfo, FiPhone } from "react-icons/fi";

import "./header.css";
export default function Header() {
  return (
    <div className="sidebar">
      <Link to={"/"}>
        <FiHome size={28} />
        Home
      </Link>
      <Link>
        <FiCode size={28} />
        Projects
      </Link>
      <Link>
        <FiInfo size={28} />
        About
      </Link>
      <Link to={"/contact"}>
        <FiPhone size={28} />
        Contact
      </Link>
    </div>
  );
}
