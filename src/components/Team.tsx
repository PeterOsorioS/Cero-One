const team = [
  { name: "Peter Osorio", role: "Desarrollador", image: "/Peter.png" },
  { name: "Octavio Reyna", role: "CEO & Desarrollador", image: "/Octavio.png" },
  { name: "Gabriel Cervantes", role: "Desarrollador", image: "/Gabriel.png" },
  { name: "Noel Moreno", role: "Desarrollador", image: "/Noel.png" },
  { name: "Rodolfo Romero", role: "Aprendiz Desarrollador", image: "/Rodolfo.jpg" },

];
export function Team() {
  return (
    <section className="lg:p-20 pt-20" id="Nosotros">
      <div className="container mx-auto px-4 m-5">
        <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
        <p className="text-gray-400 mb-12">
          En Cero One, contamos con un equipo de líderes, comprometidos y
          dispuestos a dar lo mejor de sí en cada proyecto.
        </p>

        <div className="relative lg:w-5xl mx-auto overflow-hidden">
          <div className="slide-track">
            {[...team, ...team].map((member, index) => (
              <div
                key={index}
                className="shrink-0 w-50 text-center p-5 m-5 bg-[#1A1A1A] rounded-lg"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
