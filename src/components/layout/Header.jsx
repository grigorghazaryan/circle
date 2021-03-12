import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../../assets/img/Logo.svg';
import { HashLink } from 'react-router-hash-link';
import pictorial from "../../assets/img/pictorial.svg";
import fb from '../../assets/img/social/Facebook.svg';
import fbHover from '../../assets/img/social/hover/Facebook.svg';
import linkdin from '../../assets/img/social/linkdin.svg';
import linkdinHover from '../../assets/img/social/hover/linkdin.svg';
import Instagram from '../../assets/img/social/Instagram.svg';
import InstagramHover from '../../assets/img/social/hover/Instagram.svg';
import Behance from '../../assets/img/social/Behance.svg';
import BehanceHover from '../../assets/img/social/hover/Behance.svg';
import { withRouter } from 'react-router-dom';
 
function Header ( {history} ) {
    // add class to meu so on home page we have default menu and on other pages transparent menu
    const [ headerType, setHeaderType ] = useState( (window.location.pathname === "/" ) ? "default" : "absolute"  ); 

    useEffect( ()=>{
        history.listen((location, action) => { 
            if ( location.pathname === "/" )
                setHeaderType( "default" );
            else {
                setHeaderType( "absolute" )
            } 
        });
    }, []);

    function onClickShowMobileMenu() {
        let main_menu = document.getElementsByClassName('mobile--menu__left');
    
        for (let i=0; i<main_menu.length; i++) {
            main_menu.item(i).classList.add('mobile--menu__left__show');
            if(document.getElementsByClassName('hide--menu')){
                main_menu.item(i).classList.remove('hide--menu');
            }
        }
    
        let menu = document.getElementsByClassName('mobile--menu__left__show__main');
    
        
        for (let i=0; i<menu.length; i++) {
            menu.item(i).classList.add('show--menu');
        }
    
        let overlay = document.getElementsByClassName('mobile--menu__left__show__overlay');
    
        for (let i=0; i<overlay.length; i++) {
           overlay.item(i).classList.add('show--menu');
        }
    
        document.body.classList.add("overflow--hidden");
    }
    
    function onClickHideMobileMenu(){
        let main_menu = document.getElementsByClassName('mobile--menu__left');
    
        for (let i=0; i<main_menu.length; i++) {
            main_menu.item(i).classList.remove('mobile--menu__left__show');
        }
    
        
        let menu = document.getElementsByClassName('mobile--menu__left__show__main');
    
        for (let i=0; i<menu.length; i++) {
            menu.item(i).classList.remove('show--menu');
        }
    
        let overlay = document.getElementsByClassName('mobile--menu__left__show__overlay');
    
        for (let i=0; i<overlay.length; i++) {
            overlay.item(i).classList.remove('show--menu');
        }
        document.body.classList.remove("overflow--hidden");
    }
    onClickShowMobileMenu()
    onClickHideMobileMenu()

    return (
        <div  id="header">
            <header className= {`mobile--menu header-type-${headerType}`}  >
                <div className="container container--max">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div  className="mobile--menu__main">
                                <NavLink to="/"  exact>                                   
                                    <Image src={logo} className="mobile--menu__main__img"  alt="logo"/>
                                </NavLink>
                                <div className="mobile--menu__main__toggler"  onClick={onClickShowMobileMenu}><Image src={pictorial}/></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile--menu__left hide--menu">
                    <div className="mobile--menu__left__main  mobile--menu__left__show__main">
                        <div className="mobile--menu__left__main__menu">              
                            <ul className="mobile--menu__left__main__menu__navbar">
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/services" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" exact  onClick={onClickHideMobileMenu}>SERVICES</NavLink>
                                </li>
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/team" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" exact onClick={onClickHideMobileMenu}>TEAM</NavLink>
                                </li>
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/works" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" exact onClick={onClickHideMobileMenu}>WORKS</NavLink>
                                </li>    
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/blog" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" exact onClick={onClickHideMobileMenu}>BLOG</NavLink>
                                </li>   
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/shop" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" exact onClick={onClickHideMobileMenu}>SHOP</NavLink>
                                </li>   
                            </ul>
                            <div  className="mobile--menu__left__main__menu__social">
                                <p className="mobile--menu__left__main__menu__social__title"> 
                                    <HashLink to="/#contact" >CONTACT US
                                    </HashLink>
                                </p>
                                <ul className="mobile--menu__left__main__menu__social__icons">
                                    <li className="mobile--menu__left__main__menu__social__icons__item">
                                        <a rel="noreferrer" href="https://www.linkedin.com/company/circle-technical-design" target="_blank" className="mobile--menu__left__main__menu__social__icons__item__link">
                                            <Image src={linkdin} className="mobile--menu__left__main__menu__social__icons__item__link__icon--main"  alt="social icon"/>
                                            <Image src={linkdinHover} className="mobile--menu__left__main__menu__social__icons__item__link__icon--hover"  alt="social icon"/>
                                        </a>
                                    </li>
                                    <li className="mobile--menu__left__main__menu__social__icons__item">
                                        <a rel="noreferrer" href="https://www.facebook.com/circletechnicaldesign" target="_blank" className="mobile--menu__left__main__menu__social__icons__item__link">
                                            <Image src={fb} className="mobile--menu__left__main__menu__social__icons__item__link__icon--main"  alt="social icon"/>
                                            <Image src={fbHover} className="mobile--menu__left__main__menu__social__icons__item__link__icon--hover"  alt="social icon"/>
                                        </a>
                                    </li>
                                    <li className="mobile--menu__left__main__menu__social__icons__item">
                                        <a rel="noreferrer" href="https://www.instagram.com/circle_technical_design/" target="_blank" className="mobile--menu__left__main__menu__social__icons__item__link">
                                            <Image src={Instagram} className="mobile--menu__left__main__menu__social__icons__item__link__icon--main"  alt="social icon"/>
                                            <Image src={InstagramHover} className="mobile--menu__left__main__menu__social__icons__item__link__icon--hover"  alt="social icon"/>
                                        </a>
                                    </li>
                                    <li className="mobile--menu__left__main__menu__social__icons__item">
                                        <a rel="noreferrer" href="https://www.behance.net/circletechnical/" target="_blank" className="mobile--menu__left__main__menu__social__icons__item__link">
                                            <Image src={Behance} className="mobile--menu__left__main__menu__social__icons__item__link__icon--main"  alt="social icon"/>
                                            <Image src={BehanceHover} className="mobile--menu__left__main__menu__social__icons__item__link__icon--hover"  alt="social icon"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        
                        <div className="mobile--menu__left__main__hide"   onClick={onClickHideMobileMenu}><span  className="mobile--menu__left__main__hide__icon">&#10005;</span></div>
                    </div>

                    <div className="mobile--menu__left__overlay  mobile--menu__left__show__overlay" onClick={onClickHideMobileMenu}>

                    </div>
                </div>

            </header>
    </div>
    )
}

export default withRouter(Header); ;