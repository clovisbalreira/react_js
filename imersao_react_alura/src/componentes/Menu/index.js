/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo.png";
import './Menu.css';
import Button from '../Button';
// import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      {/* <a href="/"> */}
      <Link to="/">
        <img
          className="Logo"
          src={Logo}
          alt="clovisflix logo"
        />
      </Link>
      {/* </a> */}
      <Button as={Link} to="/cadastro/Video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
