import React from 'react';
import connect from '../utilities/connect';

const Details = ({results, match}) => {
    const { id } = match.params ? match.params : 'No Parameter Passed';
    //TODO: Add a redirect if there is no id/param
    const job = results.find(job => job.id === id);
    console.log(job);
    const { description } = job;
    return (
        <div className="details">
            <aside className="details__action">

            </aside>
            <main className="details__info">
                <div className="details__description" dangerouslySetInnerHTML={{__html : description}}></div>
            </main>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    results : state.results
})


export default connect(mapStateToProps)(Details);
