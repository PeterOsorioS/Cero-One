const Plans = [
  {
    name: "Core",
    description: "Hola mundo",
    degradado: "from-[#f12711]   to-[#f5af19]",
    price: 10,
  },
  {
    name: "Core +",
    description: "Hola mundo 2",
    degradado: "from-red-600   to-fuchsia-800",
    price: 30,
  },
  {
    name: "Pro",
    description: "Hola mundo 3",
    degradado: "from-red-600  from-30% via-fuchsia-800 via-30%  to-[#1565c0]",
    price: 30,
  },
  {
    name: "Elite",
    description: "Hola mundo 4",
    degradado: "from-lime-800 to-[#1565c0]",
    price: 30,
  },
];

export function ServicePlans() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">Nuestros planes</h2>
        <div className="grid grid-cols-4 gap-5">
          {Plans.map((plan, index) => (
            <div
              className="bg-[#1a1a1a] border-0 rounded-lg hover:scale-110 transition-transform duration-500"
              key={index}
            >
              <div className="m-5 ">
                <p className={`text-3xl font-bold text-transparent mb-10  bg-clip-text bg-linear-to-r ${plan.degradado}` }>{plan.name}</p>
                <p>{plan.description}</p>
                <p>{plan.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
