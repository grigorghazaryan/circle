import React from 'react';
import bannerBg from '../../assets/img/Services/bannerBg.png';

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
        </div>
    )
}

export default Services ;
