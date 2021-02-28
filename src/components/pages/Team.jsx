import React from 'react';
import bannerBg from '../../assets/img/Team/bannerBg.png';
 

function Team (props) {

    return (
        <div className="team">
            <div className="team__banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className="team__banner__title">
                    OUR TEAM
                </h1>
            </div>
        </div>
    )
}

export default Team ;