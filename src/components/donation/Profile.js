import React from "react";

export function Profile(props) {
  return (
    <div className="donation-page">
      console.log(props.pet);
      <div className="individual-profile">
        <div className="profile-background-wrapper">
        <div className="picture">
      <img src={props.pet.img} alt="dog image" width="460" height="372" />
    </div>

          <div className="mobile-container">
            <div className="pet-info">
              <CardTitle pet={props.pet}/>
              <CardText pet={props.pet}/>
            </div>
          </div>
        </div>
      </div>
    </div>
);

}

export function CardText(props) {
  return (
    <div className="card-text">
      {/* TODO: REMOVE ALL THE BOLD TAGS AND REPLACE WITH CSS */}
      <div className="name">
        <b>Name: {props.pet.name}</b>
      </div>
      <div className="Age">
        <b>Age: {props.pet.age}</b>
      </div>
      <div className="Health">
        <b>Heath: {props.pet.health}</b>
      </div>
      <div className="Type">
        <b>Type: {props.pet.type}</b>
      </div>
      <div className="Breed">
        <b>Breed: {props.pet.breed}</b>
      </div>
      <div className="gender">
        <b>gender: {props.pet.gender}</b>
      </div>
      <div className="X meals left">
        <b>Number of meals left: {props.pet.meals} Meal</b>
      </div>
    </div>
  );
}

export function CardTitle(props) {
  return (
    <h2 className="card-title">{props.pet.name}</h2>
  );
}


export function CardPicture(props) {
  return (
    <div className="picture">
      <img src={props.pet.img} alt="dog image" width="460" height="372" />

    </div>
  );


}
