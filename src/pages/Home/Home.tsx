import style from "./Home.module.scss";
import logo from "../../assets/LogoStaffCode.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <Tooltip
        id="my-tooltip"
        border="1px solid #333F50"
        style={{ backgroundColor: "#20262F", color: "white", borderRadius: "24px", paddingLeft: "12px", paddingRight: "12px", paddingTop: 0, paddingBottom: 0 }}
        arrowColor="#2158AA"
      />
      <img src={logo} alt="logo" />
      <div className={style.slogan}>
        <h1>Você no Controle</h1>
      </div>
      <div className={style.menu}>
        <input type="checkbox" />
        <span className="bi bi-mouse"></span>
        <ul>
          <li
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Sobre"
            data-tooltip-place="bottom"
          >
            <i
              className="bi bi-person-exclamation"
              onClick={() => navigate("/about")}
            ></i>
          </li>
          <li
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Trabalhos"
            data-tooltip-place="bottom">
            <i
              className="bi bi-suitcase-lg"
              onClick={() => navigate("/works")}
            ></i>
          </li>
          <li
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Contatos"
            data-tooltip-place="bottom">
            <i
              className="bi bi-person-video2"
              onClick={() => navigate("/contacts")}
            ></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Home };
