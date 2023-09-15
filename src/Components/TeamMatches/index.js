import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";
import './index.css';


const TeamMatches = (props) =>{

     const params = useParams();
     const navigate =useNavigate()

     const [teamMatchData,setTeamMatchData] = useState({});
     const [isLoading,setLoading] = useState(false)
     const [isGet,setGet] = useState(false);

     const {id} = params
 
     useEffect(()=>{
         setLoading(true)
         const url =`https://apis.ccbp.in/ipl/${id}`;
         const options = {
             method:"GET"
         }
         fetch(url,options)
         .then((response)=>{
             return response.json()     
         })
         .then((jsonData)=>{
            setLoading(false)
            setGet(true)
            setTeamMatchData(jsonData)
         })
         
 
     },[])

     console.log(teamMatchData)
     console.log(isLoading)
    

     const onBackBtn = () =>{
        navigate("/")
     }
  
      
    return(
        <div className="team-banner-container">
            
            {isGet ? (<ul className="recent-matches-list">
                <img src={teamMatchData.team_banner_url} className="team-match-img" alt="team match img"/>
            <LatestMatch 
            latestMatchData={teamMatchData.latest_match_details}/>
            <div className="matches-list-recent">
               {teamMatchData.recent_matches.map(recentMatch => (
                    <MatchCard matchDetails={recentMatch} key={recentMatch.id}/>
                ))}
                </div>
                <button className='back-btn' onClick={onBackBtn}>Back</button>
    </ul>):(null)}
        </div>
        
    )
}
export default TeamMatches;


