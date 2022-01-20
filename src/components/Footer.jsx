import React from 'react';
import fstyles from '../styles/Footer.module.css'
import logo from '../images/Frame 1.svg'
const Footer = () => {
    const date=new Date();
    const current_yr=date.getFullYear();
    const next_yr=date.getFullYear()+1;
    return (
        <>
            <div className={fstyles.footer}>
                <div className={fstyles.footerContent}>
                    <img className={fstyles.logo} src={logo} alt="logo" />
                    <div className={fstyles.right}>
                        <a href="/">Privacy</a>
                        <a href="/">Terms of services</a>
                    </div>
                </div>
                <div className={fstyles.copyright}>copyright © {current_yr}-{next_yr} All rights reserved</div>
            </div>

        </>)
}
export default Footer;