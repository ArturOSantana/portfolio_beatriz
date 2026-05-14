'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const logos = [
  'logo1.webp', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png',
  'logo6.webp', 'logo7.png', 'logo8.png', 'logo9.png', 'logo10.png'
]

export default function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount
        
        // Reset quando chegar ao fim
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
      }
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="brands">
      <div className="container">
        <h3>Marcas com as quais já trabalhei</h3>
        
        <div
          ref={scrollRef}
          className="overflow-hidden"
          style={{ scrollBehavior: 'auto', width: '100%' }}
        >
          <div className="flex gap-16 items-center py-4" style={{ width: 'max-content' }}>
            {/* Duplicar logos 3x para efeito infinito suave */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '160px',
                  height: '80px',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
              >
                <Image
                  src={`/assets/marcas/${logo}`}
                  alt={`Marca ${(index % logos.length) + 1}`}
                  width={160}
                  height={80}
                  style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

