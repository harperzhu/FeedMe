import React, { useState } from "react";
import { AboutUs } from "./components/AboutUs";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { UpdateBanner } from "./components/update/UpdateBanner";
import { UpdateBoard } from "./components/update/UpdateBoard";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { MyPetList } from "./components/mypets/MyPetList";
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


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
          <Cover />
          <PetList handleCurrentPetCallback={handleCurrentPet} pets={petsMap}/>
           <DonationForm pet={petsMap[currentPet]}/>
          {/* <UpdateBanner />
          <UpdateBoard />
          <MyPetList /> */}
          <AboutUs />
          <Footer /> 


          <div>

          <Switch>
                <Route  exact path="/">
                  <HomePage />
                </Route>
                

                <Route path="/petList">
                  <PetList pets={pets} />
                </Route>

                <Route  path="/adopt/:id" element={<id />}>
                  <Profile />
                  <DonationAmount/>
                </Route>



                <Route  path="/update">
                  <UpdateBoard />
                </Route>


                <Route  path="/about">
                  <AboutUs />
                </Route>


                <Redirect to="/" />
          </Switch>

          </div>
        </div>
    )
}
 

export default App;