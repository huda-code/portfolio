import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <h3>
                © Huda Hajira
            </h3>
            <small>
                Handcrafted by
                <a href="https://hudahajira.com" target="_blank" rel="noreferrer">
                    Huda Hajira
                </a>
            </small>
        </footer>
    )
}

export default Footer