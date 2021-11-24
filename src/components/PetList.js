import React, { Component } from 'react';

function PetCard(props) {
    return(
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img} alt={props.pet.name} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <p className="meals-left">{props.pet.meals} meals left</p>
          <button className="feed-me">Feed Me</button>
        </div>
      </div>
    );
}

function PetList(props) {
    return(
        <div id="petList" className="col-9">
          <div className='profile-cards'>
            {props.pets.map((pet) => {
              return <PetCard key={pet.name} pet={pet} />
            })}
          </div>
        </div>
    );
}

function MyPetToggle(props) {
    return(
      <div> placeholder </div>
    )
}

export {PetCard, PetList, MyPetToggle};