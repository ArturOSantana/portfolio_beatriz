import Link from 'next/link'

const categories = [
  {
    slug: 'redacao-jornalistica',
    title: 'Redação Jornalística',
    description: 'Reportagens e matérias para grandes veículos.'
  },
  {
    slug: 'assessoria-de-imprensa',
    title: 'Assessoria de Imprensa',
    description: 'Releases, notas e cobertura institucional.'
  },
  {
    slug: 'ghostwriting',
    title: 'Ghostwriting',
    description: 'Textos assinados por executivos e influenciadores.'
  },
  {
    slug: 'blog-post',
    title: 'Blog Post',
    description: 'Conteúdos criativos para blogs e mídias digitais.'
  }
]

export default function PortfolioCategories() {
  return (
    <section id="portfolio" className="portfolio-categorias">
      <div className="container">
        <h3 className="titulo-secao sem-barra">Portfólio</h3>
        <p className="section-subtitle">Veja meu portfólio por área</p>

        <div className="grid">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="card"
            >
              <h4>{category.title}</h4>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

