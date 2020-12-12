import './App.css';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Home from './pages';
import SignInPage from './pages/SignIn';



function App() {
  return (
    <Router >
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signin' component={SignInPage}/>
      </Switch>
    </Router>
  );
}

export default App;
