import React, { useState, useEffect } from "react";
import { AboutUs, Intro, Process, Subscription } from "./components/Description";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { FilterControl } from "./components/PetList";
import { PetUpdate } from "./components/mypets/PetUpdate";
import { MyPets } from "./components/mypets/MyPets";
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {DonationWithoutSpecifiedPet} from './components/donation/DonationWithoutSpecifiedPet'
import { useParams } from 'react-router-dom';
import SignInPage from "./components/SignInPage";
import { AddNewPet, ScoreBoard } from "./components/shelterAdd/AddNewPet";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ConfirmPetAddition } from "./components/shelterAdd/ConfirmPetAddition";

function App(props) {
    // =======
    // auth stuff
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
      const auth = getAuth();
  
      //addEventListener("loginEvent", () => {})
      const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser){ //have a user
          console.log("logging in", firebaseUser);
          setCurrentUser(firebaseUser);
          console.log(currentUser);
        } else {
          console.log("logging out");
          setCurrentUser(null);
        }
      })
  
      return () => { //cleanup
        unregisterAuthListener();
      }
    }, [])

    // =======

    // let [pets, setPets] = useState(props.pets);

    // key for petsMap state

    let [CurrentPet, setCurrentPet] = useState("null");


    let [CurrentPetMeal, setCurrentPetMeal] = useState("10");

    //NOTE: PLEASE CONSIDER IF WE NEED TO SAVE THE PROPS.PETS AS STATE SINCE IT NEVER CHANGED
    let [petsMap, setPetsMap] = useState(props.pets);

    let [currentSpecies, setCurrentSpecies] = useState(null);
    let [currentBreed, setCurrentBreed] = useState(null);
    let [currentUpdatedPet, setCurrentUpdatedPet] = useState(null);

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
    }

    const handleCurrentPetMeal = (id, meal) => {
      setCurrentPetMeal(id,meal);
    }


    const handleCurrentUpdatedPet = (id) => {
      console.log(id);
      setCurrentUpdatedPet(id);
    }


    return(
      <div>
        <Header user={currentUser}/>

        <div>
          <Switch>
          <Route exact path="/">
              <Cover />
              <Intro />
              <Process />
              <Subscription />
            </Route>

            <Route path="/signin">
              <SignInPage user={currentUser} />
            </Route>

            <PrivateRoute path="/petList" user={currentUser}>
              <PetList
                user={currentUser}
                pets={props.pets}
                handleCurrentPetCallback={handleCurrentPet}
                filterBreed={currentBreed}
                filterSpecies={currentSpecies}
                filterBreedCallback={handleCurrentBreed}
                filterSpeciesCallback={handleCurrentSpecies}
                clearFilterCallback={clearFilter}
              />
            </PrivateRoute>

            <Route  exact path="/moreinfo">
              <DonationWithoutSpecifiedPet/>
            </Route>

            <PrivateRoute  exact path="/moreinfo/:name" user={currentUser}>
              <Profile pets={props.pets}/>
              <PetUpdate pets={props.pets} currentPet={currentUpdatedPet}/>
                            {/* <DonationForm pets={props.pets} handleCurrentPetMealCallback={handleCurrentPetMeal, handleCurrentPet}/> */}
              
            </PrivateRoute>

            <PrivateRoute  exact path="/liked" user={currentUser}>
              <MyPets pets={props.pets} handleCurrentUpdatedPetCallback={handleCurrentUpdatedPet} user={currentUser}/>
            </PrivateRoute>

            <PrivateRoute  exact path="/liked/:name" user={currentUser}>
            <Profile pets={props.pets}/>
              <PetUpdate pets={props.pets} currentPet={currentUpdatedPet} user={currentUser}/>
            </PrivateRoute>

            <Route exact path="/about">
              <AboutUs />
            </Route>


            <PrivateRoute exact path="/addnewpet" user={currentUser}>
              {/* <Cover /> */}
              <AddNewPet pets={props.pets} breeds={props.breeds} user={currentUser}/>
            </PrivateRoute>

            {/* <Redirect to="/addnewpet/success"/> */}
            <Route exact path="/addnewpet/success">
              <ConfirmPetAddition/>
            </Route>



          </Switch>
        </div>

        <Footer />

      </div>
    );
}


export default App;