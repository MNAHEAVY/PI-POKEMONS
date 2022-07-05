import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPkmnsById } from '../actions';
import { useEffect } from 'react';


export default function Pokemon() {
    const {id} = useParams();
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPkmnsById(id));
    },[dispatch,id])
        
        let pokemon = useSelector(store => store.pokemon);

    return (
        <div>
            {
                pokemon.id?
                <div >
                    <div >                        
                    <h4>nombre: {pokemon.name}</h4>
                    </div>
                    {/* <div >
                        <h1>{Pokemon.name}</h1>
                        
                        <h4>Id: {Pokemon.id}</h4>
                        <h4>Vida: {Pokemon.life}</h4>
                        <h4>Ataque: {Pokemon.strength}</h4>
                        <h4>Defensa: {Pokemon.defense}</h4>
                        <h4>Velocidad: {Pokemon.velocity}</h4>
                        <h4>Altura: {Pokemon.height} </h4>
                        <h4>Peso: {Pokemon.weight}</h4>
                    </div> */}
                </div> : 
                
                <p>Cargando Detalles...</p>    
            }
            <Link to= '/home' >
                <button>Volver</button>
            </Link>
        </div>
    )
}