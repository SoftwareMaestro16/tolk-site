import { ArrowRight, FileText, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-106 h-106 bg-blue-500/10 md:bg-blue-500/15 rounded-full blur-3xl md:top-[20%] md:left-[20%] xl:left-[23%] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-106 h-106 bg-cyan-500/10 md:bg-cyan-500/15 rounded-full blur-3xl md:bottom-[20%] md:right-[20%] xl:right-[23%] animate-float-slow"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
        <h1 className="whitespace-nowrap text-5xl sm:text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent leading-normal">
          Tolk Language
        </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            The Next Generation of Smart Contract Development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-blue-500 to-sky-500 hover:bg-blue-700 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3">
            <a
              href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-3 text-black"
            >
              <FileText size={26} className="text-black" />
              Documentation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform text-black"
              />
            </a>
          </button>
          <button className="group border-2 bg-white border-gray-800 hover:border-sky-500 px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-cyan-400/20 flex items-center gap-3 text-black">
            <a
              href="https://github.com/ton-blockchain/ton/tree/master/tolk"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-3 text-black"
            >
              <Github size={27} className="text-black" />
              GitHub
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}