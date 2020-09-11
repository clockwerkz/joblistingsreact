import React from 'react';

const job = {
    id: "569bfcdc-fad1-4563-ae57-8585831db596",
    type: "Full Time",
    url: "https://jobs.github.com/positions/569bfcdc-fad1-4563-ae57-8585831db596",
    created_at: "Sun Sep 06 14:30:27 UTC 2020",
    company: "Hotel Trades Council, AFL-CIO",
    company_url: "http://www.hotelworkers.org",
    location: "New York, NY",
    title: "Web Developer",
    description: "<p>The New York Hotel Trades Council, AFL-CIO, a labor union that represents nearly 40,000 workers in the hotel, gaming, and racing industries in the New York City area, seeks an experienced web developer.</p> <p>This COVID crisis has shown us the immense value to our Union of developing a more expansive and sophisticated website. Since March, the number of viewers to our site has increased seven-fold (to as many as 20,000 per day and more) and we are investing our resources accordingly. In fact, we have so many concrete ideas to put the site to new innovative uses, that our one full-time Web Developer has much more work to do than he can possibly handle. Among the new uses we are developing are:</p> <p>Conducting secret ballot ratification votes online; Providing multi-lingual content to an incredibly diverse membership (the current site supports English, Spanish and Chinese content); Mobilizing rank-and-file political action in a private individually personalized Member Section; Providing non-union workers with a confidential communication channel with the union and interactive pages allowing them to compare their wages, benefits and working conditions to those enjoyed by unionized workers; and Many other applications.</p> <p>Our Union constantly seeks new ways to increase our effectiveness through smart use of technology and we are looking for a creative developer to help conceive of, design and implement tools to support the Union in our mission.</p> <p>This position offers the prospect of a great career and, as we are a labor union, an excellent benefit package.</p> <p>The team currently works remotely from home due to the COVID situation. When things return to normal, we intend to be flexible about remote work, and will consider skilled applicants who don’t live in the New York area.</p> <p>Starting salary: $70,000 to $85,000</p> <p>Benefits include: Medical, Dental, Optical, and Prescription Drugs with family coverage (including domestic partners); Pension, Pre-paid Legal, Flexible Spending Accounts, Life Cycle Benefits, Long-Term Care Insurance, and other benefits.</p> <p>Requirements: At least 3 years developing websites using an MVC framework (with preference given to specific knowledge of Laravel PHP framework). Strong UI/UX design skills Strong javascript skills</p> <p>Other useful experience/qualifications:</p> <ul> <li>Advanced experience managing SQL databases</li> <li>Linux server administration</li> <li>Networking skills</li> <li>Python</li> </ul> ",
    how_to_apply: `<p>Please submit a resume, three references and a cover letter to <a href="mailto:careers@nyhtc.org">careers@nyhtc.org</a> with the subject line “Web Developer.” The cover letter should be clear and concise and explain the specific reasons for your interest in the position, and specify (with appropriate explanation) which of each of the listed qualifications you possess and which ones you do not possess.</p> <p>The New York Hotel Trades Council, AFL-CIO, is an equal opportunity employer. All persons regardless of age, race, ethnicity, gender, religious affiliation and sexual orientation are encouraged to apply.</p>`,
    company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE9KIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a30d608a910769a14438f7e0d7f3a673ca961499/HTC%20logo.jpg"
    };

const Card = (props) => {
    
    const timeElapsed = new Date().getTime() - new Date(job.created_at).getTime();
    const difference_in_days = Math.floor(timeElapsed / (1000 * 3600 * 24));
    
    return (
        <div className="card">
            {job.company_logo ? <img src={job.company_logo} className="card__img" /> : <div className="card__img">not found</div>}
                <div className="card__body">
                    <div className="card__info">
    <h2 className="card__company">{job.company}</h2>
    <h1 className="card__position">{job.title}</h1>
                        {job.type==="Full Time" ? <h3 className="card__highlight">Full time</h3> : ""}
                    </div>
                    <ul className="card__tags">
    <li className="card__tag"><i className="material-icons">public</i>{job.location}</li>
                        <li className="card__tag"><i className="material-icons">access_time</i>{difference_in_days} days ago</li>
                    </ul>
            </div> 
        </div> 
    )
}

export default Card;