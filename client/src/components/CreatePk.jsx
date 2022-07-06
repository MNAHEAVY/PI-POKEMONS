import {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {createPkmn,getAllTypes} from "../actions"
import './Styles/Create.css'

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
        <div id="container-createpokemon">
            <div id='cont-btn-home'>
                <Link to='/home'>
                    <button>Volver</button>
                </Link>
            </div>
             <div id='cont-title-form'>
                <h1>Crear Pokemon</h1>
            </div>

            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div id='form-cont-left'>

                <div id='input-name' className='form-inputs'>
                     <label>Nombre  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'text' 
                      value= {input.name} name= 'name'/>   
                </div>

                <div id='input-name' className='form-inputs'>
                     <label>Imagen  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'text'  
                     value= {input.image} name= 'image'/>
                </div>

                <div id='input-name' className='form-inputs'>
                     <label>Vida  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.life} name= 'life'/>
                </div>

                <div id='input-name' className='form-inputs'>
                     <label>Ataque </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.strength} name= 'strength'/>
                </div>

                <div id='input-name' className='form-inputs'>
                     <label>Defensa  </label>
                     <input 
                     type= 'number'  
                     value= {input.defense} 
                     name= 'defense'
                     onChange={(e)=>{handleChange(e)}}/>
                </div>

                <div id='input-name' className='form-inputs'>
                     <label>Velocidad  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.velocity} name= 'velocity'/>
                </div>


                <div id='input-name' className='form-inputs'>
                     <label>Altura  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'
                     value= {input.height} name= 'height'/>
                </div>
                
                <div id='input-name' className='form-inputs'>
                     <label>Peso  </label>
                     <input onChange={(e)=>{handleChange(e)}} type= 'number'  
                     value= {input.weight} name= 'weight'/>
                </div>
                
                <div id='select-ts' className='form-inputs'>
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
                <div id='cont-btn-submit'>
                     <button type='submit'>CREAR! </button>
                </div>
            </form>
        </div>
    )
}