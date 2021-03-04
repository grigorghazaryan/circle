import React from 'react';
import { Image } from 'react-bootstrap';
import bannerBg from '../../assets/img/Blog/bannerBg.png';
import blog from '../../assets/img/Blog/blog.png';
import { NavLink } from 'react-router-dom';



function BlogSingle (props) {
    return (
        <div className="blogSingle">
            <div className="blogSingle__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="blogSingle__banner__title">
                    BLOg
                </h1>
            </div>
            <div className="blogSingle__content">

            </div>
            <div  className="blogSingle__suggestions">
                <div className="container container--middle--lg">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="blogSingle__suggestions__title">Suggestions of Previous Blogs</h2>
                        </div>
                    </div>

                    <div className="row blogSingle__suggestions__list__row">
                        <div className="col-md-6 col-lg-4 blogSingle__suggestions__list__row__col">
                            <div className="blogSingle__suggestions__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blogSingle__suggestions__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blogSingle__suggestions__list__row__col__info__content">
                                        <p className="blogSingle__suggestions__list__row__col__info__content__date">Date</p>
                                        <div className="blogSingle__suggestions__list__row__col__info__content__text">                                        
                                                <h3 className="blogSingle__suggestions__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blogSingle__suggestions__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blogSingle__suggestions__list__row__col">
                            <div className="blogSingle__suggestions__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blogSingle__suggestions__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blogSingle__suggestions__list__row__col__info__content">
                                        <p className="blogSingle__suggestions__list__row__col__info__content__date">Date</p>
                                        <div className="blogSingle__suggestions__list__row__col__info__content__text">                                        
                                                <h3 className="blogSingle__suggestions__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blogSingle__suggestions__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 blogSingle__suggestions__list__row__col">
                            <div className="blogSingle__suggestions__list__row__col__info">
                                <NavLink to="/blog/test">
                                    <div className="blogSingle__suggestions__list__row__col__info__image">                                        
                                            <Image src={blog}   alt="blog image"/>                                        
                                    </div>
                                    <div className="blogSingle__suggestions__list__row__col__info__content">
                                        <p className="blogSingle__suggestions__list__row__col__info__content__date">Date</p>
                                        <div className="blogSingle__suggestions__list__row__col__info__content__text">                                        
                                                <h3 className="blogSingle__suggestions__list__row__col__info__content__text__title">Lorem ipsum dolor sit amet, consetetur</h3>                                        
                                            <p className="blogSingle__suggestions__list__row__col__info__content__text__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
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

export default BlogSingle ;
