const express = require('express');
const playlist = require('../models/playlist');
const song = require('../models/song');
const router = express.Router();

router.post('/create', async (req,res)=>{
    const currentUser = req.user;
    // console.log(currentUser);
    //adding given songs in body to playlist
    const {name,coverimage,songname} = req.body;

    if(!name || !coverimage || !songname){
        return res.status(301).json({err: "Insufficient data!"});
    }

    //songs = song name to be added in playlist
    const Song = await song.find({name:songname});

    // console.log(Song[1]);
    const playlistData = {name,coverimage,songs: Song,owner:currentUser._id}
    const Playlist = await playlist.create(playlistData)
    return res.status(200).json(Playlist);
});

//:playlistId is variable
router.get('/get/:playlistId',async (req,res)=>{
    const playlistId = req.params.playlistId;
    const Playlist = await playlist.findOne({_id:playlistId})
    if(!Playlist){
        return res.status(301).json({err:"Invalid Playlist Id"});
    }
    return res.status(200).json(Playlist);
})

//finding playlist by artist to be done afterwards
//router.get('/get/artist/:artistId)...

//adding a song to playlist
router.post('/add/song',async(req,res)=>{
    const currentUser = req.user;
    const {playlistname, songname} = req.body;
    //should be done using id instead of name for better searching of correct one
    const Playlist = await playlist.findOne({name:playlistname});

    if(!Playlist){
        return res.status(301).json({err:"Invalid Playlist Name"});
    }

    //also collaborators is neccessary and should be done afterwards
    if(Playlist.owner!=currentUser._id) {
        return res.status(301).json({err:"You are not the owner and can't edit this playlist"});
    }

    const Song = await song.findOne({name:songname});
    
    if(!Song){
        return res.status(301).json({err:"Song doesn't exist"});
    }
    Playlist.songs.push(Song);
    await Playlist.save();
    
    return res.status(200).json(Playlist);
})

module.exports = router