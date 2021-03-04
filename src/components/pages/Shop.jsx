import React from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerBg from '../../assets/img/Shop/bannerBg.png';
import product from '../../assets/img/Shop/shop-product-image.png';



function Shop (props) {
    return (
        <div className="shop">
            <div className="shop__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="shop__banner__title">
                    shop
                </h1>
            </div>
            <div className="shop__content">
                <Tabs defaultActiveKey="tab01" id="uncontrolled-tab-example" className="shop__content__tabs">
                    <Tab eventKey="tab01" title="Tab 01" className="shop__content__tabs__tab">
                        <div className="shop__content__tabs__tab__shop">
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image order-1 order-md-12">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info order-12 order-md-1">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image order-1 order-md-12">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info order-12 order-md-1">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="branding" title="Tab 02" className="shop__content__tabs__tab">
                        <div className="shop__content__tabs__tab__shop">
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title2</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image order-1 order-md-12">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info order-12 order-md-1">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title2</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title2</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image order-1 order-md-12">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info order-12 order-md-1">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title2</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="technical" title="Tab 03" className="shop__content__tabs__tab">
                        <div className="shop__content__tabs__tab__shop">
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title3</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image order-1 order-md-12">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info order-12 order-md-1">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title3</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                            <div className="shop__content__tabs__tab__shop__content">
                                <div className="shop__content__tabs__tab__shop__content__image">
                                    <Image src={product} alt="single shop image"/>
                                </div>
                                <div className="shop__content__tabs__tab__shop__content__info">
                                    <h3 className="shop__content__tabs__tab__shop__content__info__title">Title3</h3>
                                    <p className="shop__content__tabs__tab__shop__content__info__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                                    <p className="shop__content__tabs__tab__shop__content__info__price">& 24.00</p>
                                    <NavLink to="/work" className="shop__content__tabs__tab__shop__content__info__details">Click here for more details</NavLink>
                                    <a href="#" className="shop__content__tabs__tab__shop__content__info__order">order by email</a>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default Shop ;
