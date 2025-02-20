"use client"

import { useState } from "react"
import { Button } from "./ui/Button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = ( e: React.MouseEvent<HTMLDivElement> ) => {
    const target = e.target as HTMLElement;
    if ( target.closest("a") || target.closest("button") ) {
          setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:px-24 bg-[#111111]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl  text-white hover:text-[#A12831] flex items-center gap-2 font-monomaniac">
              <span className="text-[#E63946] ">&lt;/&gt;</span>
              {'[ERO {}NE'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 justify-center content-center">
            <a href="#" className="text-white border-b-2 border-[#E63946] w-16 hover:text-[#E63946] transition-colors">
              Inicio
            </a>
            <a href="#Nosotros" className="text-white hover:text-red-500 w-16 transition-colors">
              Nosotros
            </a>
            <a href="#" className="text-white hover:text-red-500 w-16 transition-colors">
              Servicios
            </a>
          </div>
          <a href="#Contacto">
            <Button className="hidden md:flex" variant="rounded" color="red">Contáctanos</Button>
          </a>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4" onClick={handleCloseMenu}>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                Inicio
              </a>
              <a href="#Nosotros" className="text-white hover:text-red-500 transition-colors">
                Nosotros
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                Servicios
              </a>
              <a href="#Contacto" className="md:hidden flex justify-center">
                <Button variant="rounded" color="red">Contáctanos</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

