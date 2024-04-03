import { ReactNode } from "react";
import style from "./ExternalLayout.module.scss";

interface ExternalLayoutProps {
  children: ReactNode;
}

function ExternalLayout({ children }: ExternalLayoutProps) {

  return (
    <div className={style.container}>
      {children}
      <div className={style.particles_js} id="particles_js"></div>
    </div>
  );
}

export { ExternalLayout };
