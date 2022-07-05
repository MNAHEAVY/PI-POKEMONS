import {useState} from 'react'
import Card from "./Card";
import './Styles/Pagination.css'

export default function Pagination({aPokemons,cantPkmn,refresh}){

const cantPage = Math.round(aPokemons.length / cantPkmn);
const [page, setPage]= useState(1);
const lastPkmn = page * cantPkmn;
const firstPkmn = lastPkmn - cantPkmn;
let pkmnForPage = aPokemons.slice(firstPkmn, lastPkmn)

const buttons = []

 for (let i= 1; i<=cantPage; i++){
         buttons.push(
         <button key= {i} onClick={()=>setPage(i)}>{i}</button>)
        }


if(page !== 1 && page > buttons.length){
        setPage(1)
    }

return(
    <div className='pag-conteiner'>
        <div className='pag-cont-cards'>
             {
                refresh && pkmnForPage.length?
              
                pkmnForPage.map((p)=>{
                    return(
                        <div>
                            <Card id={p && p.id} image={p && p.image} name={p && p.name} types={p && p.types}/>
                        </div>)
                })
               
               
                
                :
                <h1>Cargando...</h1>

             }
            
            </div>
            <div className='pg-cont-butt'>
                {buttons}
            </div>

        
      
    </div>
            )}

