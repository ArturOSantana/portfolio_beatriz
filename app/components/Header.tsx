'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="container header-inner">
        <Link href="/" className="logo">Beatriz</Link>

        <button
          className="menu-toggle"
          id="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav id="navbar" className={isMenuOpen ? 'active' : ''}>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

