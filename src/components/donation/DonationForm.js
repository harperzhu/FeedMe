// export function DonationForm(props){
// return()
import { Component } from "react";


var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

export function DonationForm () {

    return(
      <div class="donation-window">
      <h1>
          You can help save animals today.
      </h1>


      <div class="donation-steps">
              <a href="#" class="donation-step-button donation-step-button-green">Amount</a>
              <hr class="donation-button-line"></hr>
              <a href="#" class="donation-step-button donation-step-button-grey">Billing</a>
              <a href="#" class="donation-step-button donation-step-button-grey">Payment</a>
      </div>

      <div class="mobile-container">
      <div class="payment-amount">

          <div class="form-item form-type-radio">
              <input type="button" id="edit-submitted-donation-amount-2" name="submitted[donation][amount]" value="$15">
          </div>


          <div class="form-item form-type-radio">
              <input type="button" id="edit-submitted-donation-amount-2" name="submitted[donation][amount]" value="$20">
          </div>



          <div class="form-item form-type-radio">
              <input type="button" id="edit-submitted-donation-amount-3" name="submitted[donation][amount]" value="$25">
          </div>



          <div class="form-item form-type-radio">
              <input type="button" id="edit-submitted-donation-amount-4" name="submitted[donation][amount]" value="$35">
          </div>



          <div class="form-item form-type-radio">
              <input type="button" id="edit-submitted-donation-amount-5" name="submitted[donation][amount]" value="$60">
          </div>


          <div class="form-item form-type-radio">
              <input type="button" id="edit-submitted-donation-amount-6" name="submitted[donation][amount]"
                  value="$100">
          </div>

          <div class="form-item form-type-radio">
                  <input type="number" id="edit-submitted-donation-amount-7" name="submitted[donation][amount]" value="$">
                  <label for="amount-7"></label>
          </div>



      </div>
      </div>

  /* continue to billing */
  <div class="progress-buttons">
          <a href="updates.html" class="donate"> Donate </a>
  </div>


      </div>
    )

}
