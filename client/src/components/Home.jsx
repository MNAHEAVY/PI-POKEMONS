import { useEffect, useState} from "react"
import {getAllPokemons, getAllTypes, filterCreated,filterByTypes,orderPkmnsAlpha,orderPkmnsStr} from "../actions"
import {useDispatch,useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import Pagination from "./Pagination"
import SearchBar from './SearchBar'
import  './Styles/Home.css'




export default function Home(){
    const dispatch = useDispatch()
    const aPokemons = useSelector(store => store.pkmns)
    const aTypes = useSelector(store => store.types)
    const [cantPkmnPage, setCantPkmnPage]= useState(12);
    const [refresh, setRefresh] = useState(1)


 
useEffect(()=>{
     dispatch(getAllPokemons())
     dispatch(getAllTypes())
    },[dispatch]);
   
    
function handleClick(e){
        e.preventDefault();
        dispatch(getAllPokemons())
    }

function filterType(e){
        e.preventDefault();
        dispatch(filterByTypes(e.target.value))
    }
    
function handleChangeResults(e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
    }

function handleChangeAlpha(e){
        e.preventDefault();
        setRefresh(refresh + 1)
        dispatch(orderPkmnsAlpha(e.target.value))
    }

function handleChangeStr(e){
        e.preventDefault();
        setRefresh(refresh + 1)
        dispatch(orderPkmnsStr(e.target.value))
    }
   

    
    return (
        <div className='home-container'>
            <div className='home-nav'>
                <div className='home-navbar-up'>
                  <SearchBar/>          
                  <h1>PIKAPIK'APP</h1>
                  <Link to="/create">
                      <button>
                         <h1>Crear Pokemon</h1> 
                      </button>  
                   </Link>
                </div>
                <div className= 'home-navbar-d'>
             <button onClick={(e)=>{handleClick(e)}}>
                <h1>Volver a cargar...</h1>
             </button>
        

            <div>
              <label>Pokemones</label>
                    <select onChange={(e)=>handleChangeResults(e)}>
                       <option value="all">Todos</option>,
                       <option value="api">API</option>,
                       <option value="created">CREADOS</option>,
                    </select>
            </div>

            <div>
              <label>Orden Alfabetico</label>
                    <select onChange={(e)=>handleChangeAlpha(e)}>
                       <option value="defect">----------</option>,
                       <option value="ascendingA">Ascendente</option>,
                       <option value="descendingA">Descendente</option>,
                    </select>
            </div>

            <div>
               <label>Orden Fuerza</label>
                    <select onChange={(e)=>handleChangeStr(e)}>
                        <option value="defect">----------</option>,
                        <option value="ascendingB">Ascendente</option>,
                        <option value="descendingB">Descendente</option>,
                    </select>
            </div>
          
            <div>
                 <label>Orden por Tipo</label>
                  <select onChange={(e)=>{filterType(e)}}>
                  <option value='all'>Todos</option>
                      {
                           aTypes&&aTypes.map(t=>{
                               return(
                                   <>
                                   <option value={t.name}>{t.name}</option>
                                   </>
                                )
                                })
                       }
                   </select>
            </div>
            </div>

        </div>
        <Pagination aPokemons={aPokemons} cantPkmn={cantPkmnPage} refresh={refresh}/>
    </div>
    
        
    )

    }