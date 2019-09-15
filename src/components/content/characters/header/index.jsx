import React from "react";
import PageHeader from "../../shared/pageHeader";
import SearchCharactersInput from '../../../dynamic/searchInput/characters';

export default class CharactersHeader extends React.PureComponent {
  render() {   
    return (
      <PageHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-title pt-4 pb-4">Characters</div>
          <SearchCharactersInput />
        </div>        
      </PageHeader>
    );
  }
}