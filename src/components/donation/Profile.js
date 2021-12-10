import { React, useState } from "react";
import { useParams } from "react-router-dom";

export function Profile(props) {
  const { name } = useParams();
  let petName = name;
  console.log("========");
  console.log(props.pets[petName]);
  let currentPetObj = props.pets[petName];




  return (
    <div className="donation-page">
      <div className="individual-profile">
        <div className="profile-background-wrapper">
          <div className="picture">
            <img src={"/" + currentPetObj.img} alt="dog image" width="460" height="372" />
          </div>

          <div className="mobile-container">
            <div className="pet-info">
              <CardTitle pet={currentPetObj} />
              <CardText pet={currentPetObj} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export function CardText(props) {

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (event) => {
    setIsLiked(!isLiked);
  }

  let heartColor = "grey";
  let heartIcon = "favorite_border";
  if (isLiked) {
    heartColor = "red";
    heartIcon = "favorite";
  }
  return (
    <div>
      <div className="card-text">
        {/* TODO: REMOVE ALL THE BOLD TAGS AND REPLACE WITH CSS */}

        <button className="btn like-button" onClick={handleClick}>
        <span className="material-icons" style={{ color: heartColor }}>{heartIcon}</span>
      </button>

        <div className="PetName">
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
        <div className="Gender">
          <b>Gender: {props.pet.gender}</b>
        </div>
        <div className="X meals left">
          <b>Number of meals left: {props.pet.meals} Meal</b>
        </div>
      </div>
    </div>
  );
}

export function CardTitle(props) {
  return (
    <h2 className="card-title">{props.pet.PetName}</h2>
  );
}


export function CardPicture(props) {



  return (
    <div className="picture">
      <img src={props.pet.img} alt="dog image" width="460" height="372" />

    </div>
  );


}
