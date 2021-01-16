import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import Home from './components/Home/home';
import Room from './components/Room/room';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/xd" component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;