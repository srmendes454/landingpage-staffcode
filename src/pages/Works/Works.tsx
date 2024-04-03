import { useState } from "react";
import style from "./Works.module.scss";
import classNames from "classnames";

function Works() {
  const [tabSelect, setTabSelect] = useState<string>("tab1");
  return (
    <div className={style.container}>
      <div className={style.tabs}>
        <input
          onClick={() => setTabSelect("tab1")}
          id="tab1"
          type="radio"
          name="tabs"
          defaultChecked
        />
        <label htmlFor="tab1"></label>
        <span></span>

        <input
          onClick={() => setTabSelect("tab2")}
          id="tab2"
          type="radio"
          name="tabs"
        />
        <label htmlFor="tab2"></label>
        <span></span>

        <input
          onClick={() => setTabSelect("tab3")}
          id="tab3"
          type="radio"
          name="tabs"
        />
        <label htmlFor="tab3"></label>
      </div>

      <section
        className={classNames(style.content, {
          [style.selected]: tabSelect === "tab1",
        })}
      >
        <h1>Tecnologias Trabalhadas</h1>
      </section>

      <section
        className={classNames(style.content, {
          [style.selected]: tabSelect === "tab2",
        })}
      >
        <h1>Controle Financeiro</h1>
      </section>

      <section
        className={classNames(style.content, {
          [style.selected]: tabSelect === "tab3",
        })}
      >
        <h1>God is very Good</h1>
        <div className={style.text}>
          <p>Fuuuuuuuuuuuuunciona</p>
        </div>
      </section>
    </div>
  );
}

export { Works };
