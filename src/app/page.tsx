import About from "./components/about/About";
import BuildSteps from "./components/build-steps/BuildSteps";
import Hero from "./components/hero/Hero";
import OurServices from "./components/our-services/OurServices";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurServices />
      <BuildSteps />
    </main>
  )
}
