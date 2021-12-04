import React from "react";
import { AboutUs } from "../AboutUs";
import { Profile } from "./Profile"

var siteWidth = 1280;
// TODO: YOU DONT HAVE SCREEN DEFINED
// var scale = screen.width / siteWidth;
var scale = 0;

document.querySelector('meta[name="viewport"]')
  .setAttribute(
    'content',
    'width=' + siteWidth + ', initial-scale=' + scale
  );

export function DonationForm(props) {

  const donationAmountArray = ["$1", "$2", "$3", "$4","$5","$6","$7","$8"];
  let createButton = donationAmountArray.map((amount) =>
    <DonationAmount amount={amount} />
  );


  return (
    <div class="container">
      <Profile pet={props.pet} />


      <div class="donation-window">
        <div>
          <h1> You can help save animals today.
            <br />
            For every dollar you donated,
            <br />
            a pet gets one meal.
          </h1>
        </div>

        <div class="mobile-container">
          <div class="payment-amount">

            {createButton}

            {/* <div className="form-item form-type-radio">
              <input type="number" id="edit-submitted-donation-amount-7" name="submitted[donation][amount]" value="$" />
              <label for="amount-7"></label>
            </div> */}

          {/* <div className="form-item form-type-radio">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input type="number" id="edit-submitted-donation-amount-7" name="submitted[donation][amount]" value="$" />
              <div class ="input-group-append">
              <span class ="input-group-text">.00</span>
              </div>
            </div>
            </div> */}

            {/* CUSTOM DONATION AMOUNT START*/}
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="(Custom Amount)"/>


            {/* <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div> */}
          </div>
            {/* CUSTOM DONATION AMOUNT END*/}

            <div>your balance: </div>
          </div>
        </div>

        <div className="progress-buttons">
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