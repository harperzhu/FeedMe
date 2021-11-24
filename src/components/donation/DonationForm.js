import React from "react";
import Profile from "./Profile"

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

  const donationAmountArray = ["$1", "$2", "$3", "$4", "$5"];
  let createButton = donationAmountArray.map((amount) =>
    <DonationAmount amount={amount} />
  );


  return (
    <div className="donation-window">

      <DonationSlogan />
      <DonationSteps />
      <div className="payment-amount">
        {createButton}
        <CustomDonationAmount />
      </div>
      <DonationABotton />
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



export function DonationABotton() {
  return (
    <div className="progress-buttons">
      <a href="updates.html" className="donate"> Donate </a>
    </div>
  );
}




export function CustomDonationAmount() {
  return (
    <div className="form-item form-type-radio">
      <input type="number" id="edit-submitted-donation-amount-7" name="submitted[donation][amount]" value="$" />
      <label for="amount-7"></label>
    </div>
  );
}

export function DonationSteps() {
  return (
    <div className="donation-steps">
      <a href="#" className="donation-step-button donation-step-button-green">Amount</a>
      <hr className="donation-button-line"></hr>
      <a href="#" className="donation-step-button donation-step-button-grey">Billing</a>
      <a href="#" className="donation-step-button donation-step-button-grey">Payment</a>
    </div>


  );
}

export function DonationSlogan() {
  return (
    <div>
      <h1> You can help save animals today.
        <br />
        For every dollar you donated,
        <br />
        the selected pet gets one meal.
      </h1>
    </div>

  );
}



