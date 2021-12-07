import React, { useState } from "react";
import { AboutUs, Intro, Process, Subscription } from "./components/Description";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { UpdateBoard } from "./components/update/UpdateBoard";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { MyPetList } from "./components/mypets/MyPetList";
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {DonationWithoutSpecifiedPet} from './components/donation/DonationWithoutSpecifiedPet'
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
=======
import SignInPage from "./components/SignInPage";
>>>>>>> f136ea7f8b971b748c972fb24d77befb8a6b3171


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

    let [currentPet, setCurrentPet] = useState(null);

    let [currentBalance, setCurrentBalance] = useState("100");


    //NOTE: PLEASE CONSIDER IF WE NEED TO SAVE THE PROPS.PETS AS STATE SINCE IT NEVER CHANGED
    let [petsMap, setPetsMap] = useState(props.pets);



    const handleCurrentPet = (id) => {
      setCurrentPet(id);
      
    }

    // const handlePetsMap = (data) =>{
    //   setPetsMap(data);
    // }


    const handleCurrentBalance = (balance) => {
      setCurrentBalance(balance);
    }



    return(
        <div>
          <Header />
<<<<<<< HEAD

          <div>
          <Switch>
                <Route exact path="/">
                  <Cover />
                  <Intro />
                  <Process />
                </Route>

                <Route exact path="/petList">
                  <PetList handleCurrentPetCallback={handleCurrentPet} pets={props.pets}/>
                </Route>


                <Route  exact path="/donation">
                <DonationWithoutSpecifiedPet/>
                </Route>

                <Route  exact path="/donation/:name" >
                  <Profile pets={props.pets}/>
                  <DonationForm pets={props.pets}/>
                </Route>

                {/* <Route  exact path="/update">
                  <UpdateBoard pets={props.pets}/>
                </Route> */}

                <Route exact path="/about">
                  <AboutUs />
                </Route>

                {/* <Redirect exact to="/"> </Redirect> */}
=======
          <Switch>
            <Route  exact path="/">
              <Cover />
              <AboutUs/>
            </Route>
            <Route path="/signin">
              <SignInPage user={currentUser} loginFunction={loginUser} />
            </Route>
            <Route path="/petList">
              <PetList pets={props.pets} />
            </Route>

            <Route  path="/about">
              <AboutUs />
            </Route>

            <Route  exact path="/donation">
              <DonationWithoutSpecifiedPet/>
            </Route>

            <Route  exact path="/donation/:id" element={<id />}>
              <Profile pet={currentPet}/>
              <DonationForm handleCurrentBalanceCallback={handleCurrentBalance}/>
            </Route>

>>>>>>> f136ea7f8b971b748c972fb24d77befb8a6b3171
          </Switch>
          </div>
          <Footer />

<<<<<<< HEAD
        </div>
=======
          </div>
>>>>>>> f136ea7f8b971b748c972fb24d77befb8a6b3171
    )
}


export default App;