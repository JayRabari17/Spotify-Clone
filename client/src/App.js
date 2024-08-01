// import logo from './logo.svg';
// import './App.css';
import './output.css';
import LoginComponent from './routes/login';
import SignupComponent from './routes/signup';
import HomeComponent from './routes/home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoggedInHomeComponent from './routes/loggedinHome';
import UploadSong from './routes/uploadSong';
import MyMusic from './routes/myMusic';
import { useState } from 'react';
import songContext from './contexts/songContext';

function App() {
  const [cookie,setCookie] = useCookies(["token"])
  const [currentSong, setCurrentSong] = useState(null)
  const [soundPlayed, setsoundPlayed] = useState(null)
  const [isPaused, setIsPaused] = useState(null)
    // console.log(window.cloudinary)

  return (
    <div className="bg-gray-800 text-white font-poppins w-screen h-screen">
      <BrowserRouter>
      {/* if cookie.token exist then login and signup should not open */}
        {cookie.token!=null ? (
          <songContext.Provider value={{currentSong, setCurrentSong, soundPlayed, setsoundPlayed, isPaused, setIsPaused}}>

          <Routes> {/*This component indicates to package react-router-dom that we are starting to define our routes inside this*/}
          {/* <Route path='/' element={<HelloComponent/>}/> */}
          <Route path='/home' element = {<LoggedInHomeComponent/>}/>
          <Route path='/uploadSong' element = {<UploadSong/>}/>
          <Route path='/mymusic' element = {<MyMusic/>}/>
          <Route path='*' element = {<Navigate to="/home"/>}/>
          </Routes>

          </songContext.Provider>
        ):(
          <Routes>
          <Route path='/login' element = {<LoginComponent/>}/>
          <Route path='/signup' element = {<SignupComponent/>}/>
          <Route path='/home' element = {<HomeComponent/>}/>
          <Route path='*' element = {<Navigate to="/login"/>}/>
          </Routes>
        )
        }
      </BrowserRouter>
    </div>
  );
}

// const HelloComponent = ()=>{
//   return <div>Hello from component!</div>
//}

export default App;
