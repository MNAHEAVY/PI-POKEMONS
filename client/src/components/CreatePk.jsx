import {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {createPkmn,getAllTypes} from "../actions"
import './Styles/Create.css'

export default function CreatePkmn(){
    const dispatch = useDispatch()
    const types = useSelector(store => store.types)
    const [error,setError] = useState({})
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
    

    function validate(input){
        let error = {}
        if(input.name.length <= 0 && !input.name.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)){
            error.name = 'Solo letras!                                                                                                                                                                                          '
        }else error.name = null
        if(input.image.length <= 0 && !input.image.match(/^(ftp|http|https):\/\/[^ "]+$/)){
            error.image = 'Coloca la URL de la imagen'
        }else error.image = null
        return error}
    
    
        function handleChange(e){
            setInput({
                ...input,
                [e.target.name] : e.target.value
            })
            setError(validate({
                ...input,
                [e.target.name] : e.target.value
            }))
        } 

    function handleSelect(e){
      
        setInput({
            ...input,
            type: [...input.type, e.target.name]
        })}
        
    function handleSubmit(e){
        e.preventDefault();
        if(error.name === null && error.image === null){
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
            create: true,
            type: [],

        })
    }else{
        alert('Arregla los errores marcados y completa los espacios requeridos')
    }
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
                     <input 
                      type= 'text' 
                      value= {input.name} name= 'name' 
                      onChange={(e)=>{handleChange(e)}}/>
                       {error.name&& (
                            <p>{error.name}</p>
                        )}
                      
                </div>

                <div id='input-name' className='form-inputs'>
                     <label>Imagen  </label>
                     <input 
                     type= 'text'  
                     value= {input.image} name= 'image'
                     onChange={(e)=>{handleChange(e)}}/>
                      {error.image&& (
                            <p>{error.image}</p>
                        )}
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
                     <label>Guardar </label>
                     <select onChange={(e)=>{handleSelect(e)}}>
                    <option value="true"> si</option>
                    <option value="false"> no</option>
                    </select>
                   
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