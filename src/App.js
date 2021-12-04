import React, { useState } from "react";
import { AboutUs } from "./components/AboutUs";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header, Footer } from "./components/shared/Navigation";
import { UpdateBoard } from "./components/update/UpdateBoard";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { MyPetList } from "./components/mypets/MyPetList";


function App(props) {
    // let [pets, setPets] = useState(props.pets);

    // key for petsMap state
    let [currentPet, setCurrentPet] = useState("Pochi");



    let [petsMap, setPetsMap] = useState(props.pets);



    const handleCurrentPet = (id) => {
      setCurrentPet(id);
      console.log(currentPet);
    }

    return(
        <div>
          <Header />
          {/* <AboutUs /> */}
          <Cover />
          <PetList handleCurrentPetCallback={handleCurrentPet} pets={petsMap}/>
           <DonationForm pet={petsMap[currentPet]}/>
          <UpdateBoard />
          {/* <MyPetList /> */}
          <AboutUs />
          <Footer /> 
        </div>
    )
}
 

export default App;