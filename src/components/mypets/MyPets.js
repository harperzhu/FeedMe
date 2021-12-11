import React, { useState } from "react";
import { Redirect, useParams} from 'react-router-dom';


function MyLikedPetCard(props) {
  const [redirectTo, setredirectTo] = useState();
  // let [CurrentPet, setCurrentPet] = useState("null");
  // const handleCurrentPet = (id) => {
  //   console.log(id);
  //   setCurrentPet(id);
  //   // setTimeout(() => console.log(currentPet), 1000);
  // }

  if (redirectTo !== undefined) {
    return <Redirect to={`/liked/${redirectTo}`} push/>
  } else {
    console.log(props);
    return(
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img} alt={props.pet.name} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <p className="meals-left">{props.pet.meals} meals left</p>
          <button className="feed-me"
            id={props.pet.name} 
            onClick={
              (event) => {props.handleCurrentUpdatedPetCallback(event.currentTarget.id);
                setredirectTo(props.pet.name);                
              }
            }
          >
              Feed Me
          </button>
        </div>
      </div>
    );
    }
}

function MyPets(props) {
  
  const {name} = useParams();
  let petName = name;

    return(
        <div id="petList">
          <div className='profile-cards'>
          {  Object.values(props.pets).map((pet) => {
            if(pet.liked === true){
              return <MyLikedPetCard key={pet.name} pet={pet} handleCurrentUpdatedPetCallback={props.handleCurrentUpdatedPetCallback}/>
            }})
          }
          </div>
        </div>
    );
}

function PetClick(props){
  Object.values(props.pets).map((pet) => {
    if(pet.liked === true){
      return <MyLikedPetCard key={pet.name} pet={pet}  />
    }
  })
}

function MyPetToggle(props) {
    return(
      <div> placeholder </div>
    )
}

export {MyLikedPetCard, MyPets, MyPetToggle};