import React from 'react';
import Header from '../header';
import LeftMenu from '../leftMenu';
import Spinner from "../../shared/spinner";
import "../index.scss";
import StoriesList from '../../shared/storiesList';
import StoriesListFilters from '../../stories/storiesListFilters';

export default class ComicStories extends React.PureComponent {

    render() {
        const { comic,  isLoadingStories } = this.props;
        console.log(this.props)
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
                            <div className="col-md-10 pt-5">
                                <h3>{comic && comic.description ? comic.description : ""}</h3>
                            </div>
                            {comic && comic.id ?                                
                                <div className="container">
                                    <h3 className="pt-4 pb-4">Stories</h3>
                                    <Spinner loading={isLoadingStories}>
                                        <StoriesList />
                                        <StoriesListFilters comicId={comic.id} />
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