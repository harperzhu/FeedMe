import React, {useState} from "react";
import {Redirect, Link} from 'react-router-dom';

export function ErrorPage() {
    const [redirectTo, setredirectTo] = useState(undefined);

    if (redirectTo !== undefined) {
        return <Redirect to={`/${redirectTo}`} push/>
        
      } else {

    return (
        <div className="NoPetSpecified mt-5 pt-4 text-center h-100 ">
            <img id= "errorImage"src="/img/404-image.jpeg" alt="image that says error appeared"></img>
            <h2>Uh oh... </h2>
            <h2> We couldn't find the page you are looking for</h2>

                <button className="feed-me"
            id="petlist"
            onClick={
              (event) => {
                setredirectTo("");
              }
            }
          >
              Go to Homepage
          </button>
            
            


            {/* <Redirect exact to="/petList"> </Redirect> */}
            <p> if your browser doesn't redirect after clicking the button, click 
                <Link to="/"> here</Link>
            </p>
        </div>

    );
}
}
