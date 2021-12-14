import { React, useState } from "react";
import { Redirect } from "react-router-dom";
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

        //get access to our firebase storage where we store our images
        const storage = getStorage();
        //make reference to our profile pics in the storage
        let sRef = storageRef(storage, "/img/profile_pics/" + name + ".png");
        //take in the image file and push it to firebase reference
        await uploadBytes(sRef, imageFile);
        let imgUrl = await getDownloadURL(sRef);
        //initiate the input data object
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
            //the key of data is name, but we also store a name inside of the data object
            //in case we need to reference it
            data[name]["name"] = name;
            //initiate structure of the data object
            data[name]["img_path"] = "/img/profile_pics/" + name + ".png";
            data[name]["img_url"] = imgUrl;
            data[name]['likes'] = 0;
            data[name]["updates"] = [""];


            //set the current data object as the one user just input
            await setCurrentData(data);
            //upload the new pets from the database
            await uploadToDatabase(data);
            //reload the petlist page to add in new uploaded pets
            await props.reloadPet();
            //once we sucessfully received user request, redirect the page to inform the user of the sucessful request
            setShouldRedirect(true);
        } else {
            //prompt the users if they input a name that is the same as one of the existing pet in database/petlist
            alert("Invalid Name for Pet: Please Rename The Pet");
        }
        return data;
    }


    //upload the current data object to database
    function uploadToDatabase(data) {
        const db = getDatabase();
        const name = Object.keys(data)[0];
        const petRef = ref(db, "pets/" + name);
        //set the current pet object with the current data object
        firebaseSet(petRef, data[name]);
    }


    return (
        <div>
            {!shouldRedirect ?
            /*if the page shouldn't be redirect, render the input form*/
                <div>
                    <AddNewPetCover />
                    <main>
                        <div className="form-group my-5 mx-5 px-5">
                            <form onSubmit={handleFormSubmit}>
                                <div >
                                    <label htmlFor="name">Pet Name</label>
                                    <input type="string"
                                        className="form-control"
                                        id="name"
                                        placeholder="Example: Coffee"
                                        required="required"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="age">Pet Age  (in years old)</label>
                                    <select className="form-control" id="age" required>
                                        <option value="selected">Select an option</option>
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

                                <div className="form-group">
                                    <label htmlFor="gender">Pet Gender</label>
                                    <select className="form-control" id="gender" required>
                                        <option value="selected">Select an option</option>
                                        <option >Female</option>
                                        <option>Male</option>
                                    </select>

                                </div>

                                <div className="form-group">
                                    <label htmlFor="type">Pet Kind</label>
                                    <select className="form-control" id="type" required
                                        // defaultValue={this.state.selectValue}
                                        onChange={
                                            (event) => {
                                                let selectedValue = event.target.value;
                                                setCurrentAddedPetKind(selectedValue);
                                            }
                                        }>
                                        <option value="selected">Select an option</option>
                                        <option>Cat</option>
                                        <option>Dog</option>
                                        <option>Rabbit</option>
                                        <option>Bird</option>
                                        <option>Reptile</option>

                                    </select>
                                </div>



                                <PetBreeds breeds={props.breeds} CurrentAddedPetKind={CurrentAddedPetKind} />



                                <div className="form-group">
                                    <label htmlFor="health">Pet Health</label>
                                    <select className="form-control" id="health" required>
                                        <option value="selected">Select an option</option>
                                        <option>Special Needs</option>
                                        <option>Healthy</option>
                                    </select>
                                </div>

                                <br />

                                <label htmlFor="imagePath">Upload Pet Pictures</label>
                                <br />
                                <input type="file" className="form-control-file" id="imagePath" required="required" />


                                {/* <Link to="/addnewpet/success" className="btn btn-lg text-uppercase btn-light"> */}
                                <div className="btn btn-lg text-uppercase" >
                                    <label htmlFor="formSubmitButton">Submit the form here </label>
                                    <input type="submit" value="submit" class="formSubmitButton" />
                                </div>
                                {/* </Link> */}

                            </form>

                        </div>

                    </main>
                </div>
                : <Redirect to="/addnewpet/success" formData={currentData} />
            }
        </div>
    );
}


export function PetBreeds(props) {
    if (props.CurrentAddedPetKind) {
        let options = [];
        props.breeds[props.CurrentAddedPetKind].forEach((option) => {
            options.push(
                <option key={option}> {option} </option>
            )
        })

        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Pet Breed</label>
                <select className="form-control" id="breed" required>
                    <option value="selected">Select an option</option>

                    {options}
                </select>
            </div>
        );
    } else {

        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Pet Breed</label>
                <select className="form-control" id="pet-breed">
                    <option>{props.breeds.undefined}</option>
                </select>
            </div>

        );
    }
}



function AddNewPetCover() {
    return (
        <div className="cover-img">
            <h1>Add A New Pet</h1>
            <p className="sub-head">Food and love, all in one meal.</p >
        </div>
    );
}