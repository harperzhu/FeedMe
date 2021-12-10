import { React, useState } from "react";
import { useParams } from "react-router-dom";

export function AddNewPet(props) {

    // const sortedMap = 




    return (

        <body>
            <header class="header-img">

                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a href="#" class="navbar-brand">
                                <img src="img/icon-dark.jfif" /></a>
                        </div>

                        <ul class="nav navbar-nav">
                            <li><a href="index.html">Feed a Pet</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#">My Pets</a></li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <div class="btn btn-dark" href="#" role="button" id="sign-in-btn">
                                <div class="login">
                                    <a href="#">Sign In</a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>

                <h1>ScoreBoard</h1>
            </header>

            <main id="about-main">

                <div>
                    <br />
                    <br />



                    <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <TableHead />
                        </thead>
                        <tbody>
                            <RowPetText pets={props.pets} />
                        </tbody>
                    </table>



                </div>





            </main>


        </body>


    )
}

export function RowPetText(props) {


    return (
        <tr>
            <td>{props.pets.type}</td>
            {/* <td><img src="/public/img/profile_pics/coffee.jpeg" alt="" width="200" height="200"/></td> */}
            <td>{props.pets.type}</td>
            <td>{props.pets.breed}</td>
            <td>{props.pets.age}</td>
            <td>{props.pets.meals}</td>

        </tr>
    );
}

export function TableHead() {


    return (
        <tr>
            <th class="th-sm">Pet Name
            </th>

            <th class="th-sm">Image
            </th>

            <th class="th-sm">Species
            </th>

            <th class="th-sm">breed
            </th>


            <th class="th-sm">Age
            </th>

            <th class="th-sm">Number of likes
            </th>
        </tr>
    );
}


