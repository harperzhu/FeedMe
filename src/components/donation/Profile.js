import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref,  get,  child, update as firebaseUpdate, onValue  } from 'firebase/database'

export function Profile(props) {
  const { name } = useParams();
  
  let petName = name;
  let currentPetObj = props.pets[petName];

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
                <CardText pet={currentPetObj} user={props.user} uid={props.uid}/>
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

  const [isLiked, setIsLiked] = useState(user.PetLikes.indexOf(pet.name) !== -1);
  const [numLikes, setNumLikes] = useState(pet.likes);

  const db = getDatabase();

  useEffect(() => { //function when component first loads

    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(ref(getDatabase(), "pets/" + pet.name + "/likes"), (snapshot) => {
      setNumLikes(snapshot.val());
    })
    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)


  const addNewPetLikes = () => {
    let PetLikes = user.PetLikes;
    if(!isLiked){

      PetLikes.push(pet.name);

    } else {
      const index = PetLikes.indexOf(pet.name);
      if (index > -1) {
        PetLikes.splice(index, 1);
        if (PetLikes.length === 0){
          PetLikes = [""];
        }
      } 
    }

    return {
      "PetLikes": PetLikes
    }
  }

  const changLikesNumber = () => {
    let likes = numLikes;

    if(!isLiked){
      likes++ ;

    } else {
      likes--;

    }
    return  { "likes": likes }
  }

  const handleClick = (event) => {
    firebaseUpdate(ref(getDatabase(), "user/" + props.uid), addNewPetLikes())
    .catch((err) => {console.log(err)})
    .then((err) => {console.log()})//handle errors in firebase

    firebaseUpdate(ref(getDatabase(), "pets/" + pet.name), changLikesNumber())
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
          <b>Total Likes: {numLikes}</b>
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
