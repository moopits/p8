/*const NotFound = () => {
    return (
        <section>
            <span>404</span>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <span>Retourner sur la page d’accueil</span>
                
                
        </section>
    )
}

export default NotFound*/

import { Link } from 'react-router-dom';

const NotFound = (
) => {
    return (
        <section className="format">
            <span className='not-found-404'>404</span>
            <span className='not-found-message'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/">
                <span className='not-found-link'>Retourner sur la page d’accueil</span>
            </Link>
        </section>
    )
}

export default NotFound;

