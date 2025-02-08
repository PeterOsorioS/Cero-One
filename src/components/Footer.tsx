export function Footer() {
  return (
    <footer className="py-12 border-t border-[#222222]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestra Ubicación</h3>
            <p className="text-gray-400">Av. Principal #123, Ciudad</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">
              Email: info@zeroone.com
              <br />
              Tel: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

