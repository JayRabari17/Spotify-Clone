// import logo from './logo.svg';
// import './App.css';
import './output.css';
import LoginComponent from './routes/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes> {/*This component indicates to package react-router-dom that we are starting to define our routes inside this*/}
          <Route path='/' 
          element={<HelloComponent/>}
          />
          <Route path='/login' element = {<LoginComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = ()=>{
  return <div>Hello from component!</div>
}

export default App;
