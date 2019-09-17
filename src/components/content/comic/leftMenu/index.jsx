import React from 'react';
import Navigator from '../../shared/navigator';
import './index.scss';

export default class LeftNavigation extends React.PureComponent {

  render() {
    return (
    <div className="sidenav-left">
      <Navigator to={"/comics/"+ this.props.id}>Comic's characters</Navigator>
      <Navigator to={"/comics/" + this.props.id + "/stories"}>Comic's stories</Navigator>
    </div>
  )
  }

};