import React from 'react';
import { Link } from 'react-router-dom';

function Cover() {
  return(
    <div id="cover-img">
      <h1>FeedMe</h1>
      <p className="sub-head">Food and love, all in one meal.</p>
      <Link to="/petList" className="btn btn-lg text-uppercase btn-light">Find a pet</Link>
      <br></br>
      <br></br>
      <Link to="/addnewpet" className="btn btn-lg text-uppercase btn-light">Add a pet</Link>
    </div>
  );
}

export {Cover};