import {React, useEffect, useState} from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerBg from '../../assets/img/Shop/bannerBg.png';
import product from '../../assets/img/Shop/shop-product-image.png';
import constants from "../../helpers/constants";



function Shop (props) {
    const shop_main_url = `${constants.urls.API}/getShopImage`;
    const shop_url = `${constants.urls.API}/getShopByCategory`;
    const cat_url = `${constants.urls.API}/getCategory`;
    const [ data, setData ] = useState(null);
    const [ request_data, setReqData ] = useState(null);
    const [ cat_data, setCatData ] = useState(null);
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
                            newReqState = el.shop_by_category;
                            break;
                        case 2:
                            newCatState = el.category;
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

    // console.log('test--',cat_data, request_data);
    if (!isLoaded) {
        return <div className="loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    const TabKey = (index) =>{
        if(index == 0){
            return "firstTab";
        }else{
            return "Tab-"+index;
        }
    }
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
    return (
        <div className="shop">
            <div className="shop__banner" style={{ backgroundImage: `url(${data && constants.urls.UPLOAD + data[0].path})` }}>
                <h1 className="shop__banner__title">
                    shop
                </h1>
            </div>
            <div className="shop__content">
                <Tabs defaultActiveKey="firstTab" id="uncontrolled-tab-example" className="shop__content__tabs">
                    {cat_data && cat_data.map(function(item, i) {
                        return <Tab eventKey={TabKey(i)} title={item.name} className="shop__content__tabs__tab">
                            <div className="shop__content__tabs__tab__shop">
                                {request_data[item.id] && request_data[item.id].map(function(it, j) {
                            return <div className="shop__content__tabs__tab__shop__content">
                                        <div className={`shop__content__tabs__tab__shop__content__image ${imgOrderClass(j)}`} >
                                            <Image src={ constants.urls.UPLOAD + it.logo} alt="single shop image"/>
                                        </div>
                                        <div className={`shop__content__tabs__tab__shop__content__info ${infoOrderClass(j)}`}>
                                            <h3 className="shop__content__tabs__tab__shop__content__info__title">{it.title}</h3>
                                            <p className="shop__content__tabs__tab__shop__content__info__text">{it.description}</p>
                                            <p className="shop__content__tabs__tab__shop__content__info__price">{it.price} {it.currency.toUpperCase()}</p>
                                            <NavLink to={it.link}
                                                     className="shop__content__tabs__tab__shop__content__info__details">Click
                                                here for more details</NavLink>
                                            {/*info@circletechnicaldesign.com*/}
                                            <a href={`mailto:info@circletechnicaldesign.com?subject=Shop:%20${it.title}&body=Title:%20${it.title}%0A%0ADescription:%20${it.description}%0A%0APrice:%20${it.price}%20${it.currency.toUpperCase()}%0A%0AImage:%20${constants.urls.UPLOAD + it.logo}`}
                                               className="shop__content__tabs__tab__shop__content__info__order">order
                                                by email</a>
                                        </div>
                                    </div>
                                })}

                            </div>
                        </Tab>
                    })}
                    
                </Tabs>
            </div>
        </div>
    )
}
// <script>
//     $( "nav a:first-child" ).addClass( "active" );
// </script>
export default Shop ;
