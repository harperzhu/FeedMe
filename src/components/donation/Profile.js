import React, { Component } from "react";

export function Profile(props) {
    return(
        <div className="donation-page">

            <div className="individual-profile">
                <div className="profile-background-wrapper">
                    <div className="picture">
                        <img src="img/16821635369022_.pic.jpg" alt="dog image" width="460" height="372" />
                    </div>

                    <div className="mobile-container">
                        <div className="pet-info">
                            <h2 className="card-title">Pochi</h2>
                            <div className="card-text">
                                {/* TODO: REMOVE ALL THE BOLD TAGS AND REPLACE WITH CSS */}
                                <div className="name">
                                    <b>Name: Pochi</b>
                                </div>
                                <div className="Age">
                                    <b>Age: 3 years old</b>
                                </div>
                                <div className="Health">
                                    <b>Heath: excellent</b>
                                </div>
                                <div className="Size">
                                    <b>Size: small</b>
                                </div>
                                <div className="gender">
                                    <b>gender: Male</b>
                                </div>
                                <div className="X meals left">
                                    <b>Number of meals left: 1 Meal</b>
                                </div>
                            </div>
                            <div className="donation-button-wrapper">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );

}