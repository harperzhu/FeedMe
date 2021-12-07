import React, { useState } from "react";
import { AboutUs, Intro, Process } from "./components/Description";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { UpdateBoard } from "./components/update/UpdateBoard";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { MyPetList } from "./components/mypets/MyPetList";
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {DonationWithoutSpecifiedPet} from './components/donation/DonationWithoutSpecifiedPet'
import { useParams } from 'react-router-dom';


function App(props) {
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
          </Switch>
          </div>
          <Footer />

        </div>
    )
}
 

export default App;