import React from 'react';
import { Link } from 'react-router-dom';

function Cover() {
  return(
    <div id="cover-img">
      <h1>FeedMe</h1>
      <p className="sub-head">Food and love, all in one meal.</p>
      <Link to="/petList" className="btn btn-lg text-uppercase btn-light">Find a pet to feed</Link>
    </div>
  );
}

export {Cover};