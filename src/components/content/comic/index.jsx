import React from 'react';
import Header from './header';
//import "./index.scss";
//import ComicsList from '../shared/comicsList'

export default class Comic extends React.PureComponent {
    
    render() {
        const {comic,filters} = this.props;        
        
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={comic && comic.title ? comic.title : "Comic Tilte"  }/>
                    </div>
                </div>
                <div className="container">
                <img height="500" width="500" src={comic ? comic.thumbnail.path + "." + comic.thumbnail.extension : ""} alt="" className="img-full" />
                </div>
                <div className="container pt-5">
                <h3>{comic && comic.description ? comic.description : ""}</h3>
                </div>
                <div className="container">
                    <div className="comics">
                        {/*<ComicsList />*/}
                    </div></div>
            </div>)
    }
}