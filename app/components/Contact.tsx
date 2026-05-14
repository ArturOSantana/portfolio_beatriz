interface ContactProps {
  email?: string
  phone?: string
  whatsappNumber?: string
  whatsappMessage?: string
  linkedinUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  facebookUrl?: string
  youtubeUrl?: string
}

export default function Contact({
  email,
  phone,
  whatsappNumber,
  whatsappMessage = 'Olá! Gostaria de saber mais sobre seus serviços.',
  linkedinUrl,
  instagramUrl,
  twitterUrl,
  facebookUrl,
  youtubeUrl
}: ContactProps) {
  // Gera link do WhatsApp com mensagem
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : null

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h3>Contato</h3>
        <p>Entre em contato por uma das plataformas abaixo:</p>

        <div className="contact-buttons">
          {email && (
            <a
              href={`mailto:${email}`}
              className="btn"
            >
              <i className="fa-solid fa-envelope"></i> E-mail
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="btn"
            >
              <i className="fa-solid fa-phone"></i> Telefone
            </a>
          )}

          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          )}

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          )}

          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              <i className="fa-brands fa-x-twitter"></i> Twitter
            </a>
          )}

          {facebookUrl && (
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              <i className="fa-brands fa-facebook"></i> Facebook
            </a>
          )}

          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              <i className="fa-brands fa-youtube"></i> YouTube
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

