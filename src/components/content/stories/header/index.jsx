import React from "react";
import PageHeader from "../../shared/pageHeader";
//import InputSearchStory from '../../../dynamic/inputSearchStory';

export default class StoriesHeader extends React.PureComponent {
  render() {   
    return (
      <PageHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-title pt-4 pb-4">Stories</div>
          {/*<InputSearchStory />*/}
        </div>        
      </PageHeader>
    );
  }
}