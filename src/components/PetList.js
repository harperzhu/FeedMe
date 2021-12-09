import React, {useState} from 'react';
import { useParams, Redirect} from 'react-router-dom';

function PetCard(props) {
  
  

  if(props.redirectTo !== undefined) {
    return <Redirect to={`/donation/${props.redirectTo}`} push/>
  
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
              (event) => {props.handleClick(event.currentTarget.id);}
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
  let [redirectTo, setRedirectTo] = useState(undefined);

  const handleClick = () => {
    console.log("You clicked on", props.pet.name);
    setRedirectTo(props.pet.name);
  }

  const PetClick = function (props){
    Object.values(props.pets).map((pet) => {
      return <PetCard key={pet.name} pet={pet} handleClick={handleClick} redirectTo={redirectTo}/>
    })
  }

  let pet = props.pet; //shortcut

    return(
        <div id="petList">
          <div className='profile-cards'>
          {PetClick}
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