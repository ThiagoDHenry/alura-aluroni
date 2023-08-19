import style from "./footer.module.scss";
import { ReactComponent as Logo } from "assets/aluroni-logo.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Logo />
    </footer>
  );
}
