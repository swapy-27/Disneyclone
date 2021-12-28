import {BrowserRouter as Router , Route, Routes  } from "react-router-dom";
import './App.css';
import  Switch from 'react-switch'; 
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Header from "./components/Header";
function App() {
  return (
    <div className='App' >
       <Router>
      <Header/>
     
        <Routes>
          <Route exact path="/" element={ <Login/>} ></Route>
          <Route exact path="/login" element={ <Login/>} ></Route>
          <Route exact path="/home" element={ <Home/>} ></Route>
          <Route exact path="/detail/:id" element={ <Detail/>} ></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
