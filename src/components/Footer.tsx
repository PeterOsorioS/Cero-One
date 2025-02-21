import { Instagram, Linkedin, Facebook } from "lucide-react"; 
export function Footer() {
  return (
    <footer className="py-12 border-t border-[#222222]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">  

          {/* Bloque: Nuestra Ubicación */}
          <div className="flex flex-col items-center">  
            <h3 className="text-xl font-bold mb-4">Nuestra Ubicación</h3>
            <p className="text-gray-400">México, Ciudad de México</p>
            <p className="text-gray-400">Colombia, Medellin</p>
          </div>

          {/* Bloque: Síguenos */}
          <div className="flex flex-col items-center">  
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex gap-6">
              {/* Enlace a Instagram */}
              <a 
                href="https://www.instagram.com/ceroone_solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E63946]"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* Enlace a LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/cero-one-solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E63946]"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Enlace a Facebook */}
              <a 
                href="https://www.facebook.com/tu-cuenta" 
                target="_blank" 
                rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E63946]"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Bloque: Contacto */}
          <div className="flex flex-col items-center">  
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">Solutions@outlook.com</p>
            <p className="text-gray-400">(+52) 55 4731 4199</p>
          </div>

        </div>
      </div>
    </footer>
  )
}