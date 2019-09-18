import React from 'react';
import Header from '../header';
import LeftMenu from '../leftMenu';
import Spinner from "../../shared/spinner";
import "../index.scss";
import StoriesList from '../../shared/storiesList';
import StoriesListFilters from '../../stories/storiesListFilters';
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

export default class CharacterStories extends React.PureComponent {

    render() {
        const { character, isLoadingStories,isFavorite,removeFavorite,addToFavorites } = this.props;
        
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
                        <div className="favorite">
                        {isFavorite(character ? character.id : null) ? <IoIosHeart onClick={() => removeFavorite(character)}/> : <IoIosHeartEmpty onClick={() => addToFavorites(character)}/>}        
                        </div>
                            <img height="400" width="400" src={character ? character.thumbnail.path + "." + character.thumbnail.extension : ""} alt="" className="img-full" />
                            <div className="pt-5 text-justify w98">
                                <h3>{character && character.description ? character.description : ""}</h3>
                            </div>
                            {character && character.id ?                                
                                <div className="container">
                                    <h3 className="pt-4 pb-4">Stories</h3>
                                    <Spinner loading={isLoadingStories}>
                                        <StoriesList />
                                        <StoriesListFilters characterId={character.id} />
                                    </Spinner>
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