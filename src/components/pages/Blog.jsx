import React from 'react';
import { Image } from 'react-bootstrap';
import bannerBg from '../../assets/img/Blog/bannerBg.png';
import blog from '../../assets/img/Blog/blog.png';
import { NavLink } from 'react-router-dom';



function Blog (props) {
    return (
        <div className="blog">
            <div className="blog__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="blog__banner__title">
                    BLOg
                </h1>
            </div>
            <div className="blog__list">
                <div className="container container--middle--lg">
                    <div className="row blog__list__row">
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blog__list__row__col">
                            <div className="blog__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blog__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blog__list__row__col__info__content">
                                        <p className="blog__list__row__col__info__content__date">Date</p>
                                        <div className="blog__list__row__col__info__content__text">                                        
                                                <h3 className="blog__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blog__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog ;
