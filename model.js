const mongoose=require("mongoose")

let MongooseSchema =mongoose.Schema

const tourismSchema=new MongooseSchema(
    {
        fname:String,
        lname:String,
        Email:String,
        password1:String,
        mobileno:Number,
        password2:String,
    
    }
)

var tourismModel=mongoose.model("tourisms",tourismSchema)

module.exports={tourismModel}