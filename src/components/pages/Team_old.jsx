import {React, useEffect, useState} from 'react';
import { Image } from 'react-bootstrap';
import bannerBg from '../../assets/img/Team/bannerBg.png';
import employee from '../../assets/img/Team/employee.png';
import { GoogleReCaptchaProvider,GoogleReCaptcha } from 'react-google-recaptcha-v3';
import pngFile from '../../assets/img/Home/icons/png-file.svg';
import pdfFile from '../../assets/img/Home/icons/pdf-file.svg';
import gifFile from '../../assets/img/Home/icons/gif-file.svg';
import box from '../../assets/img/Team/box.png';
import constants from "../../helpers/constants";


function Team (props) {
    const our_team_main_url = `${constants.urls.API}/getOurTeamImage`;
    const our_team_url = `${constants.urls.API}/getOurTeam`;
    const contact_url = `${constants.urls.API}/getWorksWithUsImage`;
    const work_email = `${constants.urls.API}/AddWorkWithUs`;

    const [ data, setData ] = useState(null);
    const [ request_data, setReqData ] = useState(null);
    const [ contact_data, setContactData ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(()=>{
        Promise.all([
            fetch(our_team_main_url, {
                method: `GET`
            }),
            fetch(our_team_url, {
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
                            newState = el.our_team_image;
                            break;
                        case 1:
                            newReqState = el.our_team;
                            break;
                        case 2:
                            newContactState = el.work_with_us_image;
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
    const imgOrderClass = (index) =>{
        if(index%2 != 0){
            return "order-1 order-md-12";
        }else{
            return "";
        }
    }
    const infoOrderClass = (index) =>{
        if(index%2 != 0){
            return "order-12 order-md-1";
        }else{
            return "";
        }
    }
    if (!isLoaded) {
        return <div className="loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    var allImages = [];

    const onChangeHandler=event=>{

        //get files name
        const photos = document.querySelector('input[type="file"][multiple]');
        var  ul = document.querySelector(".team__work__container__form__main__left__row__files__list");
        var  acceptFiles = document.querySelector("#accept_files");
        var ext = photos.files[0].name.split('.').pop();
        // if(ext=="pdf" || ext=="docx" || ext=="doc"){
        if(ext=="pdf"){
            acceptFiles.innerHTML = "";
        } else{
            acceptFiles.innerHTML = "Choose PDF format!";
            acceptFiles.style.color = "red";
            return false;
        }

        for (let i = 0; i < photos.files.length; i++) {
            console.log(photos.files[i].name);
            var li = document.createElement("li");
            var p = document.createElement("p");
            var image = document.createElement("IMG");
            var span = document.createElement("SPAN");
            li.setAttribute("class", "team__work__container__form__main__left__row__files__list__item");
            p.setAttribute("class", "team__work__container__form__main__left__row__files__list__item__info");
            image.setAttribute("class", "team__work__container__form__main__left__row__files__list__item__info__image");
            image.setAttribute("src", pdfFile);
            ul.appendChild(li);
            li.appendChild(p);
            p.append(image);
            p.append(span);
            span.innerHTML = photos.files[i].name;
        }

    }

    const workSubmit= ( e ) => {
        e.preventDefault();

        const formData = new FormData();
        const photos = document.querySelector('input[type="file"][multiple]');
        const email = document.querySelector('#work_email').value;
        const message = document.querySelector('#work_message').value;
        //validation
        var emailAlertText = document.querySelector('#email_text');
        var messageAlertText = document.querySelector('#message_text');
        var sentForm = document.querySelector('#sent_form');
        var  acceptFiles = document.querySelector("#accept_files");
        console.log(photos.files.length);
        if(photos.files.length === 0){
            acceptFiles.innerHTML = "Please attach your CV";
            acceptFiles.style.color = "red";
        }
        if(email != ''){
            if( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                emailAlertText.innerHTML = "";
                //return true;
            } else {
                emailAlertText.innerHTML = "You have entered an invalid email address!";
                emailAlertText.style.color = "red";
                //return false;
            }

        }else{
            emailAlertText.innerHTML = "This field is required";
            emailAlertText.style.color = "red";
          //  return false;
        }

        if(message != ''){
            messageAlertText.innerHTML = "";
        } else {
            messageAlertText.innerHTML = "This field is required";
            messageAlertText.style.color = "red";
            return false;
        }

        formData.append('sent', 'Work With Us');
        formData.append('email', email);
        formData.append('message', message);
        for (let i = 0; i < photos.files.length; i++) {
            formData.append('photos[]', photos.files[i]);
        }

        fetch(work_email, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                sentForm.innerHTML = "\"Thank you!\n" + "Your message has been successfully sent.\"";
                sentForm.style.color = "green";
                setTimeout(function(){
                    sentForm.style.display='none';
                }, 3000);
                document.querySelector('input[type="file"][multiple]').value = '';
                document.querySelector('#work_email').value = '';
                document.querySelector('#work_message').value = '';
                document.querySelector(".team__work__container__form__main__left__row__files__list__item p").style.display = 'none';
                acceptFiles.innerHTML = "";
                emailAlertText.innerHTML = "";
                messageAlertText.innerHTML = "";

            })
            .catch(error => {
                console.error('Error:', error);
                // sentForm.innerHTML = "\"Thank you!\n" + "Your message has been successfully sent.\"";
                // sentForm.style.color = "green";
                // setTimeout(function(){
                //     sentForm.style.display='none';
                // }, 3000);
            });
    }
    return (
        <div className="team">
            <div className="team__banner" style={{ backgroundImage: `url(${data && constants.urls.UPLOAD + data[0].path})` }}>
                <h1 className="team__banner__title">
                    OUR TEAM
                </h1>
            </div>
            <div className="team__employee">
                <div className="container container--middle">
                    {request_data.map(function(item, i) {
                       return <div key={"product-list-" + item.id} className="row team__employee__row">
                            <div className={`col-md-6 col-12 ${imgOrderClass(i)}`}>
                                <div className="team__employee__row__image">
                                    <Image src={constants.urls.UPLOAD +item.path} alt="Employee"/>
                                </div>
                            </div>
                            <div className={`col-md-6 col-12 ${infoOrderClass(i)}`}>
                                <div className="team__employee__row__info">
                                    <h2 className="team__employee__row__info__title">{item.name}  {item.surname}</h2>
                                    <h3 className="team__employee__row__info__position">{item.position}</h3>
                                    <p className="team__employee__row__info__text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>                
            <div className="team__work__top">
                    <Image src={contact_data && constants.urls.UPLOAD + data[0].path} alt="TECHNICAL DESIGN icon" className="team__work__top__image"/>
            </div>
            <div className="team__work">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="team__work__container">
                                <h2 className="team__work__container__title">DO YOU WANT TO WORK WITH US?</h2>
                                <div className="team__work__container__form">
                                    <GoogleReCaptchaProvider reCaptchaKey="6LdDlKkaAAAAAORPtb5wZduC2uyePRvOgW2vA5l6">
                                    <form method="POST" action={work_email} enctype="multipart/form-data">
                                            <h4 id="email_text"></h4>
                                        <div  className="team__work__container__form__main">
                                            <div className="team__work__container__form__main__left">
                                                <input id="work_email"  type="email" required name="email"  placeholder="email@email.com*" className="team__work__container__form__main__left__email"/>
                                                <input id="work_quote" type="hidden" name="work"  value="Work With Us"/>
                                                <div  className="team__work__container__form__main__left__row">
                                                        <h4 id="message_text"></h4>
                                                    <div className="team__work__container__form__main__left__row__quote">
                                                        <textarea name="message" required id="work_message" cols="30" rows="8" placeholder="Write about your work here *"  className="team__work__container__form__main__left__row__quote__textarea"></textarea>
                                                    </div>
                                                    <div className="team__work__container__form__main__left__row__files">
                                                        <ul id="ul_file_name" className="team__work__container__form__main__left__row__files__list">
                                                            {/*<li className="team__work__container__form__main__left__row__files__list__item">*/}
                                                            {/*    <p className="team__work__container__form__main__left__row__files__list__item__info"><Image className="team__work__container__form__main__left__row__files__list__item__info__image" src={pngFile} alt="pdf"/><span>attached file name</span></p>*/}
                                                            {/*</li>*/}
                                                            {/*<li className="team__work__container__form__main__left__row__files__list__item">*/}
                                                            {/*    <p className="team__work__container__form__main__left__row__files__list__item__info"><Image className="team__work__container__form__main__left__row__files__list__item__info__image" src={gifFile} alt="gif"/><span>attached file name</span></p>*/}
                                                            {/*</li>*/}
                                                        </ul>
                                                    </div>
                                                        <h4 id="accept_files"></h4>
                                                    <h4 id="sent_form"></h4>
                                                </div>
                                            </div>
                                            <div className="team__work__container__form__main__right">
                                                <div className="team__work__container__form__main__right__file">
                                                    <label className="team__work__container__form__main__right__file__label" htmlFor="attach">attach
                                                    your
                                                    CV*</label>
                                                    <input onChange={onChangeHandler} className="team__work__container__form__main__right__file__input" type="file" id="attach" name="images[]" required multiple accept="application/pdf"/>{/*application/vnd.ms-excel*/}
                                                </div>
                                                
                                                <button onClick={workSubmit} className="team__work__container__form__main__right__submit">send </button>
                                            </div>
                                            
                                        </div>
                                        
                                    </form>
                            </GoogleReCaptchaProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Team ;