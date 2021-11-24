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
    let [currentPet, setCurrentPet] = useState("Pochi");

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
<<<<<<< HEAD
           <DonationForm pet={petsMap[currentPet]}/>
=======
          {/* <Profile /> */}
          <DonationForm />
>>>>>>> 791ea91ecfbd78d371b8d3a9a8a71f478b784abc
          {/* <UpdateBanner />
          <UpdateBoard />
          <MyPetList /> */}
          <AboutUs />
          <Footer /> 
        </div>
    )
}
 

export default App;