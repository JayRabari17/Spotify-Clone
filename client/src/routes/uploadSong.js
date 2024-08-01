import {Icon} from '@iconify/react'
import IconText from '../components/shared/icontext';
import { Link } from 'react-router-dom';
import TextInput from '../components/shared/text_input';
import CloudinaryUploadWidget from '../utils/cloudinaryService';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
import LoggedInComponent from '../containers/loggedinComponent';


const UploadSong = ()=>{

    const [name,setName] = useState("")
    const [thumbnail,setThumbnail] = useState("")
    const [songUrl, setSongUrl] = useState("")
    const [uploadedSongName,setUploadedSongName] = useState("")
    const submitSong = async ()=>{
        const data = {name, thumbnail, track:songUrl}
        const response = await makeAuthenticatedPOSTRequest('/song/create',data);
        console.log(response)
    }
    return (
            <LoggedInComponent>

            <div className='rightbody h-full'>
                <div className='upload-area text-white w-full h-9/10 flex flex-col p-5'> 
                <div className='font-bold text-xl mb-7'>Upload Song</div>
                <div className='flex flex-col items-center justify-center'>
                <div className="flex space-x-3 w-1/2">    
                    <TextInput label="Song Name" placeholder={"Enter Song Name"} value={name} setValue={setName}/>
                    <TextInput label={"Song Thumbnail"} placeholder="Enter Thumbnail" value={thumbnail} setValue={setThumbnail}/>
                </div>
                <div className='p-5' id='submit-area'>
                { 
                    uploadedSongName ? (
                        <div className='font-bold mt-5 mb-3 text-white'>
                                Your uploaded Song is:
                        <div className='cursor-pointer text-gray-200 hover:text-white font-normal'>
                            {uploadedSongName}
                        </div>
                        </div>
                        ):(
                    <div className='upload-area'>
                        <div className='text-white font-bold m-4 mb-7'> 
                            Upload your song
                        </div>
                    <CloudinaryUploadWidget setUrl={setSongUrl} setName={setUploadedSongName}/> 
                    </div>
                )}
                <div className="flex items-center justify-center mt-12">
                <button className='text-gray-500 border border-gray-400 font-semibold p-3 px-6 rounded-full hover:bg-white cursor-pointer'
                        onClick={e=>{e.preventDefault(); submitSong(); alert('Song Uploaded')}}>Submit</button>
                </div>
                </div>
                </div>
                </div>
            </div>
                        </LoggedInComponent>
    )
}


export default UploadSong;