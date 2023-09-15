import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import TeamMatches from './Components/TeamMatches';
import NotFound from './Components/Not Found';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/team-matches/:id' element={<TeamMatches/>} />
        <Route element={NotFound}/>

      </Routes>
      
    </div>
  );
}

export default App;
