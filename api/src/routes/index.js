const axios = require('axios');
const { Router } = require('express');
const {Pokemon, Types} = require('../db')

const {getAllPkmns, getPoke} = require('./pokes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async(req,res,next) => {
    const {name} = req.query;
    console.log(name)
 try{
     const pokemons = await getAllPkmns()
     if(name){
         const pkmnApi= await getPoke(name)
         if(pkmnApi){
             return res.json(pkmnApi)}
         const pkmnDb = Pokemon.findOne(name)
             return res.json(pkmnDb)
             
            }
     res.json(pokemons)
    }
    catch (err) {
        next(err)

    }
})




router.get('/pokemons/:id', async(req, res, next) => {
    const id = req.params.id;
    console.log(id)
    try{
        const pkmns = await getAllPkmns()
        const idPkmns = await pkmns.find(p=> p.id == id)
        res.json(idPkmns)
         
    }catch(err) {
        next(err)
    }
})


router.post('/',async(req, res, next)=>{
    const {image,name,life,strength,defense,velocity,height,weight,create,type} = req.body
    try {
        await Pokemon.create({image,name,life, strength, defense, velocity, height, weight,create})
        if(type && type.length && typeof type === "object") {
            const newPkmn= await Pokemon.findOne({where:{name}});
            type.forEach(async t=>{
                await newPkmn.addTypes(t)
            })
        }
      
        res.send({msg: "Bien hecho! Pokemon creado!!"})
        
    } catch (err) {
        next(err)
        
    }
})


router.get('/types',async(req,res,next) => {
    try { 
        const result = await axios("https://pokeapi.co/api/v2/type")
        const data = result.data.results.map(obj => axios.get(obj.url))
        const typeObj = await Promise.all(data)
        const type = typeObj.map(obj=>{
            

            return{
                id: obj.data.id,
                name: obj.data.name
            }

        })
       

     await type.forEach(t =>{
            Types.findOrCreate({
                where: {name: t.name}
            })
        })
        const AllTypes = await Types.findAll()
        res.json(AllTypes)
    }
    catch (err) {
        next(err)}})


module.exports = router;
