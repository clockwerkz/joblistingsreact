import React from 'react';

import connect from '../utilities/connect';
import { selectJob } from '../store/actions';

const Card = ({ id, type, url, created_at, company,company_logo, company_url, location, title, index, selectJob }) => {
    
    const timeElapsed = new Date().getTime() - new Date(created_at).getTime();
    const difference_in_days = Math.floor(timeElapsed / (1000 * 3600 * 24));
    const handleClick = () => {
        selectJob(index);
    }
    
    return (
        <div className="card" onClick={handleClick}>
            {company_logo ? <div style={{backgroundImage: `url(${company_logo})`}} className="card__img" /> : <div className="card__img">not found</div>}
                <div className="card__body">
                    <div className="card__info">
                        <h2 className="card__company">{company}</h2>
                        <h1 className="card__position">{title}</h1>
                        <div className="card__meta">
                        {type==="Full Time" ? <h3 className="card__highlight">Full time</h3> : ""}
                        <ul className="card__tags">
                            <li className="card__tag"><i className="material-icons">public</i>{location}</li>
                            <li className="card__tag"><i className="material-icons">access_time</i>{difference_in_days} days ago</li>
                        </ul>
                    </div>
                    </div>
                    
            </div> 
        </div> 
    )
}

const mapDispatchToProps = (dispatch) => ({
    selectJob : selectJob(dispatch)
})

export default connect(null, mapDispatchToProps)(Card);