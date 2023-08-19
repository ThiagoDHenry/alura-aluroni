import { useNavigate } from "react-router-dom";
import { Prato } from "types/prato";
import TagsPrato from "components/tagsPrato/tagsprato";
import style from "./item.module.scss";

export default function Item(props: Prato) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
