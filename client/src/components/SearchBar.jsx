import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {getPkmnByName} from '../actions'



export default function SearchBar(){
    const dispatch = useDispatch();
    const [input,setInput] = useState('')

    function handleChange(e){
        e.preventDefault();
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getPkmnByName(input))
        setInput('')
    }
   
    return(
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}} >
                <button type="submit">Buscar</button>
                <input value={input} onChange={(e)=>{handleChange(e)}} placeholder='Que Pokemon buscas...'/>
            </form>
        </div>
    )
}