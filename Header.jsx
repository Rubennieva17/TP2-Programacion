import React from "react";
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            TP
          </div>
          <div>
            <h1 className="font-semibold">TP2 - Programación 4</h1>
            <p className="text-xs text-gray-500">Página React - Entrega</p>
          </div>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-indigo-600">Inicio</a>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#contact" className="hover:text-indigo-600">Contacto</a>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Buscar..."
            className="hidden sm:inline-block px-3 py-1 border rounded-md text-sm"
          />
          <button className="px-3 py-1 rounded-md border hover:bg-indigo-50">Iniciar</button>
          <button className="px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Registro
          </button>
        </div>
      </div>
    </header>
  );
}
