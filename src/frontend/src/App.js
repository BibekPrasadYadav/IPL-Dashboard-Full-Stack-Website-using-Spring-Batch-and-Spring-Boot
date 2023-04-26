import './App.scss';
import { TeamPages } from './Pages/TeamPages';
import {HashRouter,Routes,Route} from 'react-router-dom';
import {MatchPages} from './Pages/MatchPages';
import { HomePages } from './Pages/HomePages';

function App() {
  return (
    
    <div className="App">
      
      <HashRouter>
      <Routes>
        <Route path="/teams/:teamName" element={<TeamPages/>}></Route>
        <Route path="/teams/:teamName/match/:year" element={<MatchPages/>}></Route>
        <Route path="/" element={<HomePages/>}></Route>
        
      </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
