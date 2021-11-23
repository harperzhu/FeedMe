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

export default class App extends Component {
  constructor(props) {
    super(props);
    const pets = this.props.pets;
  }

  render() {
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
}