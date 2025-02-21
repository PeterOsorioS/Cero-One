import { useState } from "react";

// Definimos el tipo para los proyectos
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Lista de proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "Waze Plus",
    description:
      "Aplicación de navegación colaborativa que optimiza rutas en tiempo real para mejorar la movilidad y reducir tiempos de traslado.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "E-Commerce Pro",
    description:
      "Plataforma de comercio electrónico escalable con integración de pagos y gestión de inventario automatizada.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Task Manager AI",
    description:
      "Aplicación de gestión de tareas con inteligencia artificial que predice la mejor forma de organizar tu día.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export function Projects() {
  // Usamos el tipo Project o null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Definimos el tipo de project en la función
  const handleSelect = (project: Project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Nuestros Proyectos
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Desarrollamos soluciones innovadoras que transforman la manera en que nuestros clientes hacen negocios.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A1A] p-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#2A2A2A]"
              onClick={() => handleSelect(project)}
            >
              <h3 className="text-2xl font-bold text-[#F1FAEE]">{project.title}</h3>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="mt-8 p-8 bg-[#1A1A1A] rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 text-white">
                <h3 className="text-3xl font-bold text-[#F1FAEE] mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.description}
                </p>
                <button
                  className="mt-6 px-6 py-3 bg-[#E63946] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}