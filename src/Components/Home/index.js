import './index.css';
import { useEffect,useState } from 'react';
import TeamCard from '../TeamCard';


const Home = () => {

     const [teamsList,setTeamsList] = useState([]);
     const [isLoading,setLoading] = useState(false);

     useEffect(()=>{
        getTeams();
     },[])

     const getTeams = () => {
        const url= "https://apis.ccbp.in/ipl"

        const options = {
            method:"GET"
        }
        setLoading(true)
        fetch(url,options)
        .then((response) =>{
            return response.json()
        })
        .then((jsonData)=>{
            setTeamsList(jsonData.teams)
            setLoading(false)
        })
     }

     console.log(teamsList)
     console.log(isLoading)

    return(
      <div className="home-route-container">
        <div className="teams-list-container">
            <div className="ipl-dashboard-heading-container">
                <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
                />
                <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
            </div>
            <div className='loader-container'>
                <ul className='team-list'>
             {isLoading ? (<div class="spinner-border text-secondary"></div>):(teamsList.map((eachTeam)=> (
                    <TeamCard
                    teamsDetails={eachTeam}
                    key = {eachTeam.id}
                    />
                ))
            )}
            </ul>
            </div>
        </div>
      </div>

     )
}
export default Home;