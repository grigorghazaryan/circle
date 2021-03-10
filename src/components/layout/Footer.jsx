import React from 'react';
import { Image } from 'react-bootstrap';
import fb from '../../assets/img/Footer/social/Facebook.svg';
import linkdin from '../../assets/img/Footer/social/linkdin.svg';
import Instagram from '../../assets/img/Footer/social/Instagram.svg';
import Behance from '../../assets/img/Footer/social/Behance.svg';


function Footer (props) {
    return (
        <div>
            <footer className="footer">
                <ul className="footer__list">
                    <li className="footer__list__item">
                        <a  className="footer__list__item__link" rel="noreferrer"  href="https://www.linkedin.com/company/circle-technical-design" target="_blank" >
                            <Image src={linkdin}  className="footer__list__item__link__image"  alt="social icon"/>
                                                
                        </a>
                    </li>
                    <li  className="footer__list__item">
                        <a className="footer__list__item__link" rel="noreferrer"  href="https://www.facebook.com/circletechnicaldesign" target="_blank" >
                            <Image src={fb}  className="footer__list__item__link__image"  alt="social icon"/>
                        </a>
                    </li>
                    <li  className="footer__list__item">
                        <a className="footer__list__item__link" rel="noreferrer"  href="https://www.instagram.com/circle_technical_design/" target="_blank" >
                            <Image src={Instagram}  className="footer__list__item__link__image"  alt="social icon"/>
                        </a>
                    </li>
                    <li className="footer__list__item">
                        <a className="footer__list__item__link" rel="noreferrer"  href="https://www.behance.net/circletechnical/" target="_blank">
                            <Image src={Behance}  className="footer__list__item__link__image"  alt="social icon"/>
                        </a>
                    </li>
                </ul>
                <p className="footer__copyright"> <span>Circle technical design</span> all rights reserved ©</p>
            </footer>
        </div>
    )
}

export default Footer ;