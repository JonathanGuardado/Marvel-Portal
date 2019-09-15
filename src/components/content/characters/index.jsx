import React from 'react';
import Header from './header';
import  CharacterList  from "../shared/characterList";
import  CharacterListFilters from "./characterListFilters";

export default class Characters extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <div className="container">
                    <div className="items">
                        <CharacterListFilters />
                        <CharacterList />                
                    </div></div>
            </div>)
    }
}