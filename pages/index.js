import Head from 'next/head'
import Header from '../components/Header'
import BannerHero from '../components/BannerHero'
import IconsEmpresas from '../components/IconsEmpresas'
import Serction01 from '../components/Section01'
import Serction02 from '../components/Section02'
import Serction03 from '../components/Section03'
import Serction04 from '../components/Section04'
import Serction05 from '../components/Section05'
import Serction06 from '../components/Section06'

export default function TestePage() {
  return (
    <div >
      <Head>
        <title>Next Props</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BannerHero />
      <IconsEmpresas />
      <Serction01 />
      <Serction02 />
      <Serction03 />
      <Serction04 />
      <Serction05 />
      <Serction06 />

    </div>
  )
}