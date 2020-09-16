import React from 'react';
import connect from '../utilities/connect';
import { clearJob } from '../store/actions';

const Details = ({results, clearJob, selectedJob}) => {

    const job = results[selectedJob];
    console.log(job);
    const { description, company, company_logo, location, title, type, how_to_apply, created_at } = job;

    const timeElapsed = new Date().getTime() - new Date(created_at).getTime();
    const difference_in_days = Math.floor(timeElapsed / (1000 * 3600 * 24));
    return (
        <div className="details">
            <aside className="details__action">
                <p className="details__back" onClick={clearJob}><i className="material-icons">trending_flat</i> Back to Search</p>
                <h2 className="details__subtitle">How to Apply</h2>
                {how_to_apply ? (<div dangerouslySetInnerHTML={{__html: how_to_apply}}></div>):("")}
            </aside>
            <main className="details__info">
                <h1 className="details__title">{title} {type === "Full Time" ? (<span className="details__highlight">Full Time</span>):("")}</h1>
                <p className="details__time"><i className="material-icons">access_time</i> {difference_in_days} days ago</p>
                <div className="details__summary">
                    {company_logo ? <div style={{backgroundImage: `url(${company_logo})`}} className="details__img" /> : <div className="card__img">not found</div>}
                    <div className="details__company-info">
                        <h2 className="details__company">{company}</h2>
                        <p className="details__location"><i className="material-icons">public</i>{location}</p>
                    </div>
                </div>
                <div className="details__description" dangerouslySetInnerHTML={{__html : description}}></div>
            </main>
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => ({
    clearJob : clearJob(dispatch)
})

const mapStateToProps = (state) => ({
    results : state.results,
    selectedJob : state.selectedJob
})


export default connect(mapStateToProps, mapDispatchToProps)(Details);
