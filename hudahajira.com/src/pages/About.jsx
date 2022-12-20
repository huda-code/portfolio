import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Img from '../components/Img'
// import img from '/src/assets/photo.jpg'
import { user } from '../data'

const About = () => {
    const [showLetter, setShowLetter] = useState(1)
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Huda Hajira | About Me | Entreprenuer | Social Media Manager | Full Stack Web Developer | Building Tech`

        const interval = setInterval(() => {
            setShowLetter((prev) => prev + 1)
        }, 1)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="about">
            <div className="flex gap-40 wrap-950">
                {location.pathname === '/about' && (
                <div className="about-img">
                    <div>
                        <Img img={`/assets/photo.jpg`} alt="Photo" />
                    </div>
                </div>
                )}
                <div>
                    <span className="title">
                        {user.name.toUpperCase()}<span className="blink bold">{'  '}/</span>
                    </span>
                    <h4 className="title-secondary mt-50">
                        {user.occupation.split(' | ').map((item, index) => (
                            <span key={`${index}-occupation`}>
                                {'-'} {item}
                                <br />
                            </span>
                        ))}
                    </h4>
                </div>
            </div>
            <div className="mt-50">
                <p className="about">
                    {user.about.slice(0, showLetter)}
                    <span className="blink">|</span>
                    <span className="opacity-none">{user.about.slice(showLetter)}</span>
                </p>
            </div>
        </section>
    )
}

export default About