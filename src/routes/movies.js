const {Router}=require('express');
const router=new Router();
const _ = require('underscore')
const movies=require('../movies.json');

router.get('/',(req,res)=>{
    res.json(movies);
});
router.post('/',(req,res)=>{
console.log(req.body);
const id = movies.length + 1 ;
const {title,director, year}=req.body;
const newMovie={id,...req.body};
if(title && director && year){
    movies.push(newMovie);
    res.json({"menssage":"Movie Added "});
}else{
    res.json({"menssage":"Error"});

}
//eliminar
});
router.delete('/:id',function(req,res){
    const {id} = req.params;
    if (id){
        _.each(movies,(movie,i)=>{
            if(movie.id == id){
                movies.splice(i,1);
            }
        })
    }
})
router.put('/:id',function(req,res){
    const {id} =req.params;
    const {title,director, year}=req.body;
    if(id && title && director && year){
     _-each(movies,(movie,i)=>{
         if(movie.id ==id){
             movie.title=title;
             movie.director=director;
             movie.year=year;
         }
     })
    }else{
        res.json({'error':'error in teh update'})
    }
})
module.exports=router;
