import './App.scss';
import { TeamPages } from './Pages/TeamPages';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {MatchPages} from './Pages/MatchPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/teams/:teamName" element={<TeamPages/>}></Route>
        <Route path="/teams/:teamName/match/:year" element={<MatchPages/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
