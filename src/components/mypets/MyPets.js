import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

// create cards that contains only the pets user
function MyLikedPetCard(props) {
  const [redirectTo, setredirectTo] = useState();

  if (redirectTo !== undefined) {
    return <Redirect to={`/liked/${redirectTo}`} push />
  } else {
    return (
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img_url} alt={props.pet.name + "'s photo"} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <button className="feed-me"
            id={props.pet.name}
            onClick={() => {setredirectTo(props.pet.name);}}
          >
            More Info
          </button>
        </div>
      </div>
    );
  }
}

// create single card that contains a pet 
function MyPets(props) {
  let likedPets = props.user.PetLikes.filter((pet) => pet.length > 1);
  const pets = props.pets;

  return (
    <div className="petList">
      <div className='profile-cards'>
        {likedPets.map((pet) => <MyLikedPetCard key={pet} pet={pets[pet]} />)}
        
      </div>
    </div>
  );
}

export { MyLikedPetCard, MyPets };