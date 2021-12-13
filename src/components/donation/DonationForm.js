import React from "react";
import { Profile } from "./Profile"
import { useParams } from 'react-router-dom';
import _ from 'lodash';




export function DonationForm(props) {


  const {name} = useParams();
  let petName = name;
  let currentPetObj = props.pets[petName];



  //if unspecified
  if(!currentPetObj) {
    return <h2>No pet specified</h2>
  }


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
          </div>
        </div>

        <div className="progress-buttons">
        <button className="donation-button"
            id={props.pets.meals} 
            onClick={
              (event) => {props.handleCurrentPetMealCallback(event.currentTarget.id +1);}
            }
          >
              Donate
          </button>
        </div>
      </div>

    </div>

  );

}


