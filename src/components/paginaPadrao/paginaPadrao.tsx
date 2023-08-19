import { Outlet } from "react-router-dom";
import style from "./paginaPadrao.module.scss";
import styleTema from "styles/tema.module.scss";

export default function PaginaPadrao() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  );
}
