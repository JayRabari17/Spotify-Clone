import {Icon} from '@iconify/react'
import IconText from '../components/shared/icontext';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import {Howl, Howler} from 'howler';
import songContext from '../contexts/songContext';


const LoggedInComponent = ({children, activePage})=>{

    // const [songData,setsongData] = useState([])
    const {currentSong, setCurrentSong, soundPlayed, setsoundPlayed, isPaused, setIsPaused} = useContext(songContext)

    // console.log(currentSong)
    const firstimeUpdate = useRef(true);
    useEffect(()=>{
        //if it is rendered first time then do no start song automatically
        if(firstimeUpdate.current){
            //.current is necessary
            firstimeUpdate.current = false;
            return;
        }
        // console.log("hello")
        if(!currentSong) return;
        changeSound(currentSong.track)
    },[currentSong])
    //if current song changes then use effect gets called automatically and performs callback function

    const changeSound = (src)=>{
        if(soundPlayed) soundPlayed.stop()
        let sound = new Howl({
            src: [src],
            html5: true
        });
        setsoundPlayed(sound);
        sound.play();
        setIsPaused(false);
        // console.log(sound)
    }

    const playSound = ()=>{
        if(!soundPlayed) return;
        soundPlayed.play()
    }
    const pauseSound = ()=>{
        soundPlayed.pause();
    }
    
    const playPauseToggle = ()=>{
        if(isPaused){
            playSound(currentSong.track)
            setIsPaused(false)
        }
        else{
            pauseSound()
            setIsPaused(true)
        }
    }

    return(
    <div className='h-full w-full'>
            <div className={`${currentSong? 'h-9/10': 'h-full'} flex`}>
            <div className='leftpanel h-full bg-black w-1/5'>
            <div className="logo p-4 pb-4 border-b border-solid border-gray-200 w-full flex justify-center">
            <Link to='/home'> <Icon icon="el:spotify" width="40"/> </Link>
            </div>
            <div className='mt-8'><IconText iconName="ic:round-home" displayText="Home" targetLink='/home' 
            active={activePage==='home'?true:false}/></div>
            <div className='mt-5'><IconText iconName="ic:round-search" displayText="Search"/></div>
            <div className='mt-5'><IconText iconName="fluent-mdl2:library" displayText="Library"/></div>
             <div className='mt-5'><IconText iconName="fluent-mdl2:library" displayText="My Music" targetLink='/mymusic' 
             active={activePage==='mymusic'?true:false}/></div> 
            <div className='mt-12'><IconText iconName="material-symbols:add-box" displayText="Create Playlist"/></div>
            <div className='mt-5'><IconText iconName="icon-park-solid:like" displayText="Liked Songs"/></div>
            </div>
            <div className='rightbody h-full w-4/5'>
            <div className='navbar w-full h-1/10 bg-gray-900 flex items-center justify-end pr-10'>
                {/* <Link to='/signup'><div className='text-gray-400 hover:text-white cursor-pointer'> Upload Song</div></Link> */}
                <div className='login-button ml-4 p-6 bg-white flex items-center justify-center h-1/2 rounded-full cursor-pointer'>
                {/* <Link to='/login'>*/}
                <div className='text-gray-600 hover:text-black font-semibold'>User</div> 
                </div>
                </div>
                {children}
                </div>
            </div>
              {/*Bottom play song area*/}
            { currentSong&&
            <div className='h-1/10 w-full bg-black opacity-55 flex px-4 py-2'>
            <img src={currentSong.thumbnail}
                className='w-12 h-12 rounded-sm cursor-pointer'/>
            <div className='flex-col px-3 w-1/3'>
                <div className='hover:underline cursor-pointer'>{currentSong.name}</div>
                <div className='hover:underline cursor-pointer'>{currentSong.artist}</div>
            </div>
            <div className='w-1/3 flex-col justify-center items-center h-full'>
                <div className='flex justify-center'>

                <div className='flex items-center justify-around w-1/3 h-2/3'>
                    {/* For icons */}
                    <Icon icon="ic:round-skip-previous" className="cursor-pointer" fontSize={20}/>
                    <Icon icon={isPaused?'icon-park-solid:play':'ic:baseline-pause-circle'} className="cursor-pointer" fontSize={30} 
                    onClick={playPauseToggle}/>
                    <Icon icon="ic:round-skip-next" className="cursor-pointer" fontSize={20}/>
                </div>
                </div>
                <div className='flex justify-center h-1/3'>
                    {/* For bar */}
                    Bar
                </div>
            </div>
            <div className='w-1/3 flex justify-end'>Volume</div>
            </div>
        }
        </div>
    )
}

export default LoggedInComponent;