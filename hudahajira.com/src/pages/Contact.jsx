import { useEffect } from "react"
import { user } from "../data"

const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
      document.title = `Arvin Garay | Contact | Portfolio | Architect | Project Manager | Designer | Building Science`
  }, [])

  return (
    <section>
      <span className="title">
          contact <div className="blink cube"></div>
      </span>
      <div className="flex flex-column mt-50 gap-40">
        <a href={`mailto:${user.email}`} className="link" 
          target="_blank" rel="noreferrer">
          {user.email}
        </a>
        <a href={user.linkedin} className="link" 
          target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={user.instagram} className="link" 
          target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </section>
  )
}

export default Contact