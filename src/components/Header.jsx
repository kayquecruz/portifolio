import { Link } from "react-router-dom";
import linkedin from "../assets/link.png"
import git from "../assets/git.png"
import insta from "../assets/insta.png"
import * as S from "./styled"


export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
            <img src="https://a91mcico4j0e.avataruol.com.br/avatar.jpg" alt="" />
            <S.Title>Kayque Gabriel</S.Title>
            <S.Text>Front-end Developer</S.Text>
        </S.BoxLogo>
              <S.Menu>
                <ul>
                <S.Lista linha="1px solid white"><Link to="/">Inicio</Link></S.Lista>
                    <S.Lista><Link to="/sobre">Sobre Mim</Link></S.Lista>
                    <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
                </ul>
                </S.Menu>
              <S.BoxRedes>
                <a href="https://www.linkedin.com/in/kayque-cruz-174570245/" target="_blank"> <img src={linkedin} alt="" /> </a>
                <a href="https://github.com/kayquecruz" target="_blank"> <img src={git} alt="" /> </a>
                <a href="https://www.instagram.com/kayque_cruz_/" target="_blank"> <img src={insta} alt="" /> </a>
                </S.BoxRedes>
    </S.Header>
  )
}
