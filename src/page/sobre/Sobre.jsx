import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"

export default function Sobre() {
  return (
 <S.Main>
      <Header/>
      <section>
        <img src="https://a91mcico4j0e.avataruol.com.br/avatar.jpg" alt="" />
        <h2>Sobre Mim</h2>
        <p>Olá! Meu nome é Kayque, tenho 17 anos e estou iniciando na carreira de front-end,</p>
      </section>
    </S.Main>
  )
}
