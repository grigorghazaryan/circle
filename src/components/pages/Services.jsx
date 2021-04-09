import {React, useEffect, useState} from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerBg from '../../assets/img/Services/bannerBg.png';
import box from '../../assets/img/Services/box.png';
import constants from "../../helpers/constants";



function Services (props) {
    const services_url = `${constants.urls.API}/getServices`;
    const our_works_order_url = `${constants.urls.API}/getOurWorksOrder`;
    const [ data, setData ] = useState(null);
    const [ request_data, setReqData ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(()=>{
        Promise.all([
            fetch(services_url, {
                method: `GET`
            }),
            fetch(our_works_order_url, {
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
            let newIsloadedState = {};
            result.forEach( ( el,i ) => {
                if( el.success ) {
                    switch (i) {
                        case 0:
                            newState = el.services;
                            break;
                        case 1:
                            newReqState = el.our_works_order;
                            break;
                    }
                }
            })
            setData( newState );
            setReqData( newReqState );
            setIsLoaded(newIsloadedState);
        })
            .catch( err => {
                console.log(err);

                /* scroll animation end */
            })
    },[props.match.params.id]);

    if (!isLoaded) {
        return <div className="loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className="services">

            <div className="services__banner" style={{ backgroundImage: `url(${data && constants.urls.UPLOAD + data[0].logo})` }}>
                <h1 className="services__banner__title">
                    {data && data[0].title}
                </h1>
            </div>
            <div className="services__description">            
                <div className="container container--middle--lg">
                    <div className="row">
                        <div className="col-12">
                            <p className="services__description__text">{data && data[0].text1}</p>
                                 <div  className="services__description__list">
                            {data && data[0].our_services_list.map(function(item, i) {
                                return  <ul key={"product-list-" + item.id} className="services__description__list__info">
                                        {/*{console.log(item)}*/}
                                        {item && item.our_services_list_item.map(function(it, j) {
                                            return   <li key={"product-list-item-" + it.id} className="services__description__list__info__item"><p
                                                className="services__description__list__info__item__text">{it.name}</p>
                                            </li>
                                        })}
                                    </ul>
                            })}
                                </div>
                            <p className="services__description__text">{data && data[0].text2}</p>
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
                        {request_data.map(function(item, i) {
                            return  <div key={"product-list-" + item.id} className="col-12 col-md-6 col-lg-4 services__work__row__col">
                            <div className="services__work__row__col__other">
                                <NavLink to="/">
                                    <div className="services__work__row__col__other__top">
                                        <Image src={constants.urls.UPLOAD +item.logo}   alt="work"  className="services__work__row__col__other__top__image"/>
                                    </div>

                                    <h3 className="services__work__row__col__other__title">{item.title}</h3>
                                </NavLink>
                            </div>
                        </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services ;
