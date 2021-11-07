const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const {tourismModel}=require('./model')

let app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET','POST');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials',true)
  next()
})

mongoose.connect("mongodb+srv://Anjali:Anjali@cluster0.axhkf.mongodb.net/tourismDatabase?retryWrites=true&w=majority")

app.get('/',(req,res)=>{
    res.send("Welcome to API")
})
app.post('/addmovie',async(req,res)=>{
  try{ 
    console.log(req.body)
    let movie=new movieModel(req.body)
    let result=await movie.save()
    res.json(result)
  }
  catch{
      res.status(500).send(error)
  }
})
app.get('/viewmovie',async(req,res)=>{
    try{ 
      
      var result=await movieModel.find()
      res.json(result)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
  })
  app.post('/delete',async(req,res)=>{
      try{
            var result=await movieModel.findByIdAndDelete(req.body)
            res.json({"status":"Successfully deleted"})
      }
      catch(error)
      {
        res.status(500).send(error)
      }
  })
  app.post('/update',async(req,res)=>{
    try{
          var result=await movieModel.findByIdAndUpdate(req.body._id,req.body)
          res.json({"status":"Successfully updated"})
    }
    catch(error)
    {
      res.status(500).send(error)
    }
})
app.post('/search',async(req,res)=>{
  try{
      var result=await movieModel.find(req.body)
      res.json(result)
  }
  catch(error){
    res.status(500).send(error)

  }
})



app.listen(8080,()=>{
    console.log("Running");
})