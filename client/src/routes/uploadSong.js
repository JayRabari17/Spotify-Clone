import {Icon} from '@iconify/react'
import IconText from '../components/shared/icontext';
import { Link } from 'react-router-dom';
import TextInput from '../components/shared/text_input';
import CloudinaryUploadWidget from '../utils/cloudinaryService';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';


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
        <div className='flex h-full w-full'>
            <div className='leftpanel h-full bg-black w-1/5'>
            <div className="logo p-4 pb-4 border-b border-solid border-gray-200 w-full flex justify-center">
            <Icon icon="el:spotify" width="40"/>
            </div>
            <div className='mt-8'><IconText iconName="ic:round-home" displayText="Home" active/></div>
            <div className='mt-5'><IconText iconName="ic:round-search" displayText="Search"/></div>
            <div className='mt-5'><IconText iconName="fluent-mdl2:library" displayText="Library"/></div>
            <div className='mt-12'><IconText iconName="material-symbols:add-box" displayText="Create Playlist"/></div>
            <div className='mt-5'><IconText iconName="icon-park-solid:like" displayText="Liked Songs"/></div>
            </div>
            <div className='rightbody h-full w-4/5'>
            <div className='navbar w-full h-1/10 bg-gray-900 flex items-center justify-end pr-10'>
                <Link to='/signup'><div className='text-gray-400 hover:text-white cursor-pointer'> Upload Song</div></Link>
                <div className='login-button ml-4 p-6 bg-white flex items-center justify-center h-1/2 rounded-full cursor-pointer'>
                {/* <Link to='/login'>*/}
                <div className='text-gray-600 hover:text-black font-semibold'>User</div> 
                </div>
                </div>
                <div className='upload-area text-white w-full h-9/10 flex flex-col p-5'> 
                <div className='font-bold text-xl mb-7'>Upload Song</div>
                <div className='flex flex-col items-center justify-center'>
                <div className="flex space-x-3 w-1/2">    
                    <TextInput label="Song Name" placeholder={"Enter Song Name"} value={name} setValue={setName}/>
                    <TextInput label={"Song Thumbnail"} placeholder="Enter Thumbnail" value={thumbnail} setValue={setThumbnail}/>
                </div>
                <div className='p-5'>
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
                        onClick={e=>{e.preventDefault(); submitSong()}}>Submit</button>
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
    )
}


export default UploadSong;