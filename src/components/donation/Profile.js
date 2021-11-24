import React from "react";

export function Profile(props) {
  return (
    <div className="donation-page">

      <div className="individual-profile">
        <div className="profile-background-wrapper">
      <CardPicture/>

          <div className="mobile-container">
            <div className="pet-info">
              <CardTitle />
              <CardText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export function CardText(props) {
  let currentPet = props.pets;
  return (
    <div className="card-text">
      {/* TODO: REMOVE ALL THE BOLD TAGS AND REPLACE WITH CSS */}
      <div className="name">
        <b>Name: Pochi</b>
      </div>
      <div className="Age">
        <b>Age: 3 years old</b>
      </div>
      <div className="Health">
        <b>Heath: excellent</b>
      </div>
      <div className="Size">
        <b>Size: small</b>
      </div>
      <div className="gender">
        <b>gender: Male</b>
      </div>
      <div className="X meals left">
        <b>Number of meals left: 1 Meal</b>
      </div>
    </div>
  );
}

export function CardTitle(props) {
  return (
    <h2 className="card-title">Pochi</h2>
  );
}


export function CardPicture(props) {
  return (
    <div className="picture">
      <img src="img/16821635369022_.pic.jpg" alt="dog image" width="460" height="372" />
    </div>
  );
}
