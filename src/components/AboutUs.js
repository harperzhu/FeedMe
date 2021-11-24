import { Component } from "react";

export class AboutUs extends Component {
  render() {
    return(
      <div>
        <h1 className="text-center">About Us</h1>
        <main id="about-main">
          <section className="introduction">
              <h2>Who we are</h2>
              <p>We are a group of students at Unirversity of Washington in Seattle who are animal lovers. We seek ways to utilizing information technology to help build bonds between animal loving people and the animals they are helping.
              </p>            
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
              <p>Email: <a href="mailto:feedme@gmail.com">feedme@gmail.com</a></p>
              <p>Tel: <a href="tel:123-456-789">(123)-456-789</a></p>             
          </section>

        </main>
      </div>
    );
  }
}