import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth } from './firebase/firebase.utils';
import './App.css';






class App extends React.Component {
  constructor(){
    super()

    this.state ={
      currentUser: null
    }

  }

  unsubscribeFromAuth =null

  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({ currentUser:user });

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    
  return (
    <div>
    
    <Router>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route  path='/shop'>
              <ShopPage/>
            </Route>
            <Route  path='/signin'>
              <SignInAndSignUpPage/>
            </Route>
      </Switch>
     </Router>
    </div>
  );
  }
}

export default App;
