import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Recipes from './Recipes';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/logininfo" component={Login} />
          <Route path="/SignUp" component={Signup} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
