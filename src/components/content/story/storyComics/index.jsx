import React from 'react';
import StoryInfo from '../storyInfo';

export default class StoryComics extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <StoryInfo />
                    </div>
                </div>
                <div className="container">
                    <div className="comics">
                        {/*<ComicsList />*/}
                    </div></div>
            </div>)
    }
}