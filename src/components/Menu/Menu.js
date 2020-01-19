import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    label: 'Trang chu',
    to: '/',
    exact: true
  },
  {
    label: 'Quan ly san pham',
    to: '/products',
    exact: false
  }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={"nav-item " + active}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a href="/" className="nav navbar-brand">
          Connect API
        </a>
        <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
        <ul className="nav navbar-nav">
          {this.showMenuLink(menus)}
        </ul>
        
        <Link to="/cart" className="btn btn-outline-success my-2 form-inline my-sm-0 my-2 my-lg-0" type="submit">Cart</Link>
        </div>
      </nav>
    );
  }
  showMenuLink = (menus) => {
    var result = null;
    result = menus.map((menu, index) => {
      return <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact} />
    })
    return result;
  }
}

export default Menu;
