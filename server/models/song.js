const mongoose = require('mongoose')

const songschema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    thumbnail:{
        //as it will contain only link of photo
        type:String,
        required:true
    },
    track:{
        //will contain actual song file as link
        type:String,
        required:true
    },
    artist:{
        type: mongoose.Types.ObjectId,
        ref:"user"
    }
});

const songmodel = mongoose.model("Song",songschema);

module.exports = songmodel;