import React from "react";
export function DonationWithoutSpecifiedPet() {


    return (
        <div className="NoPetSpecified mt-5 pt-4 text-center h-100 ">
            <img id= "errorImage"src="/img/404-image.jpeg"></img>
            <h2>Uh oh... </h2>
            <h2> We couldn't find the pet you are looking to donate</h2>
            <a href="http://localhost:3000/petList">
                <button >Choose a pet</button>
            </a>


            {/* <Redirect exact to="/petList"> </Redirect> */}
            <h6> if your browser doesn't automatically redirect, click <a href="http://localhost:3000/petList">here</a> </h6>
        </div>

    );
}

