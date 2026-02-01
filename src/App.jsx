import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Events from "./components/Events";
import About from "./components/About";
import Team from "./components/Team";


export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <AnimatePresence mode="wait">
        
           <main
            key="main"
            className="min-h-screen text-white bg-linear-to-br from-[#0b061f] via-[#120726] to-black"
          >
            
            {/* <Home /> */}
            {/* <Projects /> */}
            <Events />
            <About />
            <Team />
            {/* <Contact /> */}
            {/* <Footer /> */}
          </main>
      </AnimatePresence>
    </div>
  );
}
