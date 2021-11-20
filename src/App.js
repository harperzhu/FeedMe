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
import { MyPets } from "./components/mypets/MyPets";

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <AboutUs />
        <Cover />
        <PetList />
        <Profile />
        <DonationForm />
        <UpdateBanner />
        <UpdateBoard />
        <MyPets />
        <Footer />
      </div>
    )
  }
}