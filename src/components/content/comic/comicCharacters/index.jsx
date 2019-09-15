import React from 'react';
import ComicInfo from '../comicInfo';

export default class ComicCharacters extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <ComicInfo />
                    </div>
                </div>
                <div className="container">
                    <div className="comics">
                        {/*<ComicsList />*/}
                    </div></div>
            </div>)
    }
}