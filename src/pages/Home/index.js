import "./home.css";
import perfil from "../../assets/perfil.png";
import delphi from "../../assets/delphi.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import node from "../../assets/node.png";
import sql from "../../assets/sql.png";

export default function Home() {
  return (
    <div className="home-main">
      <div className="text">
        <div className="group-icons">
          <div className="description">
            <img src={delphi} alt="delphi" className="icons" /> Delphi
          </div>
          <div className="description">
            <img src={react} alt="react" className="icons" /> React Js
          </div>
          <div className="description">
            <img src={js} alt="js" className="icons" /> JavaScript
          </div>
          <div className="description">
            <img src={html} alt="html" className="icons" /> HTML
          </div>
          <div className="description">
            <img src={css} alt="css" className="icons" /> CSS
          </div>
          <div className="description">
            <img src={node} alt="node" className="icons" /> Node Js
          </div>
          <div className="description">
            <img src={sql} alt="sql" className="icons" /> SQL
          </div>
        </div>
      </div>

      <div className="border-foto">
        <div className="border-back">
          <div className="foto">
            <div className="teste"><img src={perfil} alt="perfil" className="perfil" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
