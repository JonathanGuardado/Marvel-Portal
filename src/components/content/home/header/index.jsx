import React from 'react';
import PageHeader from "../../shared/pageHeader";

export default class Header extends React.PureComponent {
    render() {
        return (
            <PageHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="page-title pt-4 pb-4">{this.props.name}</div>
                </div>
            </PageHeader>
        )
    }
}