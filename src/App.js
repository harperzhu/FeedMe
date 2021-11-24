import { Component } from "react";
import { AboutUs } from "./components/AboutUs";
import { PetList } from "./components/PetList";
import { Cover } from "./components/shared/Cover";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { UpdateBanner } from "./components/update/UpdateBanner";
import { UpdateBoard } from "./components/update/UpdateBoard";
import { Profile } from "./components/donation/Profile";
import { DonationForm } from "./components/donation/DonationForm";
import { MyPetList } from "./components/mypets/MyPetList";

 
function App(props) {  
    const [pets, setPets] = useState(props.pets);
    
    // callback func
    const handleAdopt = (event) => {
      //create copy of array
      const petCopy = pets.map((pet) => {
        if(pet.name === event.currentTarget.id) { //transform objects if needed
          pet.adopted = true;
        }
        return pet; //return object to go into new array
      })
      setPets(petCopy);
    }

    return(
      <div>
        {/* <Header />
        <AboutUs /> */}
        <Cover />
        <PetList pets={this.props.pets} />ç
        {/* <Profile />
        <DonationForm />
        <UpdateBanner />
        <UpdateBoard />
        <MyPetList />
        <Footer /> */}
      </div>
    )
  }

export default App;