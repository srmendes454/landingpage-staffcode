import { useState } from "react";
import style from "./Works.module.scss";
import classNames from "classnames";

function Works() {
  const [tabSelect, setTabSelect] = useState<string>("tab1");
  const techs = [
    {
      id: 1,
      name: "C#",
    },
    {
      id: 2,
      name: ".NET",
    },
    {
      id: 3,
      name: "ASP.NET",
    },
    {
      id: 4,
      name: "Api's",
    },
    {
      id: 5,
      name: "MongoDB",
    },
    {
      id: 6,
      name: "SQL Server",
    },
    {
      id: 7,
      name: "Redis Cache",
    },
    {
      id: 8,
      name: "Oracle",
    },
    {
      id: 9,
      name: "Arquitetura de Software",
    },
    {
      id: 10,
      name: "AWS",
    },
    {
      id: 11,
      name: "Azure",
    },
    {
      id: 12,
      name: "Git Hub",
    },
    {
      id: 13,
      name: "HTML",
    },
    {
      id: 14,
      name: "JS",
    },
    {
      id: 15,
      name: "TS",
    },
    {
      id: 16,
      name: "ReactJS",
    },
    {
      id: 17,
      name: "SASS",
    },
    {
      id: 18,
      name: "CSS",
    },
    {
      id: 19,
      name: "Designer UI",
    },
    {
      id: 20,
      name: "Prototipação",
    },
    {
      id: 21,
      name: "Figma",
    },
  ];

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
        <div className={style.techs}>
          {techs.map((tech, key) => (
            <span key={key}>{tech.name}</span>
          ))}
        </div>
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
