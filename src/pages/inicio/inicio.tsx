import { useNavigate } from "react-router-dom";
import { Prato } from "types/prato";
import cardapio from "data/cardapio.json";
import style from "./inicio.module.scss";
import styleTema from "styles/tema.module.scss";
import nossaCasa from "assets/nossa_casa.png";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={styleTema.titulo}>Recomendações da cozinha</h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={style.recomendado}>
            <div className={style.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={style.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={styleTema.titulo}> Nossa Casa </h3>
      <div className={style.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={style.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
