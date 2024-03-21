import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="title">
        <strong>Contatos</strong>
        <FiPhone size={35} />
      </div>
      <div>
        LinkedIn
        <Link to={"https://www.linkedin.com/in/douglas-m-peres/"}>
          douglas-m-peres
        </Link>
      </div>
      <div>
        E-mail
        <Link>douglas_peres@icloud.com</Link>
      </div>
      <div>
        Telefone
        <Link>(18) 99681-4207</Link>
      </div>
    </div>
  );
}
