import React from 'react';
import Header from './header';
import LeftMenu from './leftMenu';
import Spinner from "../shared/spinner";
import "./index.scss";
import ComicsList from '../shared/comicList';
import ComicsListFilters from '../comics/comicsListFilters';
import StoriesList from '../shared/storiesList';
import StoriesListFilters from '../stories/storiesListFilters';

export default class Character extends React.PureComponent {

    render() {
        const { character, filters, isLoadingComics, isLoadingStories } = this.props;
        console.log(character)
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={character && character.name ? character.name : "Character Name"} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <LeftMenu id={character ? character.id : null} />
                        </div>
                        <div className="col-md-10">
                            <img height="400" width="400" src={character ? character.thumbnail.path + "." + character.thumbnail.extension : ""} alt="" className="img-full" />
                            <div className="col-md-10 pt-5">
                                <h3>{character && character.description ? character.description : ""}</h3>
                            </div>
                            {character && character.id ?
                                <div className="container">
                                    <div className="comics">
                                        <h3 className="pt-4 pb-4">Comics</h3>
                                        <Spinner loading={isLoadingComics}>
                                            <ComicsList/>
                                            <ComicsListFilters characterId={character.id} />
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