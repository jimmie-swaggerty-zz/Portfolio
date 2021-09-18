import './App.css';

//This allows for active tabs to be selected and is a great router node.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component imports
import Main from './Views/Main';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
