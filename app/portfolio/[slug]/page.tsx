import { client } from '@/lib/sanity'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

async function getPortfolio(slug: string) {
  try {
    const query = `*[_type == "portfolio" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      linkMateria,
      category,
      publishedAt
    }`
    
    return await client.fetch(query, { slug })
  } catch {
    console.log('Sanity não configurado ainda')
    return null
  }
}

export const revalidate = 30

export default async function PortfolioPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const portfolio = await getPortfolio(slug)

  if (!portfolio) {
    return (
      <>
        <Header />
        <main className="post-detalhe">
          <div className="container">
            <h1 className="titulo-secao">Trabalho não encontrado</h1>
            <div className="voltar">
              <Link href="/" className="btn-voltar">
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="container">
        <article className="post-detalhe">
          <h1 className="titulo-secao">{portfolio.title}</h1>

          <div className="post-conteudo">
            {portfolio.mainImage && (
              <div className="post-thumb">
                <Image
                  src={urlFor(portfolio.mainImage).width(1200).url()}
                  alt={portfolio.title}
                  width={800}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}

            <div className="post-texto">
              <p className="resumo">{portfolio.excerpt}</p>

              {portfolio.linkMateria && (
                <a
                  href={portfolio.linkMateria}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Ver matéria original
                </a>
              )}
            </div>
          </div>

          <div className="voltar">
            <Link href="/#portfolio" className="btn-voltar">
              ← Voltar para o portfólio
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

