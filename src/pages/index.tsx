import React from 'react'
import Head from 'next/head'
import { Main } from '../styles/styles'

import Banner from '../assets/images/banner.svg'
import { ImageContainer, SmallTitle } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Main>
      <Head>
        <title>GHM Technologies - Soluções rápidas para o seu negócio.</title>
      </Head>
      <main>
        <ImageContainer>
          <Banner />
        </ImageContainer>
        <SmallTitle>Em manutenção...</SmallTitle>
      </main>
    </Main>
  )
}

export default Home
