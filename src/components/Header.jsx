import { Link } from 'react-router-dom'

function Header({ headerTitle, userEmail, onSignOut, linkTo }) {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <p className="header__email">{userEmail}</p>
            <Link to={linkTo} className="header__title" onClick={onSignOut}>
                {headerTitle}
            </Link>
        </header>
    )
}

export default Header
