import React from 'react';
import connect from '../utilities/connect';

const Details = ({results, match}) => {
    const { id } = match.params ? match.params : 'No Parameter Passed';
    //TODO: Add a redirect if there is no id/param
    const job = results.find(job => job.id === id);
    console.log(job);
    return (
        <div>
            <h1>Details</h1>
            <p>{id}</p>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    results : state.results
})


export default connect(mapStateToProps)(Details);
