import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return(
        <div class="donation-page">

            <div class="individual-profile">
                <div class="profile-background-wrapper">
                    <div class="picture">
                        <img src="img/16821635369022_.pic.jpg" alt="dog image" width="460" height="372" />
                    </div>

                    <div class="mobile-container">
                        <div class="pet-info">
                            <h2 class="card-title">Pochi</h2>
                            <div class="card-text">
                                {/* TODO: REMOVE ALL THE BOLD TAGS AND REPLACE WITH CSS */}
                                <div class="name">
                                    <b>Name: Pochi</b>
                                </div>
                                <div class="Age">
                                    <b>Age: 3 years old</b>
                                </div>
                                <div class="Health">
                                    <b>Heath: excellent</b>
                                </div>
                                <div class="Size">
                                    <b>Size: small</b>
                                </div>
                                <div class="gender">
                                    <b>gender: Male</b>
                                </div>
                                <div class="X meals left">
                                    <b>Number of meals left: 1 Meal</b>
                                </div>
                            </div>
                            <div class="donation-button-wrapper">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}