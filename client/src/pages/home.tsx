import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Courses } from "@/components/courses";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-quantum-dark via-quantum-gray to-quantum-dark text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
