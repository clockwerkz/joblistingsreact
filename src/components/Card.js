import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__img">not found</div>
                <div className="card__body">
                    <div className="card__info">
                        <h2 className="card__company">New York University</h2>
                        <h1 className="card__position">Front-End Software Engineer</h1>
                        <h3 className="card__highlight">Full time</h3>
                    </div>
                    <ul className="card__tags">
                        <li className="card__tag"><i className="material-icons">public</i> New York</li>
                        <li className="card__tag"><i className="material-icons">access_time</i> 5 days ago</li>
                    </ul>
            </div> 
        </div> 
    )
}

export default Card;