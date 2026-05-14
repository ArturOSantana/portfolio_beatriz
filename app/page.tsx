import { client } from '@/lib/sanity'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BrandsCarousel from './components/BrandsCarousel'
import About from './components/About'
import PortfolioCategories from './components/PortfolioCategories'
import Contact from './components/Contact'

async function getSettings() {
  try {
    const query = `*[_type == "siteSettings"][0]{
      heroTitle,
      heroSubtitle,
      heroButtonText,
      heroImage,
      "resumeUrl": resumeFile.asset->url,
      aboutTitle,
      aboutText,
      aboutImage,
      email,
      phone,
      whatsappNumber,
      whatsappMessage,
      linkedinUrl,
      instagramUrl,
      twitterUrl,
      facebookUrl,
      youtubeUrl,
      primaryColor,
      secondaryColor,
      darkColor
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.error('Erro ao buscar configurações do Sanity:', error)
    return null
  }
}

export const revalidate = 30

export default async function Home() {
  const settings = await getSettings()

  return (
    <>
      <Header />
      <main>
        <Hero
          title={settings?.heroTitle || 'Beatriz - Jornalista Profissional'}
          subtitle={settings?.heroSubtitle || 'Redação jornalística, assessoria de imprensa, ghostwriting e blog posts com excelência e credibilidade.'}
          buttonText={settings?.heroButtonText}
          image={settings?.heroImage}
          resumeUrl={settings?.resumeUrl}
        />
        <BrandsCarousel />
        <About
          title={settings?.aboutTitle || 'Sobre Mim'}
          text={settings?.aboutText || 'Jornalista com ampla experiência em redação, assessoria de imprensa e produção de conteúdo. Trabalho com grandes veículos e empresas, entregando textos de qualidade e com credibilidade jornalística.'}
          image={settings?.aboutImage}
        />
        <PortfolioCategories />
        <Contact
          email={settings?.email}
          phone={settings?.phone}
          whatsappNumber={settings?.whatsappNumber}
          whatsappMessage={settings?.whatsappMessage}
          linkedinUrl={settings?.linkedinUrl}
          instagramUrl={settings?.instagramUrl}
          twitterUrl={settings?.twitterUrl}
          facebookUrl={settings?.facebookUrl}
          youtubeUrl={settings?.youtubeUrl}
        />
      </main>
      <Footer />
    </>
  )
}

