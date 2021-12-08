import React from "react";
import { Profile } from "./Profile"
import { useParams } from 'react-router-dom';
import _ from 'lodash';



// TODO: YOU DONT HAVE SCREEN DEFINED
// var scale = screen.width / siteWidth;
// let scale = 0;

// document.querySelector('meta[name="viewport"]')
//   .setAttribute(
//     'content',
//     'width=' + siteWidth + ', initial-scale=' + scale
//   );

export function DonationForm(props) {

  const donationAmountArray = ["$1", "$2", "$3", "$4","$5","$6","$7","$8"];
  let createButton = donationAmountArray.map((amount) =>
    <DonationAmount amount={amount} />
  );


  const {name} = useParams();
  let petName = name;
  let currentPetObj = props.pets[petName];



  //if unspecified
  if(!currentPetObj) {
    return <h2>No pet specified</h2>
  }
  

  // //make a bootstrap carousel (because its fun)
  // let carouselItems = pets.images.map(function(img){
  //   let obj = { src: '../'+img, altText: pets.name, caption: '' };
  //   return obj;
  // })

//IMPLEMENTED HOW TO KNOW IF USER HAS DONATED FOR A CERTAIN  PET


// const HandleDonateBalance(props){
  


// }

  return (
    <div className="container">
      <div className="donation-window">
        <div>
          <h1> You can help save animals today.
            <br />
            For every dollar you donated,
            <br />
            a pet gets one meal.
          </h1>
        </div>

        <div className="mobile-container">
          <div className="payment-amount">

            {createButton}

            {/* <div className="form-item form-type-radio">
              <input type="number" id="edit-submitted-donation-amount-7" name="submitted[donation][amount]" value="$" />
              <label for="amount-7"></label>
            </div> */}

          {/* <div className="form-item form-type-radio">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input type="number" id="edit-submitted-donation-amount-7" name="submitted[donation][amount]" value="$" />
              <div className ="input-group-append">
              <span className ="input-group-text">.00</span>
              </div>
            </div>
            </div> */}

            {/* CUSTOM DONATION AMOUNT START*/}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="(Custom Amount)"/>


            {/* <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div> */}
          </div>
            {/* CUSTOM DONATION AMOUNT END*/}

            <div>your balance:  </div>


          </div>
        </div>

        <div className="progress-buttons">
        <button className="donation-button"
            id={props.pets.meals} 
            onClick={
              (event) => {props.handleCurrentPetMealCallback(event.currentTarget.id +1);}
            }
          >
              Feed Me
          </button>
          <a href="updates.html" className="donate"> Donate </a>
        </div>
      </div>

    </div>

  );

}


export function DonationAmount(props) {
  return (
    <div className="form-item form-type-radio">
      <input type="button" id="edit-submitted-donation-amount-2" name="submitted[donation][amount]" value={props.amount} />
    </div>
  );
}