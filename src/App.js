import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';






function App() {
  return (
    <div>
    <Router>
      <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route  path='/shop'>
              <ShopPage/>
            </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
