import React, { useRef, useEffect } from 'react'
import logo from '../images/Frame 1.svg';
import bar from '../images/menu.png';
import hstyles from '../styles/Header.module.css';
function Header() {
    const nav_bar = useRef();
    const nav = useRef();
    const clicked = () => {
        if (nav.current.style.width != '0%') {
            nav.current.style.width = "0%";
        }
        else {
            nav.current.style.width = "100%";
        }
    }
    useEffect(() => {
        clicked();
        if (window.innerWidth >= 700) {
            nav.current.style.width = "300px";
        } else {
            nav.current.style.width = "0%";
        }
        window.onresize = () => {
            if (window.innerWidth >= 700) {
                nav.current.style.width = "300px";
            } else {
                nav.current.style.width = "0%";
            }
        }

    }, [])//fix for navbar issue
    return (
        <>
            <div className={hstyles.header}>
                <div className={hstyles.left}>
                    <span className={hstyles.bars} ref={nav_bar} onClick={clicked}><img src={bar} alt='bars' /></span>
                    <img className={hstyles.logo} src={logo} alt="logo" />
                </div>
                <ul ref={nav} className={hstyles.right}>
                    <li>Home</li>
                    <hr />
                    <li>Recent</li>
                    <hr />
                    <li>Fonts</li>
                    <hr />
                    <li>Icon</li>
                    <hr />
                </ul>

            </div>
        </>

    )
}

export default Header
