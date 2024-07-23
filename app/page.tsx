
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Sign from "@/components/sign";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Intro />
      <About />
      <div className="bg-gradient-to-b from-gray-100  to-[#f7ebeb] w-full">
        <Projects />
        <Skills />
        <Experience />
      </div>
      <div className="bg-slate-50 w-full">
        <Contact />
        <div className="mt-[180px] mb-[10px]"><Sign /></div>
      </div>
      
    </main>
  );
}