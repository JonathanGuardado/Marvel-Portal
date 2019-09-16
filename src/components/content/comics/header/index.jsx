import React from "react";
import PageHeader from "../../shared/pageHeader";
import SearchComicsInput from '../../../dynamic/searchInput/comics';

export default class ComicsHeader extends React.PureComponent {
  render() {   
    return (
      <PageHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-title pt-4 pb-4">Comics</div>
          <SearchComicsInput />
        </div>        
      </PageHeader>
    );
  }
}