import React from 'react';
import Header from './header';
import  Spinner  from "../shared/spinner";
import  CharacterList  from "../shared/characterList";
import  CharacterListFilters from "./characterListFilters";
import  DropDownComics  from "../../dynamic/dropdownComics";

export default class Characters extends React.PureComponent {
    render() {
        const {isCharacterListLoading} = this.props;
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <Spinner loading={isCharacterListLoading}>
                <div className="container">                
                  <div className="d-flex w-100 justify-content-stretch list-filter-group p-4">
                    <div className="w-100 list-filter-item">
                      <DropDownComics isMulti title="Comics" />
                    </div>
                    <div className="w-100 list-filter-item">
                     {/*<DropDownStories isMulti title="Stories"  /> */} 
                    </div>
                    </div>
                    
                    </div>
                <div className="container">
                    <div className="items pl-3">
                        <CharacterListFilters />
                        <CharacterList />                
                    </div>
                </div>
                </Spinner>
            </div>)
    }
}