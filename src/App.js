
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom'

import Navigation from './components/Navigation';
import SingUp from './components/SingUp';
import SingIn from './components/SingIn';

function App() {
  return (
   <BrowserRouter>
     <Navigation/>
     <div className="container p-4">
     <Routes>
       <Route  path = "/" element = {<SingIn/>}/>
      <Route  path = "/singin" element = {<SingIn/>}/>
      <Route  path = "/singup" element = {<SingUp/>}/>
     </Routes>
     </div>
   </BrowserRouter>
  );
}

export default App;
