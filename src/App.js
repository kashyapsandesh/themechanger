import React,{useState} from "react";
import "./App.css";
import NavBar from "./NavBar";

function App() {
 const [darkMode, setdarkMode] = useState(false)
  var toogle=(e)=>{
    const checked=e.target.checked;
    if(checked){
      setdarkMode(true);
    }else{
      setdarkMode(false);
    }
  }
    return (
      <div
        className="App"
        style={
          darkMode
            ? { backgroundColor: "black", height: "100vh" }
            : { backgroundColor: "white", height: "100vh" }
        }
      >
        <NavBar onClick={toogle} />
      </div>
    );
  };

export default App;
