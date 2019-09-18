import React from 'react';
import Header from './header';
import LeftMenu from './leftMenu';
import Spinner from "../shared/spinner";
import "./index.scss";
import CharactersList from '../shared/characterList';
import CharactersListFilters from '../characters/characterListFilters';
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

export default class Story extends React.PureComponent {

    render() {
        const { story, isLoadingCharacters,isFavorite,removeFavorite,addToFavorites } = this.props;
        
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={story && story.title ? story.title : "story Title"} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <LeftMenu id={story ? story.id : null} />
                        </div>
                        <div className="col-md-10">
                        <div className="favorite">
                        {isFavorite(story ? story.id : null) ? <IoIosHeart onClick={() => removeFavorite(story)}/> : <IoIosHeartEmpty onClick={() => addToFavorites(story)}/>}        
                        </div>
                        <img height="400" width="400" src={story && story.thumbnail ? story.thumbnail.path + "." + story.thumbnail.extension : "/marvel-universe-logo.jpg"} alt="" className="img-full" />
                            <div className="text-justify pt-5 w98">
                                <h3>{story && story.description ? story.description : ""}</h3>
                            </div>
                            {story && story.id ?
                                <div className="container">
                                    <div className="stories">
                                        <h3 className="pt-4 pb-4">Characters</h3>
                                        <Spinner loading={isLoadingCharacters}>
                                            <CharactersList/>
                                            <CharactersListFilters storyId={story.id} />
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