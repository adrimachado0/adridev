import Main from "../../components/main/main"
import About from "../../components/about/about"
import Projects from "../../components/projects/projects"

export default function Home() {
  return (
    <main className="">
      <Main />
      <div className="w-1 h-14 bg-[#535353] bg-opacity-20 mx-auto my-16"></div>
      <div className="flex flex-col gap-32 mb-32">
        <About />
        <Projects />
      </div>
    </main>
  )
}
