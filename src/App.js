import { useState } from "react";
import Header from "./components/Header";


// let cartLength = 0;


function App() {
  const [state, setState] = useState(0);
  return (
    <div className='App container'>
      <Header state={state} />

      <button onClick={() => setState(state + 1)}>Add to Cart</button>
      <button onClick={() => setState(state - 1)}>Remove to Cart</button>
    </div>
  );
}

export default App;
