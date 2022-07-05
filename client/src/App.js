import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import CreatePk from './components/CreatePk'
import Pokemon from './components/Pokemon'




function App() {
  return (
    <Router>
       <Routes>

        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<CreatePk/>}/>
        <Route path="/pokemons/:id" element={<Pokemon/>}/>
       

         </Routes>
    </Router>
  );
}
export default App;