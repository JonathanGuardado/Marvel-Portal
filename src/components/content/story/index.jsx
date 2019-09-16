import React from 'react';
import Header from './header';
//import "./index.scss";
//import ComicsList from '../shared/comicsList'

export default class Story extends React.PureComponent {
    
    render() {
        const {story,filters} = this.props;        
        console.log(story)
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={story && story.title ? story.title : "Story Tilte"  }/>
                    </div>
                </div>
                <div className="container">
                <img height="500" width="500" src={story && story.thumbnail? story.thumbnail.path + "." + story.thumbnail.extension : "/marvel-universe-logo.jpg"} alt="" className="img-full" />
                </div>
                <div className="container pt-5">
                <h3>{story && story.description ? story.description : ""}</h3>
                </div>
                <div className="container">
                    <div className="comics">
                        {/*<ComicsList />*/}
                    </div></div>
            </div>)
    }
}