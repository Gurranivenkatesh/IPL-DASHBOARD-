import './index.css'
import { Link } from 'react-router-dom';



const TeamCard = props => {

    const {teamsDetails} = props
    const {name,id,team_image_url} = teamsDetails
    return(
        <div className='list-teams'>

          <li className='teams-list'>
            <Link to={`/team-matches/${id}`} className='link'>
            <img src={team_image_url} className='team-logo' alt={name}/>
            <p className='team-name'>{name}</p>
            </Link>

          </li>
          </div>
    )
}

export default TeamCard;