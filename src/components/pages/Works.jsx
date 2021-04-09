import {React, useEffect, useState} from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerBg from '../../assets/img/Works/bannerBg.png';
import work1 from '../../assets/img/Works/work/1.png';
import work2 from '../../assets/img/Works/work/2.png';
import constants from "../../helpers/constants";


function Works (props) {
    const our_works_main_url = `${constants.urls.API}/getOurWorksImage`;
    const our_works_url = `${constants.urls.API}/getOurWorks`;
    const our_works_by_category_url = `${constants.urls.API}/getOurWorksByCategory`;
    const [ data, setData ] = useState(null);
    const [ request_data, setReqData ] = useState(null);
    const [ request_by_cat_data, setReqByCatData ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(()=>{
        Promise.all([
            fetch(our_works_main_url, {
                method: `GET`
            }),
            fetch(our_works_url, {
                method: `GET`
            }),
             fetch(our_works_by_category_url, {
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
            let newReqByCatState = {};
            let newIsloadedState = {};
            result.forEach( ( el,i ) => {
                if( el.success ) {
                    switch (i) {
                        case 0:
                            newState = el.our_works_image;
                            break;
                        case 1:
                            newReqState = el.our_works;
                            break;
                        case 2:
                            newReqByCatState = el.our_works;
                            break;
                    }
                }
            })
            setData( newState );
            setReqData( newReqState );
            setReqByCatData( newReqByCatState );
            setIsLoaded(newIsloadedState);
        })
            .catch( err => {
                console.log(err);

                /* scroll animation end */
            })
    },[props.match.params.id]);
    console.log(request_by_cat_data );
    if (!isLoaded) {
        return <div className="loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return(
        <div className="works">
            <div className="works__banner" style={{ backgroundImage: `url(${data && constants.urls.UPLOAD + data[0].path})` }}>
                <h1 className="works__banner__title">
                    OUR WORKS
                </h1>
            </div>
            <div className="works__content">            
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="works__content__tabs">
                    <Tab eventKey="all" title="All" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            {request_data.map(function(item, i) {
                                return <div key={"product-" + item.id} className="works__content__tabs__tab__container__item">
                                    <div className="works__content__tabs__tab__container__item__image">
                                        <NavLink to="/">
                                            <Image src={constants.urls.UPLOAD + item.logo} alt="work"/>
                                        </NavLink>
                                    </div>
                                    <div className="works__content__tabs__tab__container__item__info">
                                        <NavLink to="/"
                                                 className="works__content__tabs__tab__container__item__info__link">
                                            <div
                                                className="works__content__tabs__tab__container__item__info__link__content">
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">{item.title}</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">{item.description}</p>

                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="branding" title="Branding" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            {request_by_cat_data && request_by_cat_data.branding.map(function(item, i) {
                                return<div key={"list-" + item.id}  className="works__content__tabs__tab__container__item">
                                    <div className="works__content__tabs__tab__container__item__image">
                                        <NavLink to="/">
                                            <Image src={constants.urls.UPLOAD + item.logo} alt="work"/>
                                        </NavLink>
                                    </div>
                                    <div className="works__content__tabs__tab__container__item__info">
                                        <NavLink to="/"
                                                 className="works__content__tabs__tab__container__item__info__link">
                                            <div
                                                className="works__content__tabs__tab__container__item__info__link__content">
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">{item.title}</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">{item.description}</p>

                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="technical" title="Technical" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            {request_by_cat_data && request_by_cat_data.technical.map(function(item, i) {
                               return  <div key={"product-list1-" + item.id}  className="works__content__tabs__tab__container__item">
                                    <div className="works__content__tabs__tab__container__item__image">
                                        <NavLink to="/">
                                            <Image src={constants.urls.UPLOAD + item.logo} alt="work"/>
                                        </NavLink>
                                    </div>
                                    <div className="works__content__tabs__tab__container__item__info">
                                        <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                            <div className="works__content__tabs__tab__container__item__info__link__content">
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">{item.title}</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">{item.description}</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="interior" title="Interior" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            {request_by_cat_data && request_by_cat_data.interior.map(function(item, i) {
                                return <div key={"product-list+" + item.id}
                                            className="works__content__tabs__tab__container__item">
                                    <div className="works__content__tabs__tab__container__item__image">
                                        <NavLink to="/">
                                            <Image src={constants.urls.UPLOAD + item.logo} alt="work"/>
                                        </NavLink>
                                    </div>
                                    <div className="works__content__tabs__tab__container__item__info">
                                        <NavLink to="/"
                                                 className="works__content__tabs__tab__container__item__info__link">
                                            <div
                                                className="works__content__tabs__tab__container__item__info__link__content">
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">{item.title}</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">{item.description}</p>

                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            })}
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>
        </div>
    )

}

export default Works ;