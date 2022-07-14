import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {getPkmnByName} from '../actions'
import './Styles/SearchBar.css'
import s from './Images/pokeball_PNG23.png'



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
        <div className="cont-searchbar">
            <form  onSubmit={(e)=>{handleSubmit(e)}} >
                <button type="submit"><img src={s} width= '40px'height='40px' /></button>
                <input value={input} onChange={(e)=>{handleChange(e)}} placeholder='Que Pokemon buscas...'/>
            </form>
        </div>
    )
}