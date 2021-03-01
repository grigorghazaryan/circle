import React from 'react';
import { Image } from 'react-bootstrap';
import bannerBg from '../../assets/img/Team/bannerBg.png';
import employee from '../../assets/img/Team/employee.png';
import pngFile from '../../assets/img/Home/icons/png-file.svg';
import gifFile from '../../assets/img/Home/icons/gif-file.svg';
import box from '../../assets/img/Team/box.png';

function Team (props) {

    return (
        <div className="team">
            <div className="team__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="team__banner__title">
                    OUR TEAM
                </h1>
            </div>
            <div className="team__employee">
                <div className="container container--middle">                
                    <div className="row team__employee__row">
                        <div className="col-md-6 col-12">
                            <div className="team__employee__row__image">
                                <Image src={employee} alt="Employee"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="team__employee__row__info">
                                <h2 className="team__employee__row__info__title">NAME SURNAMe</h2>
                                <h3 className="team__employee__row__info__position">Position</h3>
                                <p className="team__employee__row__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
                            </div>
                        </div>
                    </div>
                    <div className="row team__employee__row">
                        <div className="col-md-6 col-12 order-12 order-md-1">                            
                            <div className="team__employee__row__info">
                                <h2 className="team__employee__row__info__title">NAME SURNAMe</h2>
                                <h3 className="team__employee__row__info__position">Position</h3>
                                <p className="team__employee__row__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-1 order-md-12">
                            <div className="team__employee__row__image team__employee__row__image--right">
                                <Image src={employee} alt="Employee"/>
                            </div>
                        </div>
                    </div>
                    <div className="row team__employee__row">
                        <div className="col-md-6 col-12">
                            <div className="team__employee__row__image">
                                <Image src={employee} alt="Employee"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="team__employee__row__info">
                                <h2 className="team__employee__row__info__title">NAME SURNAMe</h2>
                                <h3 className="team__employee__row__info__position">Position</h3>
                                <p className="team__employee__row__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
                            </div>
                        </div>
                    </div>
                    <div className="row team__employee__row">
                        <div className="col-md-6 col-12 order-12 order-md-1">                            
                            <div className="team__employee__row__info">
                                <h2 className="team__employee__row__info__title">NAME SURNAMe</h2>
                                <h3 className="team__employee__row__info__position">Position</h3>
                                <p className="team__employee__row__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-1 order-md-12">
                            <div className="team__employee__row__image team__employee__row__image--right">
                                <Image src={employee} alt="Employee"/>
                            </div>
                        </div>
                    </div>                    
                    <div className="row team__employee__row">
                        <div className="col-md-6 col-12">
                            <div className="team__employee__row__image">
                                <Image src={employee} alt="Employee"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="team__employee__row__info">
                                <h2 className="team__employee__row__info__title">NAME SURNAMe</h2>
                                <h3 className="team__employee__row__info__position">Position</h3>
                                <p className="team__employee__row__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
            <div className="team__work__top">
                    <Image src={box} alt="TECHNICAL DESIGN icon" className="team__work__top__image"/>
            </div>
            <div className="team__work">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="team__work__container">
                                <h2 className="team__work__container__title">DO YOU WANT TO WORK WITH US?</h2>
                                <div className="team__work__container__form">
                                    <form >
                                        <div  className="team__work__container__form__main">
                                            <div className="team__work__container__form__main__left">
                                                <input id="email" type="email"  placeholder="email@email.com*" className="team__work__container__form__main__left__email"/>

                                                <div  className="team__work__container__form__main__left__row">
                                                    <div className="team__work__container__form__main__left__row__quote">
                                                        <textarea name="" id="" cols="30" rows="8" placeholder="Write about your work here *"  className="team__work__container__form__main__left__row__quote__textarea"></textarea>
                                                    </div>
                                                    <div className="team__work__container__form__main__left__row__files">
                                                        <ul  className="team__work__container__form__main__left__row__files__list">
                                                            <li className="team__work__container__form__main__left__row__files__list__item">
                                                                <p className="team__work__container__form__main__left__row__files__list__item__info"><Image className="team__work__container__form__main__left__row__files__list__item__info__image" src={pngFile} alt="pdf"/><span>attached file name</span></p>
                                                            </li>
                                                            <li className="team__work__container__form__main__left__row__files__list__item">
                                                                <p className="team__work__container__form__main__left__row__files__list__item__info"><Image className="team__work__container__form__main__left__row__files__list__item__info__image" src={gifFile} alt="gif"/><span>attached file name</span></p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team__work__container__form__main__right">
                                                <div className="team__work__container__form__main__right__file">
                                                    <label className="team__work__container__form__main__right__file__label" htmlFor="attach">attach
                                                    your
                                                    CV*</label>
                                                    <input className="team__work__container__form__main__right__file__input" type="file" id="attach" name="attach" accept=".jpg, .jpeg, .png, .gif, .pdf"/>
                                                </div>
                                                
                                                <input className="team__work__container__form__main__right__submit" type="submit" value="send"/>
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
    )
}

export default Team ;