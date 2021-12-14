import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, set as firebaseSet } from 'firebase/database'

export function Profile(props) {
  const { name } = useParams();
  let petName = name;
  let currentPetObj = props.pets[petName];
  let user = props.user;
  console.log(user);

  return (
    <div className="donation-page">
      <div className="individual-profile">
        <div className="profile-background-wrapper container-fluid pt-4">
          <div className="row">
            <div className="picture col-lg-6 col-md-12">
              <img className="img-thumbnail" src={currentPetObj.img_url} alt={Object.keys(currentPetObj) + "'s image"}/>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="pet-info container mt-5">
                <div className='container-fluid text-center'>
                  <span className='lnr lnr-paw h1 bg-warning rounded-circle'></span>
                </div>
                <CardTitle pet={currentPetObj} />
                <CardText pet={currentPetObj} user={user}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export function CardText(props) {
  const user = props.user;
  const pet = props.pet;
  const [isLiked, setIsLiked] = useState(user.PetLikes[0].indexOf(pet.name) !== -1);
  console.log(user.PetLikes[0]);

  const addNewPetLikes = (user, isLiked) => {
    let PetLikes = user.PetLikes;

    if(!isLiked){
      PetLikes = PetLikes[0].push(pet.name);
      console.log(PetLikes[0]);
    } else {
      const index = PetLikes[0].indexOf(pet.name);
      if (index > -1) {
        PetLikes[0].splice(index, 1);
        console.log(PetLikes[0]);
      }
    }
    return {
      PetLikes: {PetLikes}
    }
  }
  const handleClick = (event) => {
    firebaseSet(ref(getDatabase(), "user/" + Object.keys(user) + "/PetLikes"), addNewPetLikes(user, isLiked))
    .catch((err) => {console.log(err)})
    .then((err) => {console.log()})//handle errors in firebase
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
      <div className="card-text h3 lead">
        {/* TODO: REMOVE ALL THE BOLD TAGS AND REPLACE WITH CSS */}

        <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: heartColor }}>{heartIcon}</span>
        </button>

        <div className="PetName pb-1">
          <b>Name: {props.pet.name}</b>
        </div>
        <div className="Age pb-1">
          <b>Age: {props.pet.age}</b>
        </div>
        <div className="Health pb-1">
          <b>Heath: {props.pet.health}</b>
        </div>
        <div className="Type pb-1">
          <b>Type: {props.pet.type}</b>
        </div>
        <div className="Breed pb-1">
          <b>Breed: {props.pet.breed}</b>
        </div>
        <div className="Gender pb-1">
          <b>Gender: {props.pet.gender}</b>
        </div>
        <div className="likes pb-1">
          <b>Total Likes: {props.pet.likes}</b>
        </div>
        <div className="PetName pb-1">
          <b>{props.pet.description} </b>
        </div>
      </div>
    </div>
  );
}

function CardTitle(props) {
  return (
    <h1 className="card-title">——{props.pet.name}——</h1>
  );
}


export function CardPicture(props) {

  return (
    <div className="picture">
      <img className="img-thumbnail"src={props.pet.img} alt= {props.pet.name + "'s picture"} />

    </div>
  );


}
