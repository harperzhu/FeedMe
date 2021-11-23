import { Component } from "react";


var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

export class DonationForm extends Component {
  render() {
    return(
        <p>DonationForm placeholder</p>
    );
  }
}


