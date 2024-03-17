import {Icon} from '@iconify/react'
import TextInput from '../components/shared/text_input'
import PasswordInput from '../components/shared/password_input';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';


const LoginComponent = ()=>{

        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
    
        const [cookie,setCookie] = useCookies(['token']);
    
        const navigate = useNavigate();
        
        // console.log(email)
        const logIn=async ()=>{
            const data = {email,password};
            // console.log(data);
            const response = await makeUnauthenticatedPOSTRequest("/auth/login",data);
            if(response && !response.error){
                //successful
                console.log(response);
                const token = response.token;
                const date = new Date();
                //for 10 days
                date.setDate(date.getDate()+10);
                setCookie("token",token,{path:'/',expires:date})
                // alert("Success");
                navigate('/home');
            }
            else{ 
                alert("Failure") 
            }
        }

    return (
        <div className="w-full h-full flex flex-col items-center bg-black bg-opacity-50">
            <div className="logo p-5 border-b border-solid border-gray-200 bg-gray-900 w-full flex justify-center h/8">
            <Icon icon="el:spotify" width="50"/>
            </div>

            <div className="InputRegion w-1/3 py-10 flex flex-col items-center justify-center h-7/8">

                <div className='font-bold text-lg mt-5 mb-12'>To continue, login into app</div>

                <TextInput label="Email Address OR Username" placeholder="Enter email address or username" value = {email} setValue={setEmail} className = "py-2"/>

                <PasswordInput label="Password" placeholder="Enter password" value = {password} setValue={setPassword} className = "py-2"/>

                <div className='w-full flex items-center justify-end mt-3'>
                <button className='text-gray-500 border border-gray-400 font-semibold p-3 px-6 rounded-full hover:bg-white' 
                        onClick={e=>{e.preventDefault(); logIn();}}>LOG IN</button>
                </div>
                <div className='w-full border-b border-solid border-white mt-10'></div>
                <div className='font-semibold mt-5 mb-7'>Don't have an account?</div>
                <Link to='/signup'>
                <button className='hover:bg-white font-semibold p-3 px-6 rounded-full border border-solid border-gray-400 text-gray-500 w-full'>
                SIGN UP FOR SPOTIFY
                </button>
                </Link>
            </div>
        </div>
        
    );
}

export default LoginComponent;