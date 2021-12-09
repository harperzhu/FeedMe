import React from 'react';
import {useParams, Redirect} from 'react-router-dom';
import {useState} from 'react';
import {Dropdown} from 'react-bootstrap';

function PetCard(props) {
  const [redirectTo, setredirectTo] = useState();

  if (redirectTo !== undefined) {
    return <Redirect to={`/donation/${redirectTo}`} push/>
  } else {
    return(
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img} alt={props.pet.name} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <p className="meals-left">{props.pet.meals} meals left</p>
          <button className="feed-me"
            id={props.pet.name}
            onClick={
              (event) => {props.handleCurrentPetCallback(event.currentTarget.id);
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

function PetList(props) {

  const {name} = useParams();
  let petName = name;
    return(
        <div id="petList">
          <FilterControl
            pets={props.pets}
            filterBreedCallback={props.filterBreedCallback}
            filterSpeciesCallback={props.filterSpeciesCallback}
            clearFilterCallback={props.clearFilterCallback}
          />
          <div className='profile-cards'>
          { Object.values(props.pets).map((pet) => {
            console.log(props.filterSpecies);
            console.log(pet);
            if (props.filterBreed === null && props.filterSpecies === null) {
              return <PetCard key={petName} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />
            } else if (props.filterBreed !== null && props.filterBreed === pet.breed) {
              return <PetCard key={petName} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />
            } else if (props.filterSpecies !== null && props.filterSpecies === pet.type) {
              return <PetCard key={petName} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />
            }
          })}
          </div>
        </div>
    );
}

function PetClick(props){
  Object.values(props.pets).map((pet) => {
    return <PetCard key={pet.name} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />
  })
}

function MyPetToggle(props) {
    return(
      <div> placeholder </div>
    )
}


function FilterControl(props) {
  let names = Object.keys(props.pets);

  // breeds
  let breeds = new Set();
  names.map((a) => {
    breeds.add(props.pets[a].breed);
  })
  let breedsMenu = [];
  breeds.forEach((breed) => {
    breedsMenu.push(<Dropdown.Item id={breed} href="#" onClick={(event)=>{props.filterBreedCallback(event.currentTarget.id)}}> {breed} </Dropdown.Item>);
  });

  //species
  let species = new Set();
  names.map((a) => {
    species.add(props.pets[a].type);
  })
  let speciesMenu = [];
  species.forEach((s) => {
    speciesMenu.push((<Dropdown.Item id={s} href="#" onClick={(event)=>{props.filterSpeciesCallback(event.currentTarget.id)}}> {s} </Dropdown.Item>))
  })

  return(
    <div id="filters" className="d-flex flex-row">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
          Species
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {speciesMenu}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
          Breed
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {breedsMenu}
        </Dropdown.Menu>
      </Dropdown>

      <button id="clear" onClick={() => {props.clearFilterCallback()}}>Clear</button>
    </div>
  )
}

export {PetCard, PetList, MyPetToggle, FilterControl};