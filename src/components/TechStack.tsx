const technologies = [
  // Add your technology logos here
  // Example:
  { name: "React", src: "/placeholder.svg?height=40&width=40" },
  { name: "Node.js", src: "/placeholder.svg?height=40&width=40" },
  // ... more technologies
]

export function TechStack() {
  return (
    <section className="p-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={tech.src || "/placeholder.svg"}
                alt={tech.name}
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

