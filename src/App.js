import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './components/pages/homepage.component';
import './App.css';


const HatsPage = ()=>{
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}



function App() {
  return (
    <div>
    <Router>
     <Switch>
   
    <Route exact path='/'>
      <HomePage/>
    </Route>
    <Route  path='/hats'>
      <HatsPage/>
    </Route>
      
     </Switch>

    </Router>
    </div>
  );
}

export default App;
