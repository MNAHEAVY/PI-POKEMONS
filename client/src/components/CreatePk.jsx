import {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {createPkmn,getAllTypes} from "../actions"

export default function CreatePkmn(){
    const dispatch = useDispatch()
    const types = useSelector(store => store.types)
    const[input, setInput] = useState({
        name:'',
        image:'',
        life: 0,
        strength:0,
        defense: 0,
        velocity: 0,
        height: 0,
        weight: 0,
        type: [],
    })
    
    useEffect(()=>{
    dispatch(getAllTypes())
    },[dispatch])
    
    function handleChange(e){
        
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })}

    function handleSelect(e){
      
        setInput({
            ...input,
            type: [...input.type, e.target.name]
        })}
        
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createPkmn(input))
        alert('Se ha creado tu Pokemon')
        setInput({
            name:'',
            image:'',
            life: 0,
            strength:0,
            defense: 0,
            velocity: 0,
            height: 0,
            weight: 0,
            type: [],

        })
       
        }
    
    
    
    return(
        <div>
            <div>
                <Link to='/home'>
                    <button>Volver</button>
                </Link>
            </div>
             <div>
                <h1>Crear Pokemon!</h1>
            </div>

            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div>
                <div>
                     <label>Nombre  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'text' 
                      value= {input.name} name= 'name'/>   
                </div>

                <div>
                     <label>Imagen  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'text'  
                     value= {input.image} name= 'image'/>
                </div>

                <div>
                     <label>Vida  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.life} name= 'life'/>
                </div>

                <div>
                     <label>Ataque </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.strength} name= 'strength'/>
                </div>

                <div>
                     <label>Defensa  </label>
                     <input 
                     type= 'number'  
                     value= {input.defense} 
                     name= 'defense'
                     onChange={(e)=>{handleChange(e)}}/>
                </div>

                <div>
                     <label>Velocidad  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.velocity} name= 'velocity'/>
                </div>


                <div>
                     <label>Altura  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'
                     value= {input.height} name= 'height'/>
                </div>
                
                <div>
                     <label>Peso  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.weight} name= 'weight'/>
                </div>
                
                <div>
                     <label>Tipos </label>
                     <select onChange={(e)=>{handleSelect(e)}}>
                     {
                         types.map(t=>{
                             return(
                                 <option value={t.id}>{t.name}</option>
                              )
                              })
                     }

                     </select>
                </div> 
            
            </div>
                <div>
                     <button type='submit'>CREAR! </button>
                </div>
            </form>
        </div>
    )
}