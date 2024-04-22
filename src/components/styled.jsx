import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
`

export const Header = styled.header`
border: solid 1px;
background-color:#677e8b;
width: 17vw;
display: flex;
align-items: center;
flex-direction: column;
@media(max-width: 700px) {
  width: 20vw;
}

@media(max-width: 500px) {
  width: 25vw;
}
`

export const BoxLogo = styled.div `
width: 100%;
height: 35vh;
display: flex;
align-items: center;
flex-direction: column;
img{
  width: 12vw;
}
`
export const Title = styled.h2`
width: 100%;
text-align: center;
color: white;
`

export const Text = styled.p`
width: 100%;
text-align: center;
color: #ffffff;
`

export const Menu = styled.nav`
  border: 2px solid #ffffff;
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 ul {
    list-style: none; 
    width: 100%;
  }
`
export const Lista = styled.li`
width: 100%;
height: 11.6vh;
display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px white;
border-top:${props => props.linha};
a{
  color: white;
}
 @media(max-width: 500px) {
      height: 8vh;
   }
`

export const BoxRedes = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  img{
    width: 6vh;
  }
  
 @media(max-width: 500px) {
      width: 100%;
      flex-direction: row;
      height: 9vh;
   }
`;