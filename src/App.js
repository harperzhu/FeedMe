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
import { Route, Switch, Link, Redirect} from 'react-router-dom';
import {DonationWithoutSpecifiedPet} from './components/donation/DonationWithoutSpecifiedPet'
import SignInPage from "./components/SignInPage";
import { AddNewPet, ScoreBoard } from "./components/shelterAdd/AddNewPet";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ConfirmPetAddition } from "./components/shelterAdd/ConfirmPetAddition";
import { getDatabase, ref, child, set as firebaseSet, push as firebasePush, onValue, get } from 'firebase/database'

function App(props) {
    // =======
    // auth stuff
    const [currentUser, setCurrentUser] = useState(undefined);
    const [pets, setPets] = useState(undefined);
    const db = getDatabase();

    const reloadPet = () => {
      // Get a database reference to our posts
      const dbRef = ref(getDatabase()); //all the object
      get(child(dbRef, "pets")).then((snapshot) => {
        let allThePets = snapshot.val();
        setPets(allThePets);
      }).catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
      const auth = getAuth();
      reloadPet();
  
      //addEventListener("loginEvent", () => {})
      const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser){ //have a user
          console.log("logging in", firebaseUser);
          setCurrentUser(firebaseUser);
          get(child(ref(db), "user/" + firebaseUser.uid)).then((snapshot) => {
            if(snapshot.val() === null){
             console.log(firebaseUser.uid);
             firebaseSet(ref(getDatabase(), "user/" + firebaseUser.uid), addNewUser(firebaseUser)).catch((err) => {console.log(err)}).then((err) => {console.log()})//handle errors in firebase
            }
           
          })
          // const dbRef = ref(db, "user");

          // //addEventListener('databaseValueChange', () => {})
          // const offFunction = onValue(exampleRef, (snapshot) => {
          // const allPosts = snapshot.val(); //extract the value from the snapshot
          // const postKeyArray = Object.keys(allPosts); //[MpsA2, MpsA4, MpsA6, MpsBs]
          // const postsArray = postKeyArray.map((postKey) => {
          //   const thePostCopy = {...allPosts[postKey], firebaseKey: postKey};
          //   return thePostCopy;
    //   })

    //   setMessageArray(postsArray);
    // })
          

        } else {
          console.log("logging out");
          setCurrentUser(null);
        }
      })
  
      return () => { //cleanup
        unregisterAuthListener();
      }
    }, [])

    const addNewUser = (user) => {
      return {
        name: user.displayName,
        PetLikes: [""]
      }
    }


    // =======

    // let [pets, setPets] = useState(props.pets);

    // key for petsMap state

    let [CurrentPet, setCurrentPet] = useState("null");

    let [CurrentPetMeal, setCurrentPetMeal] = useState("10");

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

            <PrivateRoute path="/petlist" user={currentUser}>
              <PetList
                user={currentUser}
                pets={pets}
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
              <Profile pets={pets}/>
              <PetUpdate pets={pets} currentPet={currentUpdatedPet}/>
                            {/* <DonationForm pets={pets} handleCurrentPetMealCallback={handleCurrentPetMeal, handleCurrentPet}/> */}
              
            </PrivateRoute>

            <PrivateRoute  exact path="/liked" user={currentUser}>
              <MyPets pets={pets} handleCurrentUpdatedPetCallback={handleCurrentUpdatedPet} user={currentUser}/>
            </PrivateRoute>

            <PrivateRoute  exact path="/liked/:name" user={currentUser}>
            <Profile pets={pets}/>
              <PetUpdate pets={pets} currentPet={currentUpdatedPet} user={currentUser}/>
            </PrivateRoute>

            <Route exact path="/about">
              <AboutUs />
            </Route>


            <PrivateRoute exact path="/addnewpet" user={currentUser}>
              {/* <Cover /> */}
              <AddNewPet pets={pets} breeds={props.breeds} user={currentUser} reloadPet={reloadPet}/>
            </PrivateRoute>

            {/* <Redirect to="/addnewpet/success"/> */}
            <Route exact path="/addnewpet/success">
              <ConfirmPetAddition pets={pets}/>
            </Route>



          </Switch>
        </div>

        <Footer />

      </div>
    );
}


export default App;