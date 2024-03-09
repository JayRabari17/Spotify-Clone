const express = require('express');
const router = express.Router();
const song = require('../models/song');
const user = require('../models/user');


router.post('/create', 
    async (req,res,next)=>{
        const {name,thumbnail,track} = req.body;
        // console.log(req.user.profile)
        
        if(!name || !thumbnail || !track){
            return res.status(301).json({err: "Insufficient data!"});
        }

        const artist = req.user._id;
        // console.log(artist);

        const songDetails = {name,thumbnail,track,artist};

        checkforExistingSong = await song.findOne({name:name, thumbnail:thumbnail, artist})
        if(checkforExistingSong){
                //commonly 4.. code used for authentication errors
                return res.status(403).json({error:"A song already exists!"});
        }

        const songCreated  = await song.create(songDetails);

        return res.status(200).json(songCreated);
});


router.get('/get/mysongs',
    async (req,res)=>{
        const currentUser = req.user;
        //we need to get all songs whose artist id = user id
        const songs = await song.find({artist:currentUser._id});
        return res.status(200).json({data:songs})
});


router.get('/get/artist-song',async (req,res)=>{
    const {firstname,lastname} = req.body;
    
    const artist = await user.findOne({firstname,lastname})
    // console.log(artist._id)
    const songs_by_artist = await song.find({artist:artist._id})

    return res.status(200).json({data:songs_by_artist})
})

router.get('/get/song',async (req,res)=>{
    const {name} = req.body;

    const songs_searched = await song.find({name})

    return res.status(200).json({data:songs_searched})
})


module.exports = router;