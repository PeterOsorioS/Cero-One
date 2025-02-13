import { icons_tech } from '../data/iconos'


export function TechStack() {
  return (
    <section className="lg:p-20">
      <div className="container mx-auto px-4">
      <h2 className='font-bold text-center pb-20 text-3xl'>Tecnologías</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-6 p-6">
        {icons_tech.map((tech, index) => (
          <div 
            key={index} 
            className="relative flex flex-col items-center justify-center group"
          >
            <img
              src={tech.image || "/placeholder.svg"}
              alt={tech.name}
              className="h-20 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            />
            <p className="absolute bottom-[-2rem] text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

