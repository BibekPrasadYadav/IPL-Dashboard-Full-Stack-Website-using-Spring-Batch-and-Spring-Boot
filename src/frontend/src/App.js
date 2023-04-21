import './App.css';
import { TeamPages } from './Pages/TeamPages';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/teams/:teamName" element={<TeamPages/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
