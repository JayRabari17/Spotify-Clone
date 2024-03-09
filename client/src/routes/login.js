import {Icon} from '@iconify/react'
import TextInput from '../components/shared/text_input'
import PasswordInput from '../components/shared/password_input';
const LoginComponent = ()=>{
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
            <Icon icon="el:spotify" width="50"/>
            </div>

            <div className="InputRegion w-1/3 py-10 flex flex-col items-center justify-center">

                <div className='font-bold mb-12'>To continue, login into app</div>

                <TextInput label="Email Address OR Username" placeholder="Enter email address or username" className = "py-2"/>

                <PasswordInput label="Password" placeholder="Enter password" className = "py-2"/>

                <div className='w-full flex items-center justify-end mt-3'>
                <button className='bg-green-400 font-semibold p-3 px-6 rounded-full'>LOG IN</button>
                </div>
            <div className='w-full border-b border-solid border-gray-800 mt-10'></div>
            <div className='font-semibold mt-5 mb-7'>Don't have an account?</div>
            <button className='font-semibold p-3 px-6 rounded-full border border-solid border-gray-400 text-gray-500 w-full'>SIGN UP FOR SPOTIFY</button>

            </div>
        </div>
        
    );
}

export default LoginComponent;