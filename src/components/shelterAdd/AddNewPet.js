import { React, useState } from "react";
import { useParams, Link} from "react-router-dom";

export function AddNewPet(props) {

    let [CurrentAddedPetKind, setCurrentAddedPetKind] = useState(null);


    const handleCurrentAddedPetKind = (kind) => {
        setCurrentAddedPetKind(kind);
    }


    return (

        <body>

            <AddNewPetCover />
            <main id="about-main">

                <div class="form-group my-5 mx-5 px-5">
                    <form>
                        <div >
                            <label for="exampleFormControlInput1">Pet Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example: Coffee" />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Pet Age</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option> Young (younger than 2 years old)</option>
                                <option> Adult ((younger than 5 years old) </option>
                                <option> Senior (older than 5 years old) </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Pet Health</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Pet Kind</label>
                            <select class="form-control" id="pet-kind"
                                // defaultValue={this.state.selectValue}
                                onChange={        
                                    (event) => {
                                        let selectedValue = event.target.value;
                                        setCurrentAddedPetKind(selectedValue);
                                  }
                                }>

                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Rabbit</option>
                                <option>Bird</option>
                                <option>Reptile</option>
                                <option>Others(please specify below)</option>
                            </select>
                        </div>



                        <PetBreeds breeds={props.breeds} CurrentAddedPetKind={CurrentAddedPetKind} />



                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Pet Health</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Special Needs</option>
                                <option>Healthy</option>
                            </select>
                        </div>




                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="

                            Example:
                            
                            Coffee is a sweet girl and theh perfect companion for a family with adult children. 
                            She will bond incredibly strong with her ‘special person’. 
                            She needs an understanding owner who can work with her to become more independent and who has time to be home with her for part of the day.
                            
                            "></textarea>
                        </div>


                        <br />
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Upload Pet Pictures</label>
                                <br />
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </form>
                    </form>

                </div>

                <Link to="/petList" className="btn btn-lg text-uppercase">
                <button>Submit</button>
                </Link>

            </main>

                    
        </body>
    );
}

    export function PetBreeds(props) {
    console.log(props)
    if (props.CurrentAddedPetKind) {
        let options = [];
        props.breeds[props.CurrentAddedPetKind].forEach((option) => {
            options.push(
                <option> {option} </option>
            )
        })

        return (
            <div class="form-group">
                <label for="exampleFormControlSelect1">Pet Breed</label>
                <select class="form-control" id="pet-breed">
                    {options}
                </select>
            </div>
        );
    } else{

    return (
        <div class="form-group">
            <label for="exampleFormControlSelect1">Pet Breed</label>
            <select class="form-control" id="pet-breed">
                <option>{props.breeds.undefined}</option>
            </select>
        </div>

    );
}
}



function AddNewPetCover() {
    return (
        <div id="cover-img">
            <h1>Add New Pet</h1>
            <p className="sub-head">Food and love, all in one meal.</p>
        </div>
    );
}

// function PetKind(props) {


//     return (
//     )
// }