import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contacto */}
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <p className="text-sm mt-2">Email: ejemplo@tp2.com</p>
          <p className="text-sm">Tel: +54 9 11 0000-0000</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="#home" className="hover:underline">Inicio</a></li>
            <li><a href="#features" className="hover:underline">Características</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4 className="font-semibold">Redes</h4>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="text-sm underline">Facebook</a>
            <a href="#" className="text-sm underline">Twitter</a>
            <a href="#" className="text-sm underline">Instagram</a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} TP2 - Programación 4
          </p>
        </div>
      </div>
    </footer>
  );
}
