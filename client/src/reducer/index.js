const initialState = {

    types: [],
    pokemons: [],
    pkmns: [],
    pokemon:[],
    
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        
        case 'GET_ALL_POKEMONS':
        return {
            ...state,
            pokemons: action.payload,
            pkmns: [ ...action.payload]
        }
        case 'GET_ALL_TYPES':
        return {
            ...state,
            types: action.payload
        }
        
        case 'GET_PKMNS_BY_NAME':
            return{
                ...state,
                pkmns: action.payload
            } 

        case 'GET_PKMNID':
            return{
                ...state,
                pokemon: action.payload,
            } 

         case 'FILTER_CREATED':
                let allPokemons;
                if(action.payload === 'all'){
                allPokemons = [...state.pokemons]
            }else if(action.payload === 'created'){
                allPokemons= state.pokemons.filter(e => e.create) 
                
            }else if(action.payload === 'api'){
                allPokemons= state.pokemons.filter(e => !e.create) 
                
            }return {
                    ...state,
                    pkmns: allPokemons
                }
            
            
        case 'FILTER_BY_TYPES':
            let newPkmnsByType;
            if(action.payload === 'all'){
                newPkmnsByType = [...state.pokemons]
            }else{
            newPkmnsByType = state.pokemons.filter(t=> t.types && (t.types.name === action.payload || t.types.includes(action.payload)))
            }
            return{
                ...state,
                pkmns: newPkmnsByType
            }


        case 'ORDER_PKMNS_ALPHA':
                 let newPkmnsAlpha= state.pkmns;
                 if(action.payload === 'defect'){
                    newPkmnsAlpha= state.pokemons.map(pk=>{
                         let result
                        state.pkmns.map(p=>{
                            if(pk.name === p.name) result = p
                        })
                        return result
                    })
                }else if(action.payload === 'ascendingA'){
                   newPkmnsAlpha= state.pkmns.sort((a,b)=>{
                        if(a.name < b.name) return -1;
                        if(a.name > b.name) return 1;
                        return 0;
                    })
                }else if(action.payload === 'descendingA'){
                    newPkmnsAlpha= state.pkmns.sort((a,b)=>{
                        if(a.name < b.name) return 1;
                        if(a.name > b.name) return -1;
                        return 0;
                    })
                 } return{
                        ...state,
                        pkmns: newPkmnsAlpha

                 }
        case 'ORDER_PKMNS_STR':
                    let newPkmnsStr= state.pkmns;
                if(action.payload === 'defect'){
                    newPkmnsStr= state.pokemons.map(pk=>{
                         let result
                        state.pkmns.map(p=>{
                            if(pk.strength === p.strength) result = p
                        })
                        return result
                    })
                }else if(action.payload === 'ascendingB'){
                    newPkmnsStr= state.pkmns.sort((a,b)=>{
                        if(a.strength < b.strength) return -1;
                        if(a.strength > b.strength) return 1;
                        return 0;
                    })
                }else if(action.payload === 'descendingB'){
                    newPkmnsStr= state.pkmns.sort((a,b)=>{
                        if(a.strength < b.strength) return 1;
                        if(a.strength > b.strength) return -1;
                        return 0;
                    })

                } return{
                    ...state,
                    pkmns: newPkmnsStr
                
            }
        case 'CREATE_PKMN':
                    return{
                        ...state,
                        pokemons: [action.payload, ...state.pokemons]

                    }
        default: 
                return state

}
}