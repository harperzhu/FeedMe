import React from 'react';
import {Redirect} from 'react-router-dom';
import {useState} from 'react';
import {Dropdown} from 'react-bootstrap';


//renders petCard for every pet
function PetCard(props) {
  const [redirectTo, setredirectTo] = useState(undefined);
  let heartIcon = "favorite";
  let heartColor = "#cc8561";

  if (redirectTo !== undefined) {
    return <Redirect to={`/moreinfo/${redirectTo}`} push/>

  } else {
    return(
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img_url} alt={props.pet.name + "'s image"} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <p className="total-likes">
            <span className="material-icons" style={{ color: heartColor }}>{heartIcon}</span>

            {props.pet.likes} likes</p>
          <button className="feed-me"
            id={props.pet.name}
            onClick={
              (event) => {
                setredirectTo(props.pet.name);
              }
            }
          >
              Support Me
          </button>
        </div>
      </div>
    );
          }
}




//the list of pets that is currently available for voting
function PetList(props) {

  const renderPets = (pets) => {
    let listOfPets = [];
    Object.values(pets).forEach((pet) => {
      if (props.filterBreed === null && props.filterSpecies === null) {
        listOfPets.push(<PetCard key={pet.name} pet={pet} />);
      } else if (props.filterBreed !== null && props.filterBreed === pet.breed) {
        listOfPets.push(<PetCard key={pet.name} pet={pet} />);
      } else if (props.filterSpecies !== null && props.filterSpecies === pet.type) {
        listOfPets.push(<PetCard key={pet.name} pet={pet} />);
      }
    });
    return listOfPets;
  }

    return(
        <div className="petList">
          <div className='container-fluid text-center pt-4'>
            <span className='lnr lnr-paw h1 bg-warning rounded-circle'></span>
            <h1>——Feed a Pet——</h1>
          <div>
              <h2>Not every pet is lucky enough to shine in a contest</h2>
              <p className='text-secondary'>For every vote you casted, we support by buying meals and medicine for dogs who need it the most</p>
            </div>
          </div>
          <FilterControl
            pets={props.pets}
            filterBreedCallback={props.filterBreedCallback}
            filterSpeciesCallback={props.filterSpeciesCallback}
            clearFilterCallback={props.clearFilterCallback}
          />

          <div className='profile-cards'>
            {renderPets(props.pets)}
          </div>
        </div>
    );
}



//filter pets based on criteria
function FilterControl(props) {
  let names = Object.keys(props.pets);

  // breeds
  let breeds = new Set();
  names.forEach((name) => {
    breeds.add(props.pets[name].breed);
  })
  let breedsMenu = [];
  breeds.forEach((breed) => {
    breedsMenu.push(<Dropdown.Item key={breed} id={breed} href="#" onClick={(event)=>{props.filterBreedCallback(event.currentTarget.id)}}> {breed} </Dropdown.Item>);
  });

  //species
  let species = new Set();
  names.forEach((name) => {
    species.add(props.pets[name].type);
  })
  let speciesMenu = [];
  species.forEach((oneSpecies) => {
    speciesMenu.push((<Dropdown.Item key={oneSpecies} id={oneSpecies} href="#" onClick={(event)=>{props.filterSpeciesCallback(event.currentTarget.id)}}> {oneSpecies} </Dropdown.Item>))
  })

  return(
    <div className="d-flex flex-row filters">
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

      <button className="clear" onClick={() => {props.clearFilterCallback()}}>Clear</button>
    </div>
  )
}

export {PetCard, PetList, FilterControl};