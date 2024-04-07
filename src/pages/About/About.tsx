import { useState } from "react";
import style from "./About.module.scss";
import classNames from "classnames";
import photo from "../../assets/LogoStaffCode.svg";

function About() {
  const [tabSelect, setTabSelect] = useState<string>("tab1");
  const hardSkils = [
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
      name: "SQL Server",
    },
    {
      id: 4,
      name: "MongoDB",
    },
    {
      id: 5,
      name: "Arquitetura de Software",
    },
    {
      id: 6,
      name: "AWS",
    },
    {
      id: 7,
      name: "TDD",
    },
    {
      id: 8,
      name: "JS",
    },
    {
      id: 9,
      name: "TS",
    },
    {
      id: 10,
      name: "Figma",
    },
    {
      id: 11,
      name: "SASS",
    },
    {
      id: 12,
      name: "CSS",
    },
    {
      id: 13,
      name: "DDD",
    },
    {
      id: 14,
      name: "Clean Code",
    },
    {
      id: 15,
      name: "HTML",
    },
    {
      id: 16,
      name: "Kanban",
    },
    {
      id: 17,
      name: "GitHub",
    },
    {
      id: 18,
      name: "SOLID",
    },
    {
      id: 19,
      name: "Scrum",
    },
    {
      id: 20,
      name: "Azure",
    },
    {
      id: 21,
      name: "Designer Patterns",
    },
    {
      id: 22,
      name: "ReactJs",
    },
    {
      id: 23,
      name: "Api's",
    },
  ];

  const softSkils = [
    {
      id: 1,
      name: "Organizado",
    },
    {
      id: 2,
      name: "Focado",
    },
    {
      id: 3,
      name: "Solução de Problemas",
    },
    {
      id: 4,
      name: "Pontual",
    },
    {
      id: 5,
      name: "Autogerenciável",
    },
    {
      id: 6,
      name: "Comunicativo",
    },
    {
      id: 7,
      name: "Trabalho em Equipe",
    },
    {
      id: 8,
      name: "Estudos",
    },
    {
      id: 9,
      name: "Proatividade",
    },
    {
      id: 10,
      name: "Dinâmico",
    },
    {
      id: 11,
      name: "Líder",
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
      </div>

      <section
        className={classNames(style.content, {
          [style.selected]: tabSelect === "tab1",
        })}
      >
        <h1>Sobre</h1>
        <div className={style.text}>
          <p>
            A Staff Code foi fundada em 2023 pelo Arquiteto de Software, Rafael
            Mendes, que tinha como intuito, ajudar na transformação digital
            personalizada para cada cliente.
          </p>
          <p>
            Junto a essa ideia, também teve como planejamento oferecer
            aprendizado de qualidade para novos Devs que ainda não teria
            experiência de mercado, treinando-o para estar capacitado a alcançar
            novos desafios.
          </p>
        </div>
      </section>

      <section
        className={classNames(style.content, {
          [style.selected]: tabSelect === "tab2",
        })}
      >
        <h1>Rafael Mendes</h1>
        <p>Pós-graduando em Arquitetura de Software.</p>
        <div className={style.skils}>
          <div className={style.tagsSoft} >
            <h6>Soft Skils</h6>
            {softSkils.map((soft, key) => {
              return <span key={key}>{soft.name}</span>;
            })}
          </div>
          <div className={style.photo}>
            <img src={photo} alt="" />
          </div>
          <div className={style.tagsHard}>
            <h6>Hard Skils</h6>
            {hardSkils.map((hard, key) => {
              return <span key={key}>{hard.name}</span>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export { About };
