import "./style.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <nav className="header__nav nav">
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to="/">Пользователи</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/posts">Посты</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar