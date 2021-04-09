import {React, useEffect, useState} from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import bannerVideo from '../../assets/video/main-banner.mp4';
import Technicaldesign from '../../assets/img/Home/Technicaldesign.svg';
import Technicaldrawings from '../../assets/img/Home/Technicaldrawings.svg';
import box from '../../assets/img/Home/box.png';
import pngFile from '../../assets/img/Home/icons/png-file.svg';
import gifFile from '../../assets/img/Home/icons/gif-file.svg';
import jpgFile from '../../assets/img/Home/icons/jpg-file.svg';
import pdfFile from '../../assets/img/Home/icons/pdf-file.svg';
import bannerBg from '../../assets/img/Home/contact-us-image.png';
import arrow from '../../assets/img/Home/icons/arrow.svg';
import { Link } from 'react-scroll'
import constants from "../../helpers/constants";
function Home (props) {

    const home_items_url = `${constants.urls.API}/getHomePageIcons`;
    const request_a_quote_url = `${constants.urls.API}/getRequestAQuoteImage`;
    const contact_url = `${constants.urls.API}/getContactImage`;
    const [ data, setData ] = useState(null);
    const [ request_data, setReqData ] = useState(null);
    const [ contact_data, setContactData ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(()=>{
        Promise.all([
            fetch(home_items_url, {
                method: `GET`
            }),
            fetch(request_a_quote_url, {
                method: `GET`
            }),
            fetch(contact_url, {
                method: `GET`
            }),

        ]).then( res =>{
            return Promise.all(
                res.map( response => {
                    return response.json()
                })
            )
        }) .then( result =>{
            let newState = {};
            let newReqState = {};
            let newContactState = {};
            let newIsloadedState = {};
            result.forEach( ( el,i ) => {
                if( el.success ) {
                    switch (i) {
                        case 0:
                            newState = el.home_page;
                            break;
                        case 1:
                            newReqState = el.request_image;
                            break;
                        case 2:
                            newContactState = el.contact_image;
                            break;

                    }
                }
            })
            setData( newState );
            setReqData( newReqState );
            setContactData( newContactState );
            setIsLoaded(newIsloadedState);
        })
            .catch( err => {
                console.log(err);

                /* scroll animation end */
            })
    },[props.match.params.id]);
    console.log('test--',request_data && request_data[0].id);
    if (!isLoaded) {
        return <div className="loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
    <div className="home">
         
        <div className="home__banner" id="home__banner">

                    <video autoPlay muted loop>

                        <source src={constants.urls.UPLOAD + data?.type1.path} type="video/mp4"/>

                    </video>

            })}

        </div> 
        <div className="home__design" id="home__design">
            <div className="conntainer-fluid ">
                <div className="row m-0">
                    <div className="col-lg-6 col-12 p-0 order-12 order-lg-1">
                        <div className="home__design__video">
                            <video autoPlay muted loop>
                                <source src={constants.urls.UPLOAD + data?.type2.path} type="video/mp4"/>

                            </video>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0 order-1 order-lg-12">
                        <div className="home__design__info">
                            <Image src={Technicaldesign}  className="home__design__info__icon"  alt="TECHNICAL DESIGN icon"/>

                            <h1 className="home__design__info__title">TECHNICAL<span>DESIGN</span></h1>
                            <p className="home__design__info__text">{data?.type2.description}</p>
                            <NavLink to={data?.type2.link} className="home__design__info__link">{`read 
                            more`}</NavLink>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div className="home__drawings" id="home__drawings">
            <div className="conntainer-fluid ">
                <div className="row m-0">
                    <div className="col-lg-6 col-12 p-0 home__drawings__left">
                        <div className="home__drawings__left__info">
                            <Image src={Technicaldrawings}  className="home__drawings__left__info__icon"  alt="TECHNICAL DRAWINGS icon"/>

                            <h1 className="home__drawings__left__info__title">TECHNICAL<span>DRAWINGS</span></h1>
                            <p className="home__drawings__left__info__text">{data?.type3.description}</p>
                            <NavLink to={data?.type2.link} className="home__drawings__left__info__link">{`read 
                            more`}</NavLink>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 p-0">
                        <div className="home__drawings__video">
                            <video autoPlay muted loop>
                                <source src={constants.urls.UPLOAD + data?.type3.path} type="video/mp4"/>

                            </video>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div className="home__branding" id="home__branding">
            <div className="conntainer-fluid ">
                <div className="row m-0">
                    <div className="col-12 p-0 ">
                        <div className="home__branding__top">
                            <div  className="home__branding__top__video">
                                <video autoPlay muted loop>
                                    <source src={constants.urls.UPLOAD + data?.type4.path} type="video/mp4"/>

                                </video>
                            </div>
                            <div  className="home__branding__top__info">
                                <h2 className="home__branding__top__info__title">BRANDING</h2>
                                <NavLink to={data?.type4.path}  className="home__branding__top__info__link">{`read 
                                more`}</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div id="home__branding--bottom">
            <div className="home__branding--bottom">
                <Image src={request_data && constants.urls.UPLOAD + request_data[0].path}   className="home__branding--bottom__image"  alt="image"/>
            </div>

            <div className="home__request">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home__request__container">
                                <h2 className="home__request__container__title">REQUEST A QUOTE</h2>
                                <div className="home__request__container__form">
                                    <form >
                                        <div  className="home__request__container__form__main">
                                            <div className="home__request__container__form__main__left">
                                                <input id="email" type="email"  placeholder="email@email.com*" className="home__request__container__form__main__left__email"/>

                                                <div  className="home__request__container__form__main__left__row">
                                                    <div className="home__request__container__form__main__left__row__quote">
                                                        <textarea name="" id="" cols="30" rows="8" placeholder="Write your quote here *"  className="home__request__container__form__main__left__row__quote__textarea"></textarea>
                                                    </div>
                                                    <div className="home__request__container__form__main__left__row__files">
                                                        <ul  className="home__request__container__form__main__left__row__files__list">
                                                            <li className="home__request__container__form__main__left__row__files__list__item">
                                                                <p className="home__request__container__form__main__left__row__files__list__item__info"><Image className="home__request__container__form__main__left__row__files__list__item__info__image" src={pngFile} alt="pdf"/><span>attached file name</span></p>
                                                            </li>
                                                            <li className="home__request__container__form__main__left__row__files__list__item">
                                                                <p className="home__request__container__form__main__left__row__files__list__item__info"><Image className="home__request__container__form__main__left__row__files__list__item__info__image" src={gifFile} alt="gif"/><span>attached file name</span></p>
                                                            </li>
                                                            <li className="home__request__container__form__main__left__row__files__list__item">
                                                                <p className="home__request__container__form__main__left__row__files__list__item__info"><Image className="home__request__container__form__main__left__row__files__list__item__info__image" src={jpgFile} alt="jpg"/><span>attached file name</span></p>
                                                            </li>
                                                            <li className="home__request__container__form__main__left__row__files__list__item">
                                                                <p className="home__request__container__form__main__left__row__files__list__item__info"><Image className="home__request__container__form__main__left__row__files__list__item__info__image" src={pdfFile} alt="pdf"/><span>attached file name</span></p>                                                          
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="home__request__container__form__main__right">
                                                <div className="home__request__container__form__main__right__file">
                                                    <label className="home__request__container__form__main__right__file__label" htmlFor="attach">attach 
                                                    a file</label>
                                                    <input className="home__request__container__form__main__right__file__input" type="file" id="attach" name="attach" accept=".jpg, .jpeg, .png, .gif, .pdf"/>
                                                </div>
                                                
                                                <input className="home__request__container__form__main__right__submit" type="submit" value="send"/>
                                            </div>
                                            
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="home__contact" id="contact">
            <div className="home__contact__title"  style={{ backgroundImage: `url(${contact_data && constants.urls.UPLOAD + contact_data[0].path})` }}>
                <h2 className="home__contact__title__text">CONTACT US</h2>
            </div>

            
            <div className="conntainer-fluid ">
                <div className="row m-0">
                    <div className="col-lg-6 col-12 p-0 order-12 order-lg-1">
                        <div className="home__contact__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.6320625052497!2d44.493313929216555!3d40.21955559871178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEzJzEwLjQiTiA0NMKwMjknMzcuOSJF!5e0!3m2!1sen!2s!4v1614338625900!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" title="Map"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0 order-1 order-lg-12">
                        <div className="home__contact__form">
                            <form >
                                <div  className="home__contact__form__main">
                                        <input id="name" type="text"  placeholder="email@email.com*" className="home__contact__form__main__email"/>

                                        <div  className="home__contact__form__main__row">
                                            <div className="home__contact__form__main__row__textarea">
                                                <label className="home__contact__form__main__row__textarea__label" htmlFor="message">Message</label>
                                                <textarea name="message" id="message" cols="30" rows="8" placeholder="Write your message here"  className="home__contact__form__main__row__textarea__main"></textarea>
                                            </div>
                                        </div>                                          
                                        <input className="home__contact__form__main__submit" type="submit" value="send"/>
                                        
                                </div>
                                    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home__menu">
            <ul className="home__menu__content">
                <li className="home__menu__content__item active">
                    <Link activeClass="active" to="home__banner" spy={true} smooth='easeInQuart' duration={500} className="home__menu__content__item__link">

                    </Link>
                </li>
                <li className="home__menu__content__item" >
                    <Link activeClass="active" to="home__design" spy={true} smooth='easeInQuart' duration={500} className="home__menu__content__item__link">

                    </Link>
                </li>
                <li className="home__menu__content__item" >
                    <Link activeClass="active" to="home__drawings" spy={true} smooth='easeInQuart' duration={500} className="home__menu__content__item__link">

                    </Link>
                </li>
                <li className="home__menu__content__item">
                    <Link activeClass="active" to="home__branding" spy={true} smooth='easeInQuart' duration={500} className="home__menu__content__item__link">

                    </Link>
                </li>
                <li className="home__menu__content__item">
                    <Link activeClass="active" to="home__branding--bottom" spy={true} smooth='easeInQuart' duration={500} className="home__menu__content__item__link">

                    </Link>
                </li>
                <li className="home__menu__content__item">
                    <Link activeClass="active" to="contact" spy={true} smooth='easeInQuart' duration={500} className="home__menu__content__item__link">

                    </Link>
                </li>
            </ul>
        </div>
    </div>
    )
    
}

export default Home ;