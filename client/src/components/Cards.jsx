import { useState } from "react"
import { Link } from "react-router-dom"



export default function Cards({pokemon}) {
    const [btn,setBtn] = useState(0)
    
   

    return(
        <div >
            
                <div>
                    <Link to='/home'>
                        <button>
                            <h1>VOLVER AL INICIO</h1>
                        </button>
                    </Link>
                </div>

                <div>
                    <h1>{pokemon.name}</h1>
                </div>
         

           </div>
           
                  
    )
}