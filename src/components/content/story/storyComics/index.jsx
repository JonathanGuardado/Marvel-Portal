import React from 'react';
import Header from '../header';
import LeftMenu from '../leftMenu';
import Spinner from "../../shared/spinner";
import "../index.scss";
import ComicsList from '../../shared/comicList';
import ComicsListFilters from '../../comics/comicsListFilters';

export default class StoryComics extends React.PureComponent {

    render() {
        const { story,  isLoadingComics } = this.props;
        
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
                        <img height="400" width="400" src={story && story.thumbnail ? story.thumbnail.path + "." + story.thumbnail.extension : "/marvel-universe-logo.jpg"} alt="" className="img-full" />
                            <div className="col-md-10 pt-5">
                                <h3>{story && story.description ? story.description : ""}</h3>
                            </div>
                            {story && story.id ?                                
                                <div className="container">
                                    <h3 className="pt-4 pb-4">Comics</h3>
                                    <Spinner loading={isLoadingComics}>
                                        <ComicsList />
                                        <ComicsListFilters storyId={story.id} />
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