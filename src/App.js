import React, { useState } from "react";
import { AboutUs, Intro, Process, Subscription } from "./components/Description";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { FilterControl } from "./components/PetList";
import { MyPetList } from "./components/mypets/MyPetList";
import { MyPets } from "./components/mypets/MyPets";
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {DonationWithoutSpecifiedPet} from './components/donation/DonationWithoutSpecifiedPet'
import { useParams } from 'react-router-dom';
import SignInPage from "./components/SignInPage";

function App(props) {
    // =======
    // auth stuff
    const [currentUser, setCurrentUser] = useState(null);

    const loginUser = (userId, userName) => {
      if(!userId){
        console.log("logging out");
        setCurrentUser(null);
      } else {
        console.log("logging in", userName);
        setCurrentUser({uid:userId, userName: userName});
      }
    }
    // =======

    // let [pets, setPets] = useState(props.pets);

    // key for petsMap state

    let [CurrentPet, setCurrentPet] = useState("null");


    let [CurrentPetMeal, setCurrentPetMeal] = useState("10");

    //NOTE: PLEASE CONSIDER IF WE NEED TO SAVE THE PROPS.PETS AS STATE SINCE IT NEVER CHANGED
    let [petsMap, setPetsMap] = useState(props.pets);

    let [currentSpecies, setCurrentSpecies] = useState(null);
    let [currentBreed, setCurrentBreed] = useState(null);

    const handleCurrentSpecies = (species) => {
      setCurrentSpecies(species);
      setCurrentBreed(null);
    }

    const handleCurrentBreed = (breed) => {
      setCurrentBreed(breed);
      setCurrentSpecies(null);
    }

    const clearFilter = () => {
      setCurrentBreed(null);
      setCurrentSpecies(null);
    }

    const handleCurrentPet = (id) => {
      console.log(id);
      setCurrentPet(id);
      // setTimeout(() => console.log(currentPet), 1000);
    }

    const handleCurrentPetMeal = (id, meal) => {
      setCurrentPetMeal(id,meal);
    }

    return(
      <div>
        <Header />

        <div>
          <Switch>
          <Route  exact path="/">
              <Cover />
              <Intro />
              <Process />
              <Subscription />
            </Route>

            <Route path="/signin">
              <SignInPage user={currentUser} loginFunction={loginUser} />
            </Route>

            <Route path="/petList">
              <PetList
                pets={props.pets}
                handleCurrentPetCallback={handleCurrentPet}
                filterBreed={currentBreed}
                filterSpecies={currentSpecies}
                filterBreedCallback={handleCurrentBreed}
                filterSpeciesCallback={handleCurrentSpecies}
                clearFilterCallback={clearFilter}
              />
            </Route>

            <Route  exact path="/donation">
            <DonationWithoutSpecifiedPet/>
            </Route>

            <Route  exact path="/donation/:name" >
              <Profile pets={props.pets}/>
              <DonationForm pets={props.pets} handleCurrentPetMealCallback={handleCurrentPetMeal, handleCurrentPet}/>
            </Route>

            <Route  exact path="/liked" >
              <MyPets pets={props.pets}/>
            </Route>

            <Route exact path="/about">
              <AboutUs />
            </Route>

          </Switch>
        </div>

        <Footer />

      </div>
    )
}


export default App;