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


function App(props) {
    // let [pets, setPets] = useState(props.pets);

    // key for petsMap state
    let [currentPet, setCurrentPet] = useState("Pochi");

    let [currentBalance, setCurrentBalance] = useState("100");


    let [petsMap, setPetsMap] = useState(props.pets);



    const handleCurrentPet = (id) => {
      setCurrentPet(id);
      console.log(currentPet);
    }

    const handleCurrentBalance = (balance) => {
      setCurrentBalance(balance);
      console.log(currentBalance);
    }


    return(
        <div>
          <Header />
          {/* <AboutUs /> */}
          {/* <Cover /> */}
          
          {/* <PetList handleCurrentPetCallback={handleCurrentPet} pets={petsMap}/> */}
           <DonationForm pet={petsMap[currentPet]}/>
          <UpdateBoard />
          <MyPetList />
          {/* <AboutUs /> */}
            


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

<<<<<<< HEAD

                <Route  exact path="/donation">

              <DonationWithoutSpecifiedPet/>
                {/* <Redirect exact to="/petList"> </Redirect> */}
                </Route>


                <Route  exact path="/donation/:id" element={<id />}>
                  <Profile pet={currentPet}/>
                  <DonationForm handleCurrentBalanceCallback={handleCurrentBalance}/>
                </Route>

                



                {/* <Route  exact path="/update">
                  <UpdateBoard pets={props.pets}/>
=======
                {/* <Route  path="/adopt/:name">
                  <Profile user={prop.users}/>
                  <DonationForm pet={currentPet}/>
                </Route> */}



                {/* <Route  path="/myPets">
                  <UpdateBoard pets={props.user}/>
>>>>>>> 4747f56ede671beb3756f3b4d401c18853fe9554
                </Route> */}


                <Route exact path="/about">
                  <AboutUs />
                </Route>


                {/* <Redirect exact to="/"> </Redirect> */}

          </Switch>

          <Footer />

          </div>
        </div>
    )
}
 

export default App;