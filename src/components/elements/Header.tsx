import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-1">
                    <a href="/" className="flex flex-row items-center gap-1">
                    <img src="/assets/tolk.png" alt="Tolk Logo" className="w-8 h-8 md:w-9 md:h-9" />
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Tolk
                    </div>
                    </a>

                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Features</a>
                    <a href="#examples" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Examples</a>
                    <a href="#tools" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Tools</a>
                    <a href="#roadmap" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Roadmap</a>
                    <a href="https://docs.ton.org/v3/documentation/smart-contracts/getting-started/javascript" target="_blank" className="bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-2 rounded-xl font-bold transition-all duration-300">
                        Get Started
                    </a>
                </nav>

                <button 
                className="md:hidden text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden mt-4 pb-4 border-t border-gray-800/50 pt-4">
                <div className="flex flex-col space-y-4">
                    <a href="#features" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Features</a>
                    <a href="#examples" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Examples</a>
                    <a href="#tools" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Tools</a>
                    <a href="#roadmap" className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300">Roadmap</a>
                    <a href="https://docs.ton.org/v3/documentation/smart-contracts/getting-started/javascript" target="_blank" className="bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-2 rounded-xl font-bold transition-all text-center duration-300">
                        Get Started
                    </a>
                </div>
                </nav>
            )}
          </div>
      </header>
    );
}