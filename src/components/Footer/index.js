import "./footer.css";
import { Link } from "react-router-dom";
import { FiLinkedin, FiGithub, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer">
      <hr className="hr_line" />
      <div className="links">
        <Link>
          <FiGithub />
          GitHub
        </Link>
        <Link>
          <FiLinkedin />
          LinkedIn
        </Link>
        <Link>
          <FiMessageCircle />
          WhatsApp
        </Link>
      </div>
      <div className="credits">Desenvolvido por Douglas Peres.</div>
    </div>
  );
}
