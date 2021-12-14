import React, {useState} from 'react';
import {Redirect } from 'react-router-dom';

export function ConfirmPetAddition(props) {

  const [redirectTo, setredirectTo] = useState(undefined);

  if (redirectTo !== undefined) {
    return <Redirect to={`/${redirectTo}`} push/>
    
  } else {
  return(
    <div className="mt-5 pt-4 text-center h-100">
      <img src="/img/success.png" alt="cute pet image indicates successful request"></img>
      <h2>Success! </h2>
      <h2> We Received Your Request</h2>
      <br></br>
      <h6>You can view your new added pet by clicking the button below 
      </h6>

      <button className="feed-me"
            id="petlist"
            onClick={
              (event) => {
                setredirectTo(event.currentTarget.id);
              }
            }
          >
              View your pet
          </button>

          <button className="feed-me"
            id="addnewpet"
            onClick={
              (event) => {
                setredirectTo(event.currentTarget.id);
              }
            }
          >
              Add another pet
          </button>
    {/* <h6> if your browser doesn't automatically redirect, click <Redirect to="/petList" push/>here </h6> */}
    </div>
  );
  }
}
