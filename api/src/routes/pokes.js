const axios = require('axios')
const {Pokemon, Types} = require('../db')
const {API_KEY} = process.env;




const getApipkmns = async()=> {


        const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const res2 = await axios.get(res.data.next)
        const data = res.data.results.concat(res2.data.results)
        const pkmns = await Promise.all(data.map(async (obj)=>{
            let p = await axios(obj.url)
          
            
            return {
                id: p.data.id,
                image: p.data.sprites.other.home.front_default,
                types: p.data.types.map(t=> t.type.name),
                name: p.data.name,
                life: p.data.stats[0].base_stat,
                strength: p.data.stats[1].base_stat,
                defense: p.data.stats[2].base_stat,
                velocity: p.data.stats[5].base_stat,
                height: p.data.height,
                weight: p.data.weight
            }
            

    }))
         return pkmns
     }
   
    
const getDbpkmns = async () => {
    const data = await Pokemon.findAll({
        includes:{
            model: Types,
            attributes: ["name"],
            throws:{
                attributes: [],
            },
       }
   })
   return data
}
const getAllPkmns = async () => {
    let data1 = await getApipkmns()
    let data2 = await getDbpkmns()
    let allData = data1.concat(data2)
    return allData

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getPoke = async(name)=>{
    const p = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if(p){
    const pokemon = {
        id: p.data.id,
        image: p.data.sprites.other.home.front_default,
        name: p.data.name,
        life: p.data.stats[0].base_stat,
        strength: p.data.stats[1].base_stat,
        defense: p.data.stats[2].base_stat,
        velocity: p.data.stats[5].base_stat,
        height: p.data.height,
        weight: p.data.weight,
        type: p.data.types.map(t=> t.type.name),
    }
    return [pokemon]

}}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    

    module.exports = {
        getAllPkmns,
        getPoke,
    

        }