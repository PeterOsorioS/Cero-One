const team = [
  {
    name: "Gibson Steve Jobs",
    role: "CEO Zero One Solutions",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mary Joseph Silva",
    role: "Jefa de UX UI",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Peter Duarte",
    role: "Jefe desarrollador de software",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function Team() {
  return (
    <section className="p-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
        <p className="text-gray-400 mb-12">
          En Zero One, contamos con un equipo de líderes, comprometidos y dispuestos a dar lo mejor de sí en cada
          proyecto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg text-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

