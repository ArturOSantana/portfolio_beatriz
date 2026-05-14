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
  resumeUrl?: string
}

export default function Hero({ title, subtitle, buttonText = 'Ver portfólio', image, resumeUrl }: HeroProps) {
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
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary" onClick={scrollToPortfolio}>
              {buttonText}
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                className="btn btn-secondary"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Baixar Currículo
              </a>
            )}
          </div>
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

