import axios from 'axios'


export function getAllPokemons(){
    return async function(dispatch){

        const res = await axios.get('/')
        dispatch({
            type: 'GET_ALL_POKEMONS',
            payload: res.data
        })
    }}

export function getPkmnsById(id){
    return async function(dispatch){

        const res = await axios.get(`/pokemons/${id}`)
        console.log(res.data)
        dispatch({
            type: 'GET_PKMNID',
            payload: res.data
        })
    }

}
export function getAllTypes(){
        return async function(dispatch){
    
            const res = await axios.get('/types')
            dispatch({
                type: 'GET_ALL_TYPES',
                payload: res.data
            })
        }
}
export function getPkmnByName(name){
    return async function(dispatch){
        const res =  await axios(`/?name=${name}`)
        console.log(res.data)
        dispatch({
            type: "GET_PKMNS_BY_NAME",
            payload: res.data
        })
    }
}
export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function filterByTypes(payload){
         return{
             type: 'FILTER_BY_TYPES',
             payload
         }
}

export function orderPkmnsAlpha(payload){
         return{        
             type: 'ORDER_PKMNS_ALPHA',
             payload
         }
}
export function orderPkmnsStr(payload){
         return{        
             type: 'ORDER_PKMNS_STR',
             payload
         }
}
    

export function createPkmn(payload){

    return async function(dispatch){
        await axios.post('/',payload)
        
    }}
