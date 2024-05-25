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
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
                <p>Retourner sur la page d’accueil</p>
            </Link>
        </section>
    )
}

export default NotFound;

