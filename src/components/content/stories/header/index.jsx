import React from "react";
import PageHeader from "../../shared/pageHeader";
//import SearchStoriesInput from '../../../dynamic/searchInput/stories';

export default class StoriesHeader extends React.PureComponent {
  render() {   
    return (
      <PageHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-title pt-4 pb-4">Stories</div>
          {/*<SearchStoriesInput />*/}
        </div>        
      </PageHeader>
    );
  }
}