export function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Nuestros proyectos</h2>
        <p className="text-gray-400 mb-12">
          Desarrollamos soluciones innovadoras que transforman la manera en que nuestros clientes hacen negocios.
        </p>

        <div className="bg-[#1A1A1A] p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <img src="/placeholder.svg?height=300&width=400" alt="Waze plus project" className="w-full rounded-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">waze plus</h3>
              <p className="text-gray-400">
                Aplicación de navegación colaborativa. Permite que una empresa ágil, eficiente y segura obtenga rutas
                optimizadas en tiempo real, que sean tanto para el día... encuentre en la aplicación la mejor ruta para
                llegar a su destino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

