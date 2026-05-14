'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showBackToTop && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} Beatriz. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

