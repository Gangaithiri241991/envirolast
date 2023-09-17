import './App.css';
import LandingPage from './component/landingpage';
import Home from './component/home'
import Home1 from './component/home1'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <LandingPage/>

      <Routes>
      
      <Route path="/" element = {<Home/>}/>
      
      </Routes>

    </div>
  );
}

export default App;
