import React from 'react';
import { Link } from 'react-router-dom';
import Navigator from '../../shared/navigator';
import './index.scss';

export default class LeftNavigation extends React.PureComponent {

  render() {
    return (
    <div className="sidenav-left">
      <Navigator to={"/characters/"+ this.props.id}>Character's comics</Navigator>
      <Navigator to={"/characters/" + this.props.id + "/stories"}>Character's stories</Navigator>
    </div>
  )
  }

};