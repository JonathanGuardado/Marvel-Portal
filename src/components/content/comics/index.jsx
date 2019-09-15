import React from 'react';
import Header from './header';

export default class Comics extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <div className="container">
                    <div className="comics">
                        {/*<ComicsList />*/}
                    </div></div>
            </div>)
    }
}