import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
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
import Profile from './components/Profile';

function App() {
  const [currentUser, setcurrentUser] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <Header setcurrentUser={setcurrentUser} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          {/* <Route path="/logininfo" component={Login} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/recipe/:id" component={RecipeDetails} />
          <Route exact path="/createrecipe/" component={MakeRecipes} />
          <Route exact path="/profile/:id" component={Profiles} />
          <Route exact path="/allprofiles/" component={AllProfiles} />
          <Route exact path="/updaterecipe/:id" component={UpdateRecipe} />
          <Route
            exact
            path="/yourprofile/"
            component={(props) => (
              <Profile {...props} currentuser={currentUser} />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
