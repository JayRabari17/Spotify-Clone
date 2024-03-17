import {Icon} from '@iconify/react'
import TextInput from '../components/shared/text_input'
import PasswordInput from '../components/shared/password_input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';
import {useCookies} from 'react-cookie';

const SignupComponent = ()=>{
    const [email,setEmail] = useState("")
    const [conf_email,setconf_Email] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [username,setUsername] = useState("")

    const [cookie,setCookie] = useCookies(['token']);

    const navigate = useNavigate();

    // console.log(email)
    const signUp=async ()=>{
        if(email!==conf_email){
            alert("Both emails are not matching!");
            return;
        }
        const data = {email,password,username,firstname: firstName,lastname: lastName};
        // console.log(data);
        const response = await makeUnauthenticatedPOSTRequest("/auth/register",data);
        if(response && !response.error){
            //successful
            console.log(response);
            const token = response.token;
            const date = new Date();
            //for 10 days
            date.setDate(date.getDate()+10);
            setCookie("token",token,{path:'/',expires:date})
            // alert("Success");
            navigate('/home')
        }
        else{ 
            alert("Failure") 
        }
    }
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 bg-gray-900 w-full flex justify-center h-1/8">
            <Icon icon="el:spotify" width="50"/>
            </div>
            <div className='w-full flex justify-center bg-black bg-opacity-50 overflow-auto'>

            <div className="InputRegion w-1/3 p-10 flex flex-col items-center justify-center mt-12">

                <div className='font-bold text-2xl pt-10'>Sign up for free to start listening</div>

                <TextInput label="Email Address " placeholder="Enter email address" value={email} setValue={setEmail} className = "mt-5 py-2"/>

                <TextInput label="Confirm your Email Address" placeholder="Enter email address" value={conf_email} setValue={setconf_Email} className = "py-2"/>

                <PasswordInput label="Create Password" placeholder="Enter a strong password" value={password} setValue={setPassword} className = "py-2"/>

                <div className='flex space-x-12'>  
                <TextInput label="First Name" placeholder="Enter your first name" value={firstName} setValue={setfirstName}className = "py-2"/>

                <TextInput label="Last Name" placeholder="Enter your last name" value={lastName} setValue={setlastName}className = "py-2"/>
                </div>

                <TextInput label="What should we call you?" placeholder="Enter your username" value={username} setValue={setUsername}className = "py-2"/>

                <div className='w-full flex items-center justify-center mt-3'>
                <button className='text-gray-500 border border-gray-400 font-semibold p-3 px-6 rounded-full hover:bg-white' 
                        onClick={e=>{e.preventDefault(); signUp()}}>SIGN UP</button>
                </div>
                <div className='w-full border-b border-solid border-white mt-10'></div>
                <div className='font-semibold mt-5 mb-6'>Already have an account?</div>
                 {/* Using link instead of a href to improve efficiency */}
                <Link to='/login'>
                <button className='hover:bg-white font-semibold p-3 px-6 rounded-full border border-solid border-gray-400 text-gray-500 w-full'>
                LOG IN
                </button>
                </Link>

            </div>
            </div>
        </div>
        
    );
}

export default SignupComponent;