import {Link} from 'react-router-dom';
import './Styles/Card.css'



export default function Card({image, name, types,id}){
    

    return(
        <div >
            <div >
               <img  src= {image} width= '300px' height ='380px'alt=""/> 
            </div>

          <Link to={`/pokemons/${id}`}>
              <div>
                 <h1>{name}</h1>
              </div>
           </Link>  
            <div> 
                <p>{types}</p>

           
    
            </div> 
            
            
        </div>
    )
}