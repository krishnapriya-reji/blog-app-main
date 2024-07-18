const express = require('express');
const router = express.Router();
const posts = require('../model/BlogData');

router.use(express.json()); 
router.get('/blogs', async(req,res)=>{
  try{
    const data= await posts.find();
    res.status(200).send(data)
   } catch (error){
    res.status(400).send('Data not found');
   }
})

//to add blog
router.post('/add' ,async(req,res)=>{
    try{
        const post = req.body;
        const data = await posts(post).save();
        res.status(200).send({message:"blog added"})
        console.log(data)
    } catch(error){
        console.log(error)
    }
})

// //to edit 
// router.put('/edit/:id', async(req,res)=>{
//     try{
//         var item=req.body;
//         const data=await posts.findByIdAndUpdate(req.params.id,item);
//         res.status(200).send({message:'updates succesfully'});
//     }catch(error)
//     {
//         res.status(404).send('update not working');
//     }
// })
module.exports = router;