import { useNavigate } from 'react-router-dom'
import './styles/GoBack.css'

const GoBack = () => {
    const navigate = useNavigate();

    return (
        <div className="go-back">
            <div className="back-btn" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill='#fff'><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                <span>All Projects</span>
            </div>
        </div>
    )
}

export default GoBack