import { client } from '@/lib/sanity'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

const categoryNames: { [key: string]: string } = {
  'redacao-jornalistica': 'Redação Jornalística',
  'assessoria-de-imprensa': 'Assessoria de Imprensa',
  'ghostwriting': 'Ghostwriting',
  'blog-post': 'Blog Post'
}

async function getPortfolioByCategory(category: string) {
  try {
    const query = `*[_type == "portfolio" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      linkMateria,
      category
    }`
    
    return await client.fetch(query, { category })
  } catch (error) {
    console.log('Sanity não configurado ainda')
    return []
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const portfolios = await getPortfolioByCategory(params.slug)
  const categoryName = categoryNames[params.slug] || params.slug

  return (
    <>
      <Header />
      <main className="categoria-portfolio">
        <div className="container">
          <div className="voltar" style={{ marginBottom: '2rem', textAlign: 'left' }}>
            <Link href="/#portfolio" className="btn-voltar">
              ← Voltar para o portfólio
            </Link>
          </div>

          <h2 className="titulo-secao">{categoryName}</h2>
          <p className="section-subtitle">
            Veja abaixo os trabalhos publicados nesta área:
          </p>

          {portfolios.length > 0 ? (
            <div className="grid">
              {portfolios.map((item: any) => (
                <div key={item._id} className="card">
                  {item.mainImage && (
                    <div className="card-image">
                      <Image
                        src={urlFor(item.mainImage).width(600).url()}
                        alt={item.title}
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                  
                  {item.linkMateria ? (
                    <a
                      href={item.linkMateria}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Ver matéria original
                    </a>
                  ) : (
                    <Link
                      href={`/portfolio/${item.slug.current}`}
                      className="btn"
                    >
                      Ver detalhes
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: '#666', fontSize: '1.1rem' }}>
              Nenhum trabalho publicado ainda nesta categoria.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'redacao-jornalistica' },
    { slug: 'assessoria-de-imprensa' },
    { slug: 'ghostwriting' },
    { slug: 'blog-post' }
  ]
}

