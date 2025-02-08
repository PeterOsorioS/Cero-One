import { Button } from "./ui/Button"

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="./Contactanos.svg"
              alt="Contact representative"
              className="w-full max-w-lg mx-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                ></textarea>
              </div>
              <Button variant="semi-rounded" color="white" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

