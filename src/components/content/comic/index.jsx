import React from 'react';
import Header from './header';
import LeftMenu from './leftMenu';
import Spinner from "../shared/spinner";
import "./index.scss";
import CharactersList from '../shared/characterList';
import CharactersListFilters from '../characters/characterListFilters';

export default class Comic extends React.PureComponent {

    render() {
        const { comic, isLoadingCharacters } = this.props;
        
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={comic && comic.title ? comic.title : "Comic Title"} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <LeftMenu id={comic ? comic.id : null} />
                        </div>
                        <div className="col-md-10">
                            <img height="400" width="400" src={comic ? comic.thumbnail.path + "." + comic.thumbnail.extension : ""} alt="" className="img-full" />
                            <div className="text-justify pt-5">
                                <h3>{comic && comic.description ? comic.description : ""}</h3>
                            </div>
                            {comic && comic.id ?
                                <div className="container">
                                    <div className="comics">
                                        <h3 className="pt-4 pb-4">Characters</h3>
                                        <Spinner loading={isLoadingCharacters}>
                                            <CharactersList/>
                                            <CharactersListFilters comicId={comic.id} />
                                        </Spinner>
                                    </div>
                                </div>                                
                                :
                                ""
                            }
                        </div>

                    </div>
                </div>             
            </div>
        )
    }
}