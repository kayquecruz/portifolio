import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./page/inicio/Inicio"
import Sobre from "./page/sobre/Sobre"
import Projetos from "./page/Projetos/Projetos"
import { GlobalStyle } from "./components/styled";

export default function App() {
  return (
    <>
    <GlobalStyle/>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/sobre" element={<Sobre/>} />
      <Route path="/projetos" element={<Projetos/>} />
    </Routes>
 </BrowserRouter>
    </>
  )
}
