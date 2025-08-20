import { CheckCircle2 } from 'lucide-react';

export function Example() {
    return (
        <section id="examples" className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl leading-14 font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Write Smart Contracts Like TypeScript
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Tolk brings the familiar TypeScript syntax to TON blockchain development. Write clean,
                            type-safe smart contracts with automatic serialization and powerful generic support.
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
                                <span className="text-blue-400">struct</span>{' '}
                                <span className="text-cyan-400">Storage</span> {'{'}
                                {'\n  '} <span className="text-cyan-300">counter</span>:{' '}
                                <span className="text-blue-300">int32</span>;{'\n'}
                                {'}'}
                                {'\n'}
                                {'\n'}
                                <span className="text-blue-400">fun</span>{' '}
                                <span className="text-sky-400">Storage.load</span>() {'{'}
                                {'\n  '} <span className="text-blue-400">return</span>{' '}
                                <span className="text-blue-400">Storage.fromCell</span>(
                                <span className="text-blue-400">contract.getData()</span>);
                                {'\n'}
                                {'}'}
                                {'\n'}
                                {'\n'}
                                <span className="text-blue-400">fun</span>{' '}
                                <span className="text-sky-400">onInternalMessage</span>(
                                <span className="text-cyan-300">in</span>:{' '}
                                <span className="text-blue-300">InMessage</span>) {'{'}
                                {'\n  '} {'// ...'}
                                {'\n'}
                                {'}'}
                                {'\n'}
                                {'\n'}
                                <span className="text-blue-400">get fun</span>{' '}
                                <span className="text-sky-400">currentCounter</span>() :{' '}
                                <span className="text-blue-300">int</span> {'{'}
                                {'\n  '} <span className="text-blue-400">val</span>{' '}
                                <span className="text-cyan-300">storage</span> ={' '}
                                <span className="text-blue-400">lazy</span>{' '}
                                <span className="text-blue-400">Storage.load()</span>;{'\n'}{' '}
                                {'  '}<span className="text-blue-400">return</span>{' '}
                                <span className="text-cyan-300">storage.counter</span>;{'\n'}
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
