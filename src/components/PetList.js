import { Component } from "react";

// export class PetCard extends Component {
//   render() {
//     return(
//       <p>placeholder</p>
//       <div className="card">
//         <img className="card-img-top" src={this.props.pet.img} alt={this.props.pet.name} />
//         <div className="card-body">
//           <h3 className="card-title">{this.props.pet.name}</h3>
//           <p className="card-text">{this.props.pet.sex + " " + this.props.pet.breed}</p>
//           <button>Feed Me</button>
//         </div>

//         <div className="card">
//             <img className="card-img-top" src={this.props.pet.img} alt={this.props.pet.name} />
//             <p className="card-text">{this.props.pet.sex}</p>
//             <button>Feed Me</button>
//         </div>
//       </div>

//     );
//   }
// }

export class PetList extends Component {
  render() {
    return(
      <p>PetList placeholder</p>
      // <div>
      //   {this.props.pets.map((pet) => {
      //     return <PetCard pet={pet} />
      //   })}
      // </div>
    );
  }
}