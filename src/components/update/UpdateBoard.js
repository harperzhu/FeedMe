import React from 'react';



function PetCard(props) {
    var pet = pro.pet;

    return (
      <div class="d-flex col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            {/*<!--wrap the image-->*/}
            <div class="col-sm-auto col-md-auto col-lg-auto col-xl-12">
              <img src={pet.link} alt={pet.text} class="col-sm-auto col-xl-12 pb-3"> </img>
            </div>

            {/*<!--wrap the content-->*/}
            <div class="col-sm">
              <h2 class="card-title">{pet.date}</h2>
              <p>{pet.text}</p >
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }

  export function UpdateBoard(props) {
    let createCard = props.pets.map((pet) => 
        <PetCard pet={pet} key={pet.name}/>
    );

    return (

    <div>
      <header class="header-update jumbotron jumbotron-fluid text-white bg-dark">

      </header>

      <main>
        <div class="container">
          <div class="row">
            {/* card list */}
            {createCard}
          </div>
        </div>
      </main>
    </div>


    );
  }