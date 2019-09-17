import React from 'react';
import Header from './header';
import "./index.scss";

export default class Story extends React.PureComponent {

    render() {

        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header name={"Home"} />
                    </div>
                </div>                
                <div className="container">
                    <div className="row">
                        <img height="600" width="600" src={"/marvel-universe-logo.jpg"} alt="" className="img-full" />
                    </div>
                </div>
            </div>

        )
    }
}