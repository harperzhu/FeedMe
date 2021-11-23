import React, { Component } from 'react';

export class PetCard extends Component {
  render() {
    return(
      <div className="card">
        <img src={this.props.pet.img} alt={this.props.pet.name} />
        <div className="card-body">
          <h3 className="card-title">{this.props.pet.name}</h3>
          <p>{this.props.pet.meals} meals left</p>  
          <button>Feed Me</button>
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