import './App.css';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Home from './pages';



function App() {
  return (
    <Router >
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
