import React, { useState } from "react";
import { Redirect, useParams } from 'react-router-dom';
import { getDatabase, ref, child, set as firebaseSet, push as firebasePush, onValue, get } from 'firebase/database'


function MyLikedPetCard(props) {
  const [redirectTo, setredirectTo] = useState();

  let heartIcon = "favorite";
  let heartColor = "#cc8561";
  if (redirectTo !== undefined) {
    return <Redirect to={`/liked/${redirectTo}`} push />
  } else {
    console.log(props);
    return (
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img} alt={props.pet.name + "'s photo"} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <p className="meals-left">

            <span className="material-icons" style={{ color: heartColor }}>{heartIcon}</span>


          </p>
          <button className="feed-me"
            id={props.pet.name}
            onClick={
              (event) => {
                setredirectTo(props.pet.name);
              }
            }
          >
            More Info
          </button>
        </div>
      </div>
    );
  }
}

function MyPets(props) {


  const [allUsers, setAllUsers] = useState(undefined);

  const { name } = useParams();
  let petName = name;

  let uid = Object.keys(props.user);


  const dbRef = ref(getDatabase());

  const createMyLikedPetCard = () => {
    let likedPetCard = Object.values(props.pets).map((pet) => {
      if (pet.liked == true) {
        <MyLikedPetCard key={pet.name} pet={pet} />
      }
    })

    return likedPetCard;
  }

  get(child(dbRef, "user")).then((snapshot) => {
    let allTheUsers = snapshot.val();
    setAllUsers(allTheUsers);
  }).catch((error) => {
    console.error(error);
  });

  console.log(setAllUsers)


  // for(let oneUser in allTheUsers){
  //   if(Object.keys(oneUser) === uid){//then it would mean we have matched the current user
  //     let PetLikes = Object.keys(uid);
  //   }
  // }


  return (
    <div id="petList">
      <div className='profile-cards'>
        {createMyLikedPetCard}
      </div>
    </div>
  );
}


function MyPetToggle(props) {
  return (
    <div> placeholder </div>
  )
}

export { MyLikedPetCard, MyPets, MyPetToggle };