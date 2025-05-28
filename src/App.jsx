import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  
  return (
   <>
    <div> AYUSH count {num}</div>
    <button onClick={() => setNum(num + 1)}> increae</button>
    <button onClick={() => setNum(num + 1)}> decrease</button>
    <button onClick={() =>setNum(0)}> reset</button>
   
   </>
  );
};

export default App;
