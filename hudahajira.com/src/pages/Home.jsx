import { useEffect } from "react"
import { Projects, Contact, About } from './'
import { user } from "../data"

const Home = () => {

  useEffect(() => {
    document.title = 'Huda Hajira | Architect | Project Manager | Designer | Building Science'
  }, [])

  return (
    <section>
      <About />
      <div className="mt-50 pt-50 border-top">
        <Projects />
      </div>
      <div className="mt-50 pt-50 border-top">
        <Contact />
      </div>
    </section>
  )
}

export default Home