import { GlobalStyles } from "./Styles/global";
import TypingBox from "./Components/TypingBox";


function App() {

  
  return (
    <div className="canvas">
      <GlobalStyles />
      <h1 style={ {"text-align":'center'} }>Typing Test</h1>
      <TypingBox />
      <h1 style={ {"text-align":'center'} }>Footer</h1>


    </div>

  );
}

export default App;