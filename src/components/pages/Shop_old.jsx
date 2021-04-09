import {React, useEffect, useState} from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerBg from '../../assets/img/Shop/bannerBg.png';
import product from '../../assets/img/Shop/shop-product-image.png';
import constants from "../../helpers/constants";



function Shop (props) {
    const shop_main_url = `${constants.urls.API}/getShopImage`;
    const shop_url = `${constants.urls.API}/getWorksWithUsImage`;
    const cat_url = `${constants.urls.API}/getWorksWithUsImage`;
    const [ data, setData ] = useState(null);
    const [ request_data, setReqData ] = useState(null);
    const [ contact_data, setCatData ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(()=>{
        Promise.all([
            fetch(shop_main_url, {
                method: `GET`
            }),
            fetch(shop_url, {
                method: `GET`
            }),
            fetch(cat_url, {
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
            let newCatState = {};
            let newIsloadedState = {};
            result.forEach( ( el,i ) => {
                if( el.success ) {
                    switch (i) {
                        case 0:
                            newState = el.shop_image;
                            break;
                        case 1:
                            newReqState = el.our_team;
                            break;
                        case 2:
                            newCatState = el.work_with_us_image;
                            break;

                    }
                }
            })
            setData( newState );
            setReqData( newReqState );
            setCatData( newCatState );
            setIsLoaded(newIsloadedState);
        })
            .catch( err => {
                console.log(err);

                /* scroll animation end */
            })
    },[props.match.params.id]);

    console.log('test--',data && data);
    if (!isLoaded) {
        return <div className="loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className="shop">
            <div className="shop__banner" style={{ backgroundImage: `url(${data && constants.urls.UPLOAD + data[0].path})` }}>
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
