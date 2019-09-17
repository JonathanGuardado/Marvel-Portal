import React from 'react';
import Navigator from '../content/shared/navigator';
import './index.scss';

export default () => (
  <div id="no-print">
    <div className="header ml-4 mr-4 pt-3 d-flex justify-content-between align-items-center">
      <div className="d-flex">
        {/* <Navigator to="/home">
        Home
      </Navigator> */}
        <Navigator to="/">
          Home
        </Navigator>
        <Navigator to="/characters">
          Characters
      </Navigator>
        <Navigator to="/comics">
          Comics
      </Navigator>
        <Navigator to="/stories">
          Stories
      </Navigator>
      </div>
    </div>
  </div>
);
