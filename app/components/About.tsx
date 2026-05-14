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
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h3>{title}</h3>
            <p>{text}</p>
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

