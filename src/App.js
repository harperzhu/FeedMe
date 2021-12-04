import React, { useState } from "react";
import { AboutUs } from "./components/AboutUs";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { UpdateBoard } from "./components/update/UpdateBoard";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { MyPetList } from "./components/mypets/MyPetList";
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';


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
          
          {/* <PetList handleCurrentPetCallback={handleCurrentPet} pets={petsMap}/>
           <DonationForm pet={petsMap[currentPet]}/>
          <UpdateBoard />
          <MyPetList /> */}
          {/* <AboutUs /> */}
            


          <div>

          <Switch>
                <Route  exact path="/">
                  <Cover />
                  <AboutUs/>
                </Route>

                <Route path="/petList">
                  <PetList pets={props.pets} />
                </Route>

                {/* <Route  path="/adopt/:name">
                  <Profile user={prop.users}/>
                  <DonationForm pet={currentPet}/>
                </Route> */}



                {/* <Route  path="/myPets">
                  <UpdateBoard pets={props.user}/>
                </Route> */}


                <Route  path="/about">
                  <AboutUs />
                </Route>


                {/* <Redirect to="/"> </Redirect> */}

          </Switch>

          <Footer />

          </div>
        </div>
    )
}
 

export default App;