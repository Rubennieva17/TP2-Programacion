import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
