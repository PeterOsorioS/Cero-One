export function Projects() {
  return (
    <section className="lg:p-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Nuestros proyectos</h2>
        <p className="text-gray-400 mb-12">
          Desarrollamos soluciones innovadoras que transforman la manera en que
          nuestros clientes hacen negocios.
        </p>

        <div className="bg-[#151515] p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="./Computador.webp"
                alt="Waze plus project"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">waze plus</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nibh nisi, volutpat a mattis id, finibus vel felis.
                Pellentesque consequat sit amet turpis nec mattis. Cras in
                accumsan metus. Etiam sit amet arcu nec lectus consequat
                facilisis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Suspendisse potenti.
                Nunc tempus quis augue at fermentum. Nam consectetur vulputate
                purus ut pretium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
