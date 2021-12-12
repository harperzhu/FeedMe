import { React, useState } from "react";
import { useParams, Link, Redirect, Switch } from "react-router-dom";
import { getDatabase, ref, set as firebaseSet } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export function AddNewPet(props) {

    let [CurrentAddedPetKind, setCurrentAddedPetKind] = useState(null);
    let [shouldRedirect, setShouldRedirect] = useState(false);

    let [currentData, setCurrentData] = useState({});


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let name = event.target[0].value;
        let imageFile = event.target[6].files[0];
        const storage = getStorage();
        let sRef = storageRef(storage, "/img/profile_pics/" + name + ".png");

        await uploadBytes(sRef, imageFile);
        let imgUrl = await getDownloadURL(sRef);

        let data = {};
        data[name] = {};

        // lookup a list of all the names
        let invalidNameList = Object.keys(props.pets).map((name) => name.toLowerCase());

        //check if name is in the list
        if (invalidNameList.indexOf(name.toLowerCase()) === -1) {
            // DO NOT CHANGE THIS TO A FOREACH OR MAP
            // THE KEYS ARE STRING NUMBERS
            for (let i = 1; i < 6; i++) {
                data[name][event.target[i].id] = event.target[i].value;
            }
            data[name]["name"] = name;
            data[name]["img_path"] = "/img/profile_pics/" + name + ".png";
            data[name]["img_url"] = imgUrl;
            data[name]['likes'] = 0;
            data[name]["updates"] = [];


            await setCurrentData(data);
            await uploadToDatabase(data);
            await props.reloadPet();
            setShouldRedirect(true);
        } else {
            //error message
            alert("Invalid Name for Pet: Please Rename The Pet");
        }
        console.log(data)
        return data;
    }


    const handleCurrentAddedPetKind = (kind) => {
        setCurrentAddedPetKind(kind);
    }

    function uploadToDatabase(data) {
        const db = getDatabase();
        const name = Object.keys(data)[0];
        const petRef = ref(db, "pets/" + name);
        firebaseSet(petRef, data[name]);
    }


    return (
        <div>
            {!shouldRedirect ?
                <div>
                    <AddNewPetCover />
                    <main id="about-main">

                        <div class="form-group my-5 mx-5 px-5">
                            <form onSubmit={handleFormSubmit}>
                                <div >
                                    <label for="exampleFormControlInput1">Pet Name</label>
                                    <input type="string"
                                        class="form-control"
                                        id="name"
                                        placeholder="Example: Coffee"
                                        required="required"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Pet Age  (in years old)</label>
                                    <select class="form-control" id="age" required>
                                        <option selected="selected" value="">Select an option</option>
                                        <option> under 1</option>
                                        <option> 1</option>
                                        <option> 2</option>
                                        <option> 3</option>
                                        <option> 4</option>
                                        <option> 5</option>
                                        <option> 6</option>
                                        <option> 7</option>
                                        <option> 8</option>
                                        <option> 9</option>
                                        <option> 10</option>
                                        <option> 11</option>
                                        <option> 12</option>
                                        <option> 13</option>
                                        <option> 14</option>
                                        <option> 15</option>
                                        <option> 16</option>
                                        <option> 17</option>
                                        <option> 18</option>
                                        <option> 19</option>
                                        <option> 20</option>
                                        <option> 20 years old and up</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Pet Gender</label>
                                    <select class="form-control" id="gender" required>
                                        <option selected="selected" value="">Select an option</option>
                                        <option >Female</option>
                                        <option>Male</option>
                                    </select>

                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Pet Kind</label>
                                    <select class="form-control" id="type" required
                                        // defaultValue={this.state.selectValue}
                                        onChange={
                                            (event) => {
                                                let selectedValue = event.target.value;
                                                setCurrentAddedPetKind(selectedValue);
                                            }
                                        }>
                                        <option selected="selected" value="">Select an option</option>
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
                                    <select class="form-control" id="health" required>
                                        <option selected="selected" value="">Select an option</option>
                                        <option>Special Needs</option>
                                        <option>Healthy</option>
                                    </select>
                                </div>

                                <br />

                                {/* upload profile pictures*/}
                                <label for="exampleFormControlFile1">Upload Profile Pictures</label>
                                <br />
                                <input type="file" class="form-control-file" id="imagePath" required="required" />

                                <br />
                                <br />
                                <br />

                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>


                                <h1>UPDATE 1</h1>
                                <hr />

                                <div class="form-group">
                                    <label class="control-label" for="date">Date</label>
                                    <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                                </div>


                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">caption</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <label for="exampleFormControlFile1">Upload Upate Pictures 1</label>
                                <br />
                                <input type="file" class="form-control-file" id="UpdateImagePath1" required="required" />
                                <h1>UPDATE 2</h1>

                                <hr />
                                <div class="form-group">
                                    <label class="control-label" for="date">Date</label>
                                    <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                                </div>



                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">caption</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <label for="exampleFormControlFile1">Upload Upate Pictures 1</label>
                                <br />
                                <input type="file" class="form-control-file" id="UpdateImagePath1" required="required" />
                                <h1>UPDATE 3</h1>
                                <hr />

                                <div class="form-group">
                                    <label class="control-label" for="date">Date</label>
                                    <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                                </div>



                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">caption</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <label for="exampleFormControlFile1">Upload Upate Pictures 1</label>
                                <br />
                                <input type="file" class="form-control-file" id="UpdateImagePath1" required="required" />








                                {/* upload update pictures*/}


                                {/* <Link to="/addnewpet/success" className="btn btn-lg text-uppercase btn-light"> */}
                                <div className="btn btn-lg text-uppercase" >
                                    <input type="submit" value="submit" id="formSubmitButton" />
                                </div>
                                {/* </Link> */}

                            </form>

                        </div>

                        {/* 
                <div className="btn btn-lg text-uppercase">
                        <button type="submit" value="submit" onclick={() => {}}> Submit</button>
                        </div> */}



                        {/* 
                <Link to="/petList" className="btn btn-lg text-uppercase">
                    <button onSubmit={handleFormSubmit} >Submit</button>
                </Link> */}

                    </main>
                </div>
                : <Redirect to="/addnewpet/success" formData={currentData} />
            }
        </div>
    );
}


// const [queryInputName, setQueryInputName] = useState('');




//   const handleFormNameChange = (event) => {
//     setQueryInputName(event.target.value);
//   }


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
                <select class="form-control" id="breed" required>
                    <option selected="selected" value="">Select an option</option>

                    {options}
                </select>
            </div>
        );
    } else {

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
            <h1>Add A New Pet</h1>
            <p className="sub-head">Food and love, all in one meal.</p>
        </div>
    );
}



// // function PetKind(props) {


// //     return (
// //     )
// // }
