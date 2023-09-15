import './index.css';

const LatestMatch = props => {
    const {latestMatchData} = props

    const {
        umpires,
        result,
        man_of_the_match,
        date,
        venue,
        competing_team,
        competing_team_logo,
        first_innings,
        second_innings,
    } =latestMatchData;

      return(
        <div className="latest-match-container">
            <h1 className="latest-match-heading">Latest Matches</h1>
                <div className="latest-match-card">
                    <div className="latest-match-details-logo-container">
                        <div className="latest-match-details-1">
                            <p className="latest-match-team-name">{competing_team}</p>
                            <p className="latest-match-date">{date}</p>
                            <p className="match-details">{venue}</p>
                            <p className="match-details">{result}</p>
                        </div>
                        <img 
                        src={competing_team_logo}
                        className='latest-match-team-logo'
                        alt={`latest match ${competing_team}`} 
                        />
                    </div>
                    <hr className="separator"/>
                    <div className="latest-match-details-2">
                        <p className="latest-match-details-label">First Innings</p>
                        <p className="latest-match-details-value">{first_innings}</p>
                        <p className="latest-match-details-label">Second Innings</p>
                        <p className="latest-match-details-value">{second_innings}</p>
                        <p className="latest-match-details-label">Man of The Match</p>
                        <p className="latest-match-details-value">{man_of_the_match}</p>
                        <p className="latest-match-details-label">Umpires</p>
                        <p className="latest-match-details-value">{umpires}</p>
                    </div>
                </div>
            </div>
      )

}
export default LatestMatch;