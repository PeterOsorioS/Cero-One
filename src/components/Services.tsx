import { Code, Monitor, Smartphone, Database, Server, Cloud } from "lucide-react"

const services = [
  {
    icon: <Code className="w-10 h-10" />,
    title: "Desarrollo web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    title: "Aplicación de Escritorio",
    description: "Desarrollamos aplicaciones para escritorio que optimizan sus procesos.",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Desarrollo Móvil",
    description: "Apps nativas y multiplataforma para iOS y Android.",
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "Desarrollo Backend",
    description: "APIs robustas y escalables para sus aplicaciones.",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Bases de datos",
    description: "Diseño e implementación de bases de datos eficientes.",
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Solutions",
    description: "Servicios en la nube para maximizar su eficiencia.",
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 ">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg hover:bg-[#222222] transition-colors">
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

