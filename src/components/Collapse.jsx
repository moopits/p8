import { useState } from "react"
import arrowUp from '../assets/images/arrow_up.png'
import arrowDown from '../assets/images/arrow_down.png'


const Collapse = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)


    const description = data => (
        <p>
            {data}
        </p>
    )

    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <span>{item.title}</span>
                <img
                    src={isOpen ? arrowDown : arrowUp}
                    alt="arrow"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {isOpen ? description(item.text) : ''}
        </div>
    )
}

export default Collapse