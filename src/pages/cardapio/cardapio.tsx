import { useState } from "react";

import style from "./Cardapio.module.scss";
import styleTema from "styles/tema.module.scss";

import Buscador from "./buscador/buscador";
import Filtros from "./filtros/filtros";
import Ordenador from "./ordenador/ordenador";
import Itens from "./itens/itens";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <section className={style.cardapio}>
      <h3 className={styleTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={style.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
