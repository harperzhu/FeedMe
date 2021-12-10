import React, { useState } from "react";
import { useParams} from 'react-router-dom';

function MyLikedPetCard(props) {
  let update = props.update;
  console.log(update.img);

  return (
    <div className="d-flex col-sm-12 col-md-6 col-lg-6 col-xl-3">
      
    <div className="card mb-4 mt-5 pt-5">
      <div className="card-body">
        <div className="row">
          {/*<!--wrap the image-->*/}
          <div className="col-sm-auto col-md-auto col-lg-auto col-xl-12">
            <img src={"/" + update.img} alt={update.caption} className="col-sm-auto col-xl-12 pb-3"></img>
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


  let createCard = currentPetObj.updates.map((update) => 
  <MyLikedPetCard update={update} key={update.img}/>);


return (

<div>
<header className="header-update jumbotron jumbotron-fluid text-white bg-dark">

</header>

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

function MyPetToggle(props) {
    return(
      <div> placeholder </div>
    )
}

export {MyLikedPetCard, PetUpdate, MyPetToggle};