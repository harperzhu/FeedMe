import { Component } from "react";

export class PetCard extends Component {
  render() {
    return(
      <div className="card">
        <img className="card-img-top" src={this.props.pet.img} alt={this.props.pet.name} />
        <div className="card-body">
          <h3 className="card-title">{this.props.pet.name}</h3>
          <p className="card-text">{this.props.pet.sex + " " + this.props.pet.breed}</p>
          <button>Feed Me</button>
        </div>

        <div className="card">
            <img src="./img/profile pics/sammy.jpeg" alt="a Labrador Retriever & German Shepherd Dog Mix"  />
            <p>Sammy</p>
            <button>Feed Me</button>
        </div>
      </div>
      
      
    );
  }
}

export class PetList extends Component {
  render() {
    return(
      <div>
        {this.props.pets.map((pet) => {
          return <PetCard pet={pet} />
        })}
      </div>
    );
  }
}