import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import './App.css';
import Recipes from './Recipes';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import RecipeDetails from './components/RecipeDetails';
import Profiles from './Profiles';
import MakeRecipes from './components/MakeRecipes';
import AllProfiles from './components/AllProfiles';
import UpdateRecipe from './components/UpdateRecipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/logininfo" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/createrecipe/" component={MakeRecipes} />
          <Route path="/profile/:id" component={Profiles} />
          <Route path="/allprofiles/" component={AllProfiles} />
          <Route path="/updaterecipe/:id" component={UpdateRecipe} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
