import { useState } from "react";
import style from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={style.container}>
      <h1>Em que podemos te ajudar</h1>
      <input type="text" placeholder="Por onde vamos começar ?" />
    </div>
  );
}

export { Contacts };
