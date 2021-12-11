import React from 'react';
import { Link } from 'react-router-dom';

export function ConfirmPetAddition() {
  return(
    <div className="mt-5 pt-4 text-center h-100">
    <img src="/img/success.png" alt="cute pet image indicates successful request"></img>
    <h2>Success! </h2>
    <h2> We Received Your Request</h2>
    <br></br>
    <h6>You can view your new added pet by clicking the button below 
    </h6>
    <a href="http://localhost:3000/petList">
        <button >View Your Pet</button>
    </a>


    {/* <Redirect exact to="/petList"> </Redirect> */}
    <h6> if your browser doesn't automatically redirect, click <a href="http://localhost:3000/petList">here</a> </h6>
</div>
  );
}
