import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({info,playSound})=>{
    const {currentSong,setCurrentSong} = useContext(songContext);
    // console.log(currentSong)
    return (
        <div className="flex m-3 p-2 hover:text-whit hover:bg-gray-700 opacity-75 rounded-md cursor-pointer" 
        onClick={()=>{playSound(info.track); setCurrentSong(info)}}>
            <div className="w-12 h-12 bg-cover bg-center " 
            style={{backgroundImage : `url("${info.thumbnail}")`}}>
            </div>

            <div className="flex w-full">
            <div className="pl-2 text-white w-5/6">
                <div className="mb-1 hover:underline">{info.name}</div>
                <div className="text-xs hover:underline">{info.artist}</div>
            </div>
            <div className="w-1/6 flex items-center justify-center">4:21
            <div className="flex items-center justify-center ml-3 mb-2">...</div>
            </div>
            </div>
        </div>
    )
}

export default SingleSongCard;