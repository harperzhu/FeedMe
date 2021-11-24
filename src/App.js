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

function App(props) {
    // let [pets, setPets] = useState(props.pets);

    // key for petsMap state
    let [currentPet, setCurrentPet] = useState(null);

    /**
     * Remaps the array of pets into a key/value store (e.g. map)
     * 
     * to access the same pet array call it like this: Object.values(<THE_RETURN_VALUE>)
     * @param {*} mypets - list of pets such as the one from pets.json
     * @returns {
     *  'coffee' : {...},
     *  'pochi' : {...}
     * }
     */
    const remapPets = (mypets) => {
      let obj = {};
      mypets.forEach((pet) => {
        obj[pet.name] = pet;
      })
      return obj;
    }

    let [petsMap, setPetsMap] = useState(remapPets(props.pets));

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
          {/* <Profile /> */}
          {/* <DonationForm /> */}
          {/* <UpdateBanner />
          <UpdateBoard />
          <MyPetList /> */}
          <Footer /> 
        </div>
    )
}
 

export default App;