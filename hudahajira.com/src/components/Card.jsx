import { Link } from 'react-router-dom'
import './styles/Card.css'

const Card = ({item, index}) => {

    return (
        <Link className="card"
            to={`/projects/${item.code}`}
            style={{
                animationDelay: `${index * 0.03}s`
            }}>
            <div className="card-content">
                <div className="card-code">
                    {item.code}
                </div>
                <div className="card-id">
                    {item.id}
                </div>
            </div>
        </Link>
    )
}

export default Card