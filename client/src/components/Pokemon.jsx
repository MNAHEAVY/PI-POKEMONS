import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPkmnsById } from '../actions';
import { useEffect } from 'react';
import  './Styles/Pokemon.css'


export default function Pokemon() {
    const {id} = useParams();
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPkmnsById(id));
    },[dispatch,id])
        
        let pokemon = useSelector(store => store.pokemon);

    return (
        <div className="poke-container">
            <div className= "poke-nav">
                <div className="poke-navbar-up"> 
                
                <h1>Pokemon</h1>
                   <Link to= '/home' >
                       <button>
                           <h1>Volver</h1>
                       </button>
                   </Link>
             </div>
            
            
           
          
            { pokemon.id?
                <div className="pag-container">
                    <div>                        
                    <img src={pokemon.image} />
                    </div>

                    <div>
                    <h1> {pokemon.name}</h1>
                    <h4>Tipos: {pokemon.types}</h4>
                    <h4>Número ID {pokemon.id}</h4>
                    <h4>Estadisticas:</h4>
                    <h4>Vida: {pokemon.life}</h4>
                    <h4>Ataque: {pokemon.strength}</h4>
                    <h4>Defensa: {pokemon.defense}</h4>
                    <h4>Velocidad: {pokemon.velocity}</h4>
                    <h4>Altura: {pokemon.height}</h4>
                    <h4>Peso: {pokemon.weight}</h4>

                     </div>
            
                </div> 
                   : 
                    <h1>Cargando...</h1>    

             
               
            }
                 
             </div>

        </div>
    )
}