import { Button } from "react-bootstrap";
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";


export default function LogOutBtn() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/login');
  }

  const showLogoutBtn = () => {
    return <Button variant="danger" onClick={logOut} >Logout</Button>;
  }

  return (
    <div>
      { token ? showLogoutBtn() : null }
    </div>
  )
}
