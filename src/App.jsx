import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Trusted from "./components/sections/Trusted";
import Features from "./components/sections/Features";
import Workflow from "./components/sections/Workflow";
import Dashboard from "./components/sections/Dashboard";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";

function App() {
  return (
    <div className="app-bg">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Trusted />
        <Features />
        <Workflow />
        <Dashboard />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;