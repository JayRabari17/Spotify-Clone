const mongoose = require('mongoose')
//structure of user db/collection is schema
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        private:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    //modifications can be done afterwards
    likedSongs:{
        //should be array
        type:String,
        default:""
    },
    // token:{
    //     type:String,
    //     default:""
    // }

});

const userModel = mongoose.model("User",userSchema);

module.exports = userModel;