import { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [Color,setColor] =useState("green")
  

  return (
   <>
   <div className="whole" style={{backgroundColor:Color}}>
   <button onClick={()=>setColor("red")}>RED</button>
    <button onClick={()=>setColor("blue")}>RED</button>


    
   </div>
   </>
  );
};

export default App;