import { Code, Globe, Layers, Terminal } from "lucide-react";
import { tolkVersions } from "../../utils/versions";

export function Roadmap() {

    return (
        <section id="roadmap" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tolk Roadmap
          </h2>
       
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {tolkVersions.map((versionObj) => (
                <div
                    key={versionObj.version}
                    className="group bg-gray-900/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-left hover:shadow-lg hover:shadow-blue-500/10"
                >
                    <h2 className="font-bold text-2xl mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {versionObj.version}
                    </h2>
                    <a href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/changelog" target="_blank">
                    <ul className="scrollbar-none list-disc list-inside text-white text-sm font-medium space-y-1 max-h-40 overflow-y-auto pr-2">
                    {versionObj.changes.slice(0, 5).map((change, index) => (
                        <li key={index} className="marker:text-cyan-400 font-semibold">{change}</li>
                    ))}
                    </ul>
                    </a>

                </div>
            ))}

          </div>
        </div>
      </section>
    );
}