import React from "react";
import {Link} from "react-router-dom";

export function Description() {
  return(
    <div>
      <Intro />
      <Process />
      <Subscription />
    </div>
  )
}

export function AboutUs() {
  return(
    <div className="mt-5 pt-5">
      <h1 className="text-center">About Us</h1>
      <main id="about-main">
        <section className="introduction">
            <h2>Who we are</h2>
            <p>We are a group of students at Unirversity of Washington in Seattle who are animal lovers. We seek ways to utilizing information technology to help build bonds between animal loving people and the animals they are helping.</p>
        </section>

        <section className="description">
            <h2>How it works</h2>
            <p>
                FeedMe is a website providing a fund-raising platform to achieve long-distanced pet feeding
                services. By creating this website, we are exploring the problem of what information problems related to
                pet feeding services are unaddressed.
            </p>
            <p>
                <strong>If you are an animal rescue staff</strong>, you can create new pet profiles and upload photos of the pet once a week so donors
                can ensure the pets are getting taken care of.
            </p>
            <p>
                <strong>If you are an animal lover</strong>, you can use our website to search and filter for your favorite dogs. You can "feed" them & get weekly updates!
            </p>
        </section>

        <section className="contact-info">
            <h2>Contact us</h2>
            <p>Email: <Link to="mailto:feedme@gmail.com">feedme@gmail.com</Link></p>
            <p>Tel: <Link to="tel:123-456-789">(123)-456-789</Link></p>
        </section>

      </main>
    </div>
  );
}

export function Intro() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 no-padding right-align">
          <img className="img-thumbnail" src="./img/puppy.jpg" alt="A cute puppy laying down" />
        </div>
        <div className="col-lg-6 home-about-right no-padding">
							<h1>
							  Connect With
                <br></br>
								Shelter Pets
							</h1>
							<h5>How can we help shelter animals?</h5>
							<p>
              Every year, millions of animals end up in shelters all across the globe. These animals are either rescued from the streets or dropped off at the shelter. Though a lot of these shelters provide outstanding care and attention, there are still limitations to what they can do.
							</p>
              <p>
              Our mission is to support shelters to provide the best resource for stray animals.
              </p>
							<Link to="/petlist" className="lg-btn text-uppercase">Vote For Pets Today</Link>
				</div>
      </div>
    </div>
  )
}

export function Process() {

  // let heartIcon = "favorite";
  // let heartColor = "#cc8561";

  return (
    <div className="container pt-5 my-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="title text-center">
            <h2 className="mb-10">How this works</h2>
            <p className="text-muted">Food and love, all in one meal.</p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-3 col-md-6">
          <span className="lnr lnr-thumbs-up h3"></span>
          <h4>Select A Pet</h4>
          <p>Select a pet from our list of available pets</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="lnr lnr-heart h3"></span>
          <h4>Vote For Pet</h4>
          <p>View more pet info and cast votes</p>


          {/* <span className="material-icons" style={{ color: heartColor }}>{heartIcon}</span>  */}

  
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="lnr lnr-magic-wand h3"></span>
          <h4>Connect With Pet</h4>
          <p>Follow up with all the pets you fed in MyPets</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="lnr lnr-upload h3"></span>
          <h4>Add A Pet</h4>
          <p>Add a new pet to our website</p>
        </div>
      </div>
    </div>
  )
}

export function Subscription(){
  return (
    <div className="container p-4 pb-0">
      <form action="">
          <div className="row justify-content-center">
              <div className="col-auto mb-4 mb-md-0">
              <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
              </p>
              </div>

              <div className="col-md-4 col-12 mb-4 mb-md-0">
                  <div className="form-outline mb-4">
                  <label for="emailInput">Enter your email:</label>
                      <input type="email" id="emailInput" className="form-control" placeholder="feedme@gmail.com" />
                  </div>
              </div>
    
              <div className="col-auto mb-4 mb-md-0">
                  <button type="submit" className="btn btn-primary mb-4">
                      Subscribe
                  </button>
              </div>
          </div>
      </form>
  </div>
  )
}