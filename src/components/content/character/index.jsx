import React from 'react';
import Header from './header';
import "./index.scss";
//import ComicsList from '../shared/comicsList'

export default class character extends React.PureComponent {
    
    render() {
        const {character,filters} = this.props;        
        
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={character && character.name ? character.name : "Character Name"  }/>
                    </div>
                </div>
                <div className="container">
                <img height="500" width="500" src={character ? character.thumbnail.path + "." + character.thumbnail.extension : ""} alt="" className="img-full" />
                </div>
                <div className="container pt-5">
                <h3>{character && character.description ? character.description : ""}</h3>
                </div>
                <div className="container">
                    <div className="comics">
                        {/*<ComicsList />*/}
                    </div></div>
            </div>)
    }
}