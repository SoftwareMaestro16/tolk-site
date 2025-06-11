import { Code, Globe, Layers, Terminal } from "lucide-react";

export function Tools() {

    return (
        <section id="tools" className="py-16 sm:py-24 bg-gray-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tools & Ecosystem
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="https://github.com/ton-blockchain/convert-func-to-tolk" target="_blank">

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Terminal size={28} className="text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-white">CLI Converter</h3>
              <p className="text-md text-gray-400">Convert FunC contracts to Tolk with a single command</p>
             

            </div>
            </a>

            <a href="https://t.me/tolk_lang" target="_blank">

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-white">Telegram</h3>
              <p className="text-md text-gray-400">Сhannel to follow the Tolk latest development changes</p>
         

            </div>
            </a>


            <a href="https://marketplace.visualstudio.com/items?itemName=ton-core.tolk-vscode&utm_source=chatgpt.com" target="_blank">

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/10">
                
              
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code size={28} className="text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-white">IDE Support</h3>
              <p className="text-md text-gray-400">Tolk extension for VS Code offers syntax highlighting</p>
            </div>
            </a>

            <a href="https://www.npmjs.com/package/create-tolk-plus" target="_blank">

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-cyan-500/10">
             
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers size={28} className="text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-white">Tolk Plus</h3>
              <p className="text-md text-gray-400">Tolk Library for easy and rapid smart contract development.</p>
            </div>
               
            </a>
          </div>
        </div>
      </section>
    );
}