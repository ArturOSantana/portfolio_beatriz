'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface HeroProps {
  title: string
  subtitle: string
  buttonText?: string
  image?: {
    asset: {
      _ref: string
    }
  }
}

export default function Hero({ title, subtitle, buttonText = 'Ver portfólio', image }: HeroProps) {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="xhero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <a href="#portfolio" className="btn" onClick={scrollToPortfolio}>
            {buttonText}
          </a>
        </div>
        
        <div className="hero-photo">
          {image ? (
            <Image
              src={urlFor(image).width(600).url()}
              alt="Foto profissional"
              width={300}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              priority
            />
          ) : (
            <Image
              src="/assets/foto1.jpeg"
              alt="Foto profissional"
              width={300}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              priority
            />
          )}
        </div>
      </div>
    </section>
  )
}

