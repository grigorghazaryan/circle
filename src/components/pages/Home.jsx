import {React, useEffect, useState} from 'react';
import { GoogleReCaptchaProvider,GoogleReCaptcha } from 'react-google-recaptcha-v3';
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
import { Link } from 'react-scroll';
import constants from "../../helpers/constants";

function Home (props) {

    const home_items_url = `${constants.urls.API}/getHomePageIcons`;
    const request_a_quote_url = `${constants.urls.API}/getRequestAQuoteImage`;
    const contact_url = `${constants.urls.API}/getContactImage`;
    const contact_email = `${constants.urls.API}/AddContact`;
    const request_email = `${constants.urls.API}/AddRequestAQuote`;

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
                //console.log(err);

                /* scroll animation end */
            })

    },[props.match.params.id]);
    var allFiles = [];
    const onChangeHandler=event=>{
        //get files name
        const photos = document.querySelector('input[type="file"][multiple]');
        var  ul = document.querySelector(".home__request__container__form__main__left__row__files__list");
        var  acceptFiles = document.querySelector("#accept_files");
        var validFiles = false;
        for(let i = 0; i<photos.files.length; i++) {
            var ext = photos.files[i].name.split('.').pop();
            //|| ext != "gif" || ext != "png" || ext != "jpg"
            if( ext == "pdf" || ext == "gif" || ext == "png" || ext == "jpg" || ext == "jpeg"){
                validFiles = true;
            }
        }

        // if(ext=="pdf" || ext=="docx" || ext=="doc"){
        if(validFiles){
            acceptFiles.innerHTML = "";
        } else{
            acceptFiles.innerHTML = "Choose PDF Gif Jpg Jpeg Png format!";
            return false;
        }
        for (let i = 0; i < photos.files.length; i++) {
            allFiles.push(photos.files[i]);
        }
        for (let i = 0; i < photos.files.length; i++) {
            //console.log(photos.files[i].name);
            var li = document.createElement("li");
            var p = document.createElement("p");
            var image = document.createElement("IMG");
            var span = document.createElement("SPAN");
            li.setAttribute("class", "team__work__container__form__main__left__row__files__list__item");
            p.setAttribute("class", "home__request__container__form__main__left__row__files__list__item__info");
            image.setAttribute("class", "home__request__container__form__main__left__row__files__list__item__info__image");
            var ext = photos.files[i].name.split('.').pop();
            if(ext == "pdf"){
            image.setAttribute("src", pdfFile);
            }
            if(ext == "png"){
            image.setAttribute("src", pngFile);
            }
            if(ext == "gif"){
            image.setAttribute("src", gifFile);
            }
            if(ext == "jpg" || ext == "jpeg"){
            image.setAttribute("src", jpgFile);
            }
            ul.appendChild(li);
            li.appendChild(p);
            p.append(image);
            p.append(span);
            if(photos.files[i].name.length < 13){
                span.innerHTML = photos.files[i].name.substring(0,13);
            }
            else{span.innerHTML = photos.files[i].name.substring(0,13)+'...';}
        }

    }
    const contactSubmit= ( e ) => {
        e.preventDefault();
        const formData = new FormData();
        const email = document.querySelector('#contact_email').value;
        const message = document.querySelector('#contact_message').value;
        //validation
        var emailAlertText = document.querySelector('#email_alert_contact');
        var messageAlertText = document.querySelector('#message_alert_contact');
        var sentForm = document.querySelector('#sent_form_contact');

        if(email != ''){
            if( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                emailAlertText.innerHTML = "";
                //return true;
            } else {
                emailAlertText.innerHTML = "You have entered an invalid email address!";
                //return false;
            }

        }else{
            emailAlertText.innerHTML = "This field is required";
            //  return false;
        }

        // if(message != ''){
        //     messageAlertText.innerHTML = "";
        // } else {
        //     messageAlertText.innerHTML = "This field is required";
        //     return false;
        // }
        formData.append('email', email);
        formData.append('message', message);

        fetch(contact_email, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                sentForm.innerHTML = "Your message has been successfully sent.";
                sentForm.style.color = "green";
                setTimeout(function(){
                    sentForm.style.display='none';
                }, 3000);
                document.querySelector('input[type="file"][multiple]').value = '';
                document.querySelector('#contact_email').value = '';
                document.querySelector('#contact_message').value = '';
                emailAlertText.innerHTML = "";
                messageAlertText.innerHTML = "";
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const quoteSubmit= ( e ) => {
        e.preventDefault();
//  "proxy": "http://circle.local", pachage.json
        const formData = new FormData();
        const photos = document.querySelector('input[type="file"][multiple]');
        const email = document.querySelector('#quote_email').value;
        const message = document.querySelector('#quote_message').value;
        //validation
        var emailAlertText = document.querySelector('#email_text_quote');
        var messageAlertText = document.querySelector('#message_text_quote');
        var sentForm = document.querySelector('#sent_form_quote');
        var  acceptFiles = document.querySelector("#accept_files");
        console.log(photos.files.length,'------', allFiles);
        if(photos.files.length === 0){
            acceptFiles.innerHTML = "Please attach FIles";
        }
        if(email != ''){
            if( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                emailAlertText.innerHTML = "";
                //return true;
            } else {
                emailAlertText.innerHTML = "You have entered an invalid email address!";
                //return false;
            }

        }else{
            emailAlertText.innerHTML = "This field is required";
            //  return false;
        }

        if(message != ''){
            messageAlertText.innerHTML = "";
        } else {
            messageAlertText.innerHTML = "This field is required";
            return false;
        }

        formData.append('sent', 'Request A Quote');
        formData.append('email', email);
        formData.append('message', message);
        for (let i = 0; i < allFiles.length; i++) {
            formData.append('photos[]', allFiles[i]);
        }

        fetch(request_email, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                sentForm.innerHTML = "Your message has been successfully sent.";
                sentForm.style.color = "green";
                setTimeout(function(){
                    sentForm.style.display='none';
                }, 3000);
                document.querySelector('input[type="file"][multiple]').value = '';
                document.querySelector('#email_text_quote').value = '';
                document.querySelector('#work_message').value = '';
                document.querySelector("#ul_file_name ").innerHTML = "";
                acceptFiles.innerHTML = "";
                emailAlertText.innerHTML = "";
                messageAlertText.innerHTML = "";
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
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

            {/*})}*/}

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
                            <NavLink to={data?.type3.link} className="home__drawings__left__info__link">{`read 
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
                                <NavLink to={data?.type4.link}  className="home__branding__top__info__link">{`read 
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
                                <GoogleReCaptchaProvider reCaptchaKey="6LdDlKkaAAAAAORPtb5wZduC2uyePRvOgW2vA5l6">
                                <h2 className="home__request__container__title">REQUEST A QUOTE</h2>
                                <div className="home__request__container__form">
                                    <form method="POST" action={request_email} enctype="multipart/form-data">
                                        <h4 id="email_text_quote" className="error_message"></h4>
                                        <div  className="home__request__container__form__main">
                                            <div className="home__request__container__form__main__left">
                                                <input id="quote_email" type="email" name="email" required placeholder="email@email.com*" className="home__request__container__form__main__left__email"/>
                                                <input id="quote" type="hidden" name="quote"  value="Request A Quote"/>
                                                <div  className="home__request__container__form__main__left__row">
                                                    <div className="home__request__container__form__main__left__row__quote">
                                                        <h4 className="error_message" id="message_text_quote"></h4>
                                                        <textarea name="message" required id="quote_message" cols="30" rows="8" placeholder="Write your quote here *"  className="home__request__container__form__main__left__row__quote__textarea"></textarea>
                                                    </div>
                                                    <div className="home__request__container__form__main__left__row__files">
                                                        <ul id="ul_file_name" className="home__request__container__form__main__left__row__files__list">

                                                        </ul>
                                                    </div>
                                                    <h4 id="accept_files" className="error_message"></h4>
                                                    <h4 id="sent_form_quote" className="success_message"></h4>
                                                </div>
                                            </div>
                                            <div className="home__request__container__form__main__right">
                                                <div className="home__request__container__form__main__right__file">
                                                    <label className="home__request__container__form__main__right__file__label" htmlFor="attach">attach 
                                                    a file</label>
                                                    <input onChange={onChangeHandler}  className="home__request__container__form__main__right__file__input" type="file" id="attach" multiple name="images[]" accept=".jpg, .jpeg, .png, .gif, application/pdf"/>
                                                </div>
                                                
                                                <button onClick={quoteSubmit} className="home__request__container__form__main__right__submit" type="submit" >send</button>

                                            </div>
                                            
                                        </div>

                                    </form>
                                </div>
                                </GoogleReCaptchaProvider>
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
                    <GoogleReCaptchaProvider reCaptchaKey="6LdDlKkaAAAAAORPtb5wZduC2uyePRvOgW2vA5l6">
                    <div className="col-lg-6 col-12 p-0 order-1 order-lg-12">
                        <div className="home__contact__form">
                            <form method="POST" action={contact_email}   >
                                <div  className="home__contact__form__main">
                                        <h4 id="email_alert_contact" className="error_message"></h4>
                                        <input id="contact_email" required type="text" name="email"  placeholder="email@email.com*" className="home__contact__form__main__email"/>
                                        <input id="contact" type="hidden" name="contact"  value="Contact Us"/>

                                        <div  className="home__contact__form__main__row">
                                            <div className="home__contact__form__main__row__textarea">
                                                <label className="home__contact__form__main__row__textarea__label" htmlFor="message">Message</label>
                                                <textarea name="message" required id="contact_message" cols="30" rows="8" placeholder="Write your message here"  className="home__contact__form__main__row__textarea__main"></textarea>
                                            </div>
                                        </div>
                                        <button onClick={contactSubmit} className="home__contact__form__main__submit" >Send</button>
                                            <h4 id="sent_form_contact" className="success_message"></h4>
                                </div>
                                    
                            </form>
                        </div>
                    </div>
                    </GoogleReCaptchaProvider>
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