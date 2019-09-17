import React from 'react';
import Navigator from '../../shared/navigator';
import './index.scss';

export default class LeftNavigation extends React.PureComponent {

  render() {
    return (
    <div className="sidenav-left">
      <Navigator to={"/stories/"+ this.props.id}>Story's characters</Navigator>
      <Navigator to={"/stories/" + this.props.id + "/comics"}>Story's Comics</Navigator>
    </div>
  )
  }

};