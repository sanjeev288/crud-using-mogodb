const mangoose =request'mangoose')
const alienSchema=new mangoose.Schema({
    name:{
        type:String,
        requested: true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        requested:true
    
    }

}