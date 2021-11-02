import { Button } from "react-bootstrap";
import React from 'react';
import { useHistory } from "react-router-dom";


export default function LogOutBtn() {
  const history = useHistory();

  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <div>
      <Button variant="danger" onClick={logOut} >Logout</Button>
    </div>
  )
}
