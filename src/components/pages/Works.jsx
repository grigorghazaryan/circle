import React from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerBg from '../../assets/img/Works/bannerBg.png';
import work1 from '../../assets/img/Works/work/1.png';
import work2 from '../../assets/img/Works/work/2.png';


function Works (props) {
    return(
        <div className="works">
            <div className="works__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="works__banner__title">
                    OUR WORKS
                </h1>
            </div>
            <div className="works__content">            
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="works__content__tabs">
                    <Tab eventKey="all" title="All" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            
                        </div>
                    </Tab>
                    <Tab eventKey="branding" title="Branding" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="technical" title="Technical" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="interior" title="Interior" className="works__content__tabs__tab">
                        <div className="works__content__tabs__tab__container">
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work1} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="works__content__tabs__tab__container__item">
                                <div className="works__content__tabs__tab__container__item__image">
                                    <Image src={work2} alt="work"/>
                                </div>
                                <div  className="works__content__tabs__tab__container__item__info">
                                    <NavLink to="/" className="works__content__tabs__tab__container__item__info__link">
                                        <div className="works__content__tabs__tab__container__item__info__link__content">                                            
                                                <h3 className="works__content__tabs__tab__container__item__info__link__content__title">TITLe</h3>
                                                <p className="works__content__tabs__tab__container__item__info__link__content__subtitle">Sub-title</p>
                                            
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>
        </div>
    )

}

export default Works ;