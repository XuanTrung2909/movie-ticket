import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../Assets/img/tix-logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import {NAVLIST} from './../Ulti/constants'
import { AccountCircle } from "@material-ui/icons";

export default function Header(props) {
  const navList = NAVLIST;

  const renderNavbar = () => {
    return navList.map((navItem) => {
      return (
        <li key={navItem.value}>
          <NavLink
            activeClassName="active"
            className="navlink"
            to={navItem.path}
            onClick={handlCloseMenu}
          >
            {navItem.name}
          </NavLink>
        </li>
      );
    });
  };

  const [checkMenu, setCheckMenu] = useState(false);
  const handleOpenMenu = () => {
    setCheckMenu(true);
  };
  const handlCloseMenu = () => {
    setCheckMenu(false);
  };
  return (
    <div className="header row">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Tix.vn" />
        </Link>
      </div>
      <ul className="nav row">{renderNavbar()}</ul>
      <div className="sign">
        <Link className="link" to="/dang-nhap">
          <Button><AccountCircle fontSize='large'></AccountCircle>Đăng Nhập</Button>
        </Link>
        <Link className="link" to="/dang-ky">
          <Button><AccountCircle fontSize='large'></AccountCircle>Đăng Ký</Button>
        </Link>
      </div>
      <div className="icon-menu">
        <IconButton className="btn-menu" onClick={handleOpenMenu}>
          <MenuIcon fontSize="large"></MenuIcon>
        </IconButton>
      </div>
      <div
        className={
          checkMenu ? "mobile-menu show-menu" : "mobile-menu hide-menu"
        }
      >
        <div className="mobile-sign row">
          <Link className='link' to='/dang-nhap'>
            <Button><AccountCircle fontSize='large'></AccountCircle>Đăng Nhập</Button>
          </Link>
          <Link className='link' to='/dang-ky'>
            <Button><AccountCircle fontSize='large'></AccountCircle>Đăng Ký</Button>
          </Link>
        </div>
        <ul className="mobile-nav">{renderNavbar()}</ul>
      </div>
      <div
        className={checkMenu ? "overlay show" : "overlay hide"}
        onClick={handlCloseMenu}
      ></div>
    </div>
  );
}
