import {BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const fetchQuestions = () => {};
  const resetClickHandler = () => {};
  return (
    <BrowserRouter>
     <div className="app" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80)" }}>
      <Header />

      <Routes >
        <Route path='/' element ={<Home
         name={name}
         setName={setName}
         fetchQuestions={fetchQuestions}
         />}/>
        <Route path='/quiz' element ={<Quiz />}/>

        <Route path='/result' element ={<Result
        onReset={resetClickHandler}
        />}/>  
      </Routes >
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
