import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "components/menu/menu";
import PaginaPadrao from "components/paginaPadrao/paginaPadrao";
import Footer from "components/footer/footer";
import NotFound from "pages/notfound/notfound";
import Cardapio from "pages/cardapio/cardapio";
import Inicio from "pages/inicio/inicio";
import Sobre from "pages/sobre/sobre";
import Prato from "pages/prato/prato";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
