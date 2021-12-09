import React, { useState, useEffect } from 'react';

export default function ProfilePage(props) {

  const user = props.user;



  if(!props.user) {
    return null;
  }

  return (
    <div className="container">


      <h2>
        {user.displayName}'s Profile
      </h2>
    </div>
  )
}