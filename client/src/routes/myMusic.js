// import {Icon} from '@iconify/react'
// import IconText from '../components/shared/icontext';
// import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
// import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
// import {Howl, Howler} from 'howler';
import SingleSongCard from '../components/shared/singleSongCard';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
// import songContext from '../contexts/songContext';
import LoggedInComponent from '../containers/loggedinComponent';


const MyMusic = ()=>{

    // const songData = [
    //     {
    //         thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaOMHBgC4PT1UCipCsyc0tKYoWEx7s3uyrQ&usqp=CAU",
    //         name: "Tera Chehra",
    //         artist: "Arijit Singh"
    //     },
    //     {
    //         thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaOMHBgC4PT1UCipCsyc0tKYoWEx7s3uyrQ&usqp=CAU",
    //         name: "Tera Chehra",
    //         artist: "Arijit Singh"
    //     },
    //     {
    //         thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaOMHBgC4PT1UCipCsyc0tKYoWEx7s3uyrQ&usqp=CAU",
    //         name: "Tera Chehra",
    //         artist: "Arijit Singh"
    //     },
    //     {
    //         thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaOMHBgC4PT1UCipCsyc0tKYoWEx7s3uyrQ&usqp=CAU",
    //         name: "Tera Chehra",
    //         artist: "Arijit Singh"
    //     },
    //     {
    //         thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaOMHBgC4PT1UCipCsyc0tKYoWEx7s3uyrQ&usqp=CAU",
    //         name: "Tera Chehra",
    //         artist: "Arijit Singh"
    //     }
    // ]
    const [songData,setsongData] = useState([])
    // const [soundPlayed, setsoundPlayed] = useState(null)
    // const {currentSong, setCurrentSong} = useContext(songContext)

    // console.log(currentSong)
    // const playSound = (songsrc)=>{
    //     if(soundPlayed) soundPlayed.stop()
    //     let sound = new Howl({
    //         src: [songsrc],
    //         html5: true
    //     });
    //     setsoundPlayed(sound);
    //     sound.play();
    //     console.log(sound)
    // }
    
    useEffect(()=>{
        //fetch data
        //cant use async with useEffect
        const getData = async ()=>{
            const response = await makeAuthenticatedGETRequest('/song/get/mysongs');
            const fr = response.data
            //iterating through whole data as we cant iterate on response directly bcz it contains another object of User type 
            setsongData( fr.map((rdata)=>{
                const songData = {
                    name: rdata.name,
                    thumbnail: rdata.thumbnail,
                    artist: rdata.artist.firstname + " " + rdata.artist.lastname,
                    track:rdata.track
                }
                console.log(rdata.track)
                return songData
            })
        )
        }
        getData();
        
    },[]);

    return (
        <LoggedInComponent>
                <div className='song-area text-white w-full h-9/10 flex flex-col p-5'> 
                    <div className='songlist-area h-9/10'>
                    <div className='font-bold text-lg pl-4 p-3'>My Music</div>
                    <div className='space-y-3 overflow-auto'>
                    {
                        songData.map((data=>{
                            return <SingleSongCard info={data} playSound={()=>{}}/>   
                        }))
                    }
                    </div>
                    </div>
                </div>
            </LoggedInComponent>

    )
}


export default MyMusic;