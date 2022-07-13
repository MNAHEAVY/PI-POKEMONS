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
        <div className="poke-nav">
            <div className= "poke-navbar-up">
                <div> 
                
                   <Link to= '/home' >
                       <button>
                           <h1>Volver</h1>
                       </button>
                   </Link>
                <h1>Pokemon</h1>
             </div>
            
            
           
          
            { pokemon.id?
                <div >
                    <div>                        
                    <img src={pokemon.image} />
                    </div>

                    <div>
                    <h2> {pokemon.name}</h2>
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
                    <h2>Cargando...</h2>    

             
               
            }
                 
             </div>

        </div>
    )
}