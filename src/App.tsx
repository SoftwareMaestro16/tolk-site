import { Layout } from "./components/Layout"
import { Example } from "./components/sections/Example";
import { Features } from "./components/sections/Features";
import { Hero } from "./components/sections/Hero"
import { Roadmap } from "./components/sections/Roadmap";
import { Tools } from "./components/sections/Tools";

function App() {
  
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <Example />
        <Tools />
        <Roadmap />
      </Layout>    
    </>
  )
}

export default App;
