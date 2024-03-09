const mongoose = require('mongoose')

const playlistschema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    coverimage:{
        //as it will contain only link of photo
        type:String,
        required:true
    },
     owner:{
        type: mongoose.Types.ObjectId,
        ref:"user"
    },
    songs:[
        {
        //will contain actual song file as link
      type: mongoose.Types.ObjectId,
      ref:"song"
    }
    ],
    //collaborators to add afterwards
});

const playlistmodel = mongoose.model("Playlist",playlistschema);

module.exports = playlistmodel;