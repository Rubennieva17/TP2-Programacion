import React from "react";

export default function Main() {
  const cards = [
    { id: 1, title: "Card Uno", desc: "Descripción breve del card uno." },
    { id: 2, title: "Card Dos", desc: "Descripción breve del card dos." },
    { id: 3, title: "Card Tres", desc: "Descripción breve del card tres." },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section id="home" className="bg-gradient-to-r from-indigo-100 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold">Bienvenido a TP2</h2>
            <p className="mt-4 text-gray-700">
              Esta es una página de ejemplo creada para la materia Programación 4.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#features" className="px-4 py-2 rounded-md bg-indigo-600 text-white">
                Ver features
              </a>
              <a href="#contact" className="px-4 py-2 rounded-md border">Contacto</a>
            </div>
          </div>

          {/* Cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
                <button className="mt-4 text-sm px-3 py-1 rounded border">Leer más</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-indigo-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Características</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5 className="font-semibold">Responsive</h5>
              <p className="text-sm text-gray-600 mt-2">Se adapta a móviles y escritorio.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <h5 className="font-semibold">Fácil de usar</h5>
              <p className="text-sm text-gray-600 mt-2">Componentes claros y accesibles.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <h5 className="font-semibold">Listo para entregar</h5>
              <p className="text-sm text-gray-600 mt-2">Código limpio y comentado.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
