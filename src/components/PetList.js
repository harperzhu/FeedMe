import React, { Component } from 'react';

export class PetCard extends Component {
  render() {
    return(
      <div className="pet-card">
        <img className="pet-image" src={this.props.pet.img} alt={this.props.pet.name} />
        <div className="pet-content">
          <h3 className="pet-name">{this.props.pet.name}</h3>
          <p className="meals-left">{this.props.pet.meals} meals left</p>
          <button className="feed-me">Feed Me</button>
        </div>
      </div>
    );
  }
}

export class PetList extends Component {
  render() {
    return(
        <div id="petList" className="col-9">
          <div className='profile-cards'>
            {this.props.pets.map((pet) => {
              return <PetCard key={pet.name} pet={pet} />
            })}
          </div>
        </div>
    );
  }
}

export class MyPetToggle extends Component {
  render() {
    return(
      <div> placeholder </div>
    )
  }
}