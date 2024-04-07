import style from "./InternalLayout.module.scss";
import { ReactNode } from "react";
import iconLogo from "../../assets/IconStaffCode.svg";
import { useHref, useNavigate } from "react-router-dom";

interface InternalLayoutProps {
  children: ReactNode;
  timeLine?: ReactNode;
}

function InternalLayout({ children }: InternalLayoutProps) {
  const navigate = useNavigate();
  const href = useHref("");

  return (
    <div className={style.container}>
      <div className={style.custom_navbar}>
        <div className={style.logo}>
          <img src={iconLogo} alt="" onClick={() => navigate("*")} />
        </div>
        <div className={style.navbarlinks}>
          <ul className={style.nav}>
            <li className={style.itemNav}>
              <p onClick={() => navigate("*")}>Home</p>
            </li>
            <li className={style.itemNav}>
              <p className={href.includes("/about") ? style.active : ""} onClick={() => navigate("/about")}>Sobre</p>
            </li>
            <li className={style.itemNav}>
              <p className={href.includes("/works") ? style.active : ""} onClick={() => navigate("/works")}>Trabalhos</p>
            </li>
            <li className={style.itemNav}>
              <p className={href.includes("/contacts") ? style.active : ""} onClick={() => navigate("/contacts")}>Contatos</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.info}>{children}</div>
    </div>
  );
}

export { InternalLayout };
