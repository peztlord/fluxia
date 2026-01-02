"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0A0E29] border-b border-[#8A2BE2]/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-whitee">Fluxia</div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#solutions" className="text-white hover:text-[#00FFFF] transition-colors">Soluções</Link>
            <Link href="#how-it-works" className="text-white hover:text-[#00FFFF] transition-colors">Como funciona</Link>
          </nav>
          
          <button className="hidden md:block bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#FF00FF]/25 transition-all neon-glow">
            Fale com um especialista
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#solutions" className="text-white hover:text-[#00FFFF] transition-colors" onClick={() => setIsOpen(false)}>Soluções</Link>
              <Link href="#how-it-works" className="text-white hover:text-[#00FFFF] transition-colors" onClick={() => setIsOpen(false)}>Como funciona</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}