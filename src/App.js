import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
   
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
   
 
    </div>
    </>
  );
}

export default App;
