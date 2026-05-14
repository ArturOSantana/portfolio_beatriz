'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface AboutProps {
  title: string
  text: string
  image?: {
    asset: {
      _ref: string
    }
  }
}

export default function About({ title, text, image }: AboutProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Conta o número de linhas (aproximadamente 80 caracteres por linha)
  const lines = text ? Math.ceil(text.length / 80) : 0
  const shouldShowReadMore = lines > 4
  
  // Pega os primeiros ~320 caracteres (4 linhas)
  const shortText = text ? text.substring(0, 320) : ''
  const displayText = isExpanded || !shouldShowReadMore ? text : shortText

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h3>{title}</h3>
            <p className={isExpanded ? 'expanded' : 'collapsed'}>
              {displayText}
              {!isExpanded && shouldShowReadMore && '...'}
            </p>
            {shouldShowReadMore && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="read-more-btn"
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    Ler menos
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    Ler mais
                  </>
                )}
              </button>
            )}
          </div>
          
          <div className="about-photo">
            {image ? (
              <Image
                src={urlFor(image).width(500).url()}
                alt="Sobre a jornalista"
                width={250}
                height={250}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                className="about-photo-img"
              />
            ) : (
              <Image
                src="/assets/foto2.jpg"
                alt="Sobre a jornalista"
                width={250}
                height={250}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                className="about-photo-img"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Made with Bob
