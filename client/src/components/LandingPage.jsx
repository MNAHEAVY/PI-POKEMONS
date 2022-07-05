import {Link} from 'react-router-dom'
import './Styles/LandingPage.css';
import img from './Images/pokemon.png';
import img2 from './Images/poke title.png';

export default function LandingPage(){
    return (
        
        <div id='lp-container'>


        <header>
            <img src={img2}></img> 
        </header>
        
        <Link to="/home"><button>Entrar</button> </Link>
        

        <footer>
            <img src={img}></img> 
        </footer>

        </div>


            )
    
    }