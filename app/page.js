import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProblemToProduct from "@/components/ProblemToProduct";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProblemToProduct />
        <Skills />
        <Credentials />
        <Footer />
      </main>
    </>
  );
}
