import starRed from '../assets/images/star_red.png'
import starEmpty from '../assets/images/star_empty.png'

const Stars = ({ rating }) => (
    <div className="stars">
        {[...Array(5)].map((item, index) => (
            <img
                className="star"
                key={`star-${index}`}
                src={index <= rating - 1 ? starRed : starEmpty}
                alt={`étoile n°${index + 1}`}
            />
        ))}
    </div>
)

export default Stars