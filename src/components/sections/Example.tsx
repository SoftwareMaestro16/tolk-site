import { CheckCircle2 } from "lucide-react";

export function Example() {

    return (
        <section id="examples" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Write Smart Contracts Like TypeScript
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Tolk brings the familiar TypeScript syntax to TON blockchain development. Write clean, type-safe smart contracts with automatic serialization and powerful generic support.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  Type Safety
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  Auto Serialization
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  Generic Support
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 bg-black/50 border-b border-gray-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm font-bold text-gray-400">contract.tolk</span>
              </div>
              <div className="p-8 font-mono text-base overflow-x-auto">
              <pre className="text-gray-300">
  <span className="text-blue-400">struct</span> <span className="text-cyan-400">WalletBalances</span> {'{'}
  {'\n'}  <span className="text-cyan-300">wallet1</span>: <span className="text-blue-300">coins</span>;
  {'\n'}  <span className="text-cyan-300">wallet2</span>: <span className="text-blue-300">coins</span>;
  {'\n'}{'}'}
  {'\n'}
  {'\n'}<span className="text-blue-400">fun</span> <span className="text-sky-400">onInternalMessage</span>(<span className="text-cyan-300">myBalance</span>: <span className="text-blue-300">int</span>, <span className="text-cyan-300">msgValue</span>: <span className="text-blue-300">int </span>, <span className="text-cyan-300">inMsgFull</span>: <span className="text-blue-300">cell</span>, <span className="text-cyan-300">inMsgBody</span>: <span className="text-blue-300">slice</span>) {'{  '}
  {'\n'}    <span className="text-blue-400">var</span> <span className="text-cyan-300">senderAddress</span>: <span className="text-sky-400">slice</span> = <span className="text-blue-400">cs</span>.<span className="text-cyan-300">loadAddress<span className="text-sky-400">()</span></span>;
  {'\n'}    <span className="text-blue-400">var</span> <span className="text-cyan-300">op</span>: <span className="text-sky-400">int</span> = <span className="text-blue-400">inMsgBody</span>.<span className="text-cyan-300">loadUint<span className="text-sky-400">(</span>32<span className="text-sky-400">)</span></span>;
  {'\n'}    
  {'\n'}    <span className="text-blue-400">if</span> (<span className="text-cyan-300">op</span> == <span className="text-sky-300">0x1337</span>) {'{'}
  {'\n'}        <span className="text-blue-400">return</span>;
  {'\n'}    {'}'} 
  {'\n'}
  {'\n'}    <span className="text-blue-400">throw</span>(<span className="text-sky-300">0xfffff</span>);
  {'\n'}{'}'}
</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}