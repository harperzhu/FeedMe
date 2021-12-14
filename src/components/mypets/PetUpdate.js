import React from "react";
import { useParams} from 'react-router-dom';

function MyLikedPetCard(props) {
  let update = props.update;

  return (
    <div className="d-flex col-sm-12 col-md-6 col-lg-6 col-xl-3">

    <div className="pet-card mb-4 mt-5 pt-4">
      <div className="card-body">
        <div className="row">
          {/*<!--wrap the image-->*/}
          <div className="col-sm-auto col-md-auto col-lg-auto col-xl-12">
            <img src={"/" + update.img} alt={update.caption} className="col-sm-auto col-xl-12 pb-3 pet-image"></img>
          </div>

          {/*<!--wrap the content-->*/}
          <div className="col-sm">
            <h2 className="card-title">{update.date}</h2>
            <p>{update.caption}</p >
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

function PetUpdate(props) {
  const {name} = useParams();
  let petName = name;
  let currentPetObj = props.pets[petName];

  // let currentUserID = props.user 

  let createCard;
  // this means its an empty entry created by addNewPet
  if (currentPetObj.updates[0] === "") {
    createCard = "";
  } else {
    // this means that updates is not in the default add state
    createCard = currentPetObj.updates.map((update) =>
    <MyLikedPetCard update={update} key={update.img}/>);
  }



return (

<div className="profile-cards">
  <main>
    <div className="container">
      <div className="row">
        {/* card list */}
        {createCard}
      </div>
    </div>
  </main>
</div>
);
}




export {MyLikedPetCard, PetUpdate};