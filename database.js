

const mongoose=require('mongoose');

const connectMongo=()=>{


    mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("connected mongodb")

        })
        .catch((err)=>{
            console.log(err)
        })

    }
module.exports=connectMongo;    