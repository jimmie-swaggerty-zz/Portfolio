import './App.css';

//This allows for active tabs to be selected and is a great router node.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component imports
import Main from './Views/Main';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainBanner from './Components/MainBanner';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
