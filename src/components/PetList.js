import React from 'react';
import {useParams, Redirect} from 'react-router-dom';
import {useState} from 'react';
import {Dropdown} from 'react-bootstrap';

function PetCard(props) {
  const [redirectTo, setredirectTo] = useState(undefined);

  if (redirectTo !== undefined) {
    return <Redirect to={`/moreinfo/${redirectTo}`} push/>
  } else {
    return(
      <div className="pet-card">
        <img className="pet-image" src={props.pet.img} alt={props.pet.name} />
        <div className="pet-content">
          <h3 className="pet-name">{props.pet.name}</h3>
          <p className="meals-left">{props.pet.likes} likes</p>
          <button className="feed-me"
            id={props.pet.name}
            onClick={
              (event) => {props.handleCurrentPetCallback(event.currentTarget.id);
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

function PetList(props) {
  const {name} = useParams();

  const renderPets = (pets) => {
    let listOfPets = [];
    Object.values(pets).map((pet) => {
      console.log(props.filterSpecies);
      console.log(pet);
      if (props.filterBreed === null && props.filterSpecies === null) {
        listOfPets.push(<PetCard key={petName} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />);
      } else if (props.filterBreed !== null && props.filterBreed === pet.breed) {
        listOfPets.push(<PetCard key={petName} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />);
      } else if (props.filterSpecies !== null && props.filterSpecies === pet.type) {
        listOfPets.push(<PetCard key={petName} pet={pet} handleCurrentPetCallback={props.handleCurrentPetCallback} />);
      }
    });
    return listOfPets;
  }

  let petName = name;
    return(
        <div id="petList">
          <div className='container-fluid text-center pt-4'>
            <span className='lnr lnr-paw h1 bg-warning rounded-circle'></span>
            <h1>——Feed a Pet——</h1>
            <div>
              <h3>Not every pet is lucky enough to shine in a contest</h3>
              <p className='text-secondary'>For every vote you purchase, we support by buying meals and medicine for dogs who need it the most</p>
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