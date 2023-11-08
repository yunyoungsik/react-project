import React, { useState } from 'react'
import { headerNav } from "../constants/index"

const Header = () => {
    const [show, setShow] = useState(false);
    const toogleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">portfolio <em>react</em></a>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    role="button"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}

                    onClick={toogleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header