import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default (props) => (
  <div className="top-navigation pb-1 mb-2">
    <NavLink exact  to={props.to} activeClassName="top-navigation-selected"  >
      {props.children}
    </NavLink>
  </div>
) 