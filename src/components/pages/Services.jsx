import React from 'react';
import { Image } from 'react-bootstrap';
import bannerBg from '../../assets/img/Services/bannerBg.png';
import box from '../../assets/img/Services/box.png';



function Services (props) {
    return (
        <div className="services">

            <div className="services__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="services__banner__title">
                    OUR SERVICES
                </h1>
            </div>
            <div className="services__description">            
                <div className="container container--middle--lg">
                    <div className="row">
                        <div className="col-12">
                            <p className="services__description__text">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt`}</p>
                            <div className="services__description__list">
                                <ul className="services__description__list__info">
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>                                
                                </ul>
                                <ul className="services__description__list__info">
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>
                                    <li className="services__description__list__info__item"><p className="services__description__list__info__item__text">POINT</p></li>                                
                                </ul>
                            </div>
                            <p className="services__description__text">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services__work">                            
                <div className="container container--middle--lg">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="services__work__title">Check Our Works</h2>
                        </div>
                    </div>
                    <div className="row services__work__row">
                        <div className="col-12 col-md-6 col-lg-4 services__work__row__col">
                            <div className="services__work__row__col__other">                                
                                <Image src={box}   alt="work"  className="services__work__row__col__other__image"/>
                                <h3 className="services__work__row__col__other__title">Title</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 services__work__row__col">
                            <div className="services__work__row__col__other">                                
                                <Image src={box}   alt="work"  className="services__work__row__col__other__image"/>
                                <h3 className="services__work__row__col__other__title">Title</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 services__work__row__col">
                            <div className="services__work__row__col__other">                                
                                <Image src={box}   alt="work"  className="services__work__row__col__other__image"/>
                                <h3 className="services__work__row__col__other__title">Title</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services ;
